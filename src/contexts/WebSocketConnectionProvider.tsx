// ** React Imports
import { createContext, useRef, useState, useContext, useEffect } from 'react';

// ** Contexts Imports
import { UsersDataContext } from './UsersDataProvider';

// ** Hooks Imports
import { useInternalMessagesWebSocketHandler } from '../hooks/useInternalMessagesWebSocketHandler';
import { LifeCycleContext } from './LifeCycleProvider';
import { ErrorTypes } from '../types';
import { ErrorContext } from './ErrorContextProvider';
import { RequestStatusContext } from './RequestStatusProvider';

interface IWebSocketConnectionContextType {
  connectWebSocket: () => boolean | null;
  sendWebSocketMessage: (message: unknown) => void;
  createUser: (message: unknown) => void;
  closeConnection: () => void;
  tryPairing: (publicKeyUser1: string, publicKeyUser2: string) => void;
}

const WebSocketConnectionContextInitialValue: IWebSocketConnectionContextType = {
  connectWebSocket: () => null,
  sendWebSocketMessage: () => null,
  createUser: () => null,
  closeConnection: () => null,
  tryPairing: () => null,
};

export const WebSocketConnectionContext = createContext(WebSocketConnectionContextInitialValue);

export const WebSocketConnectionContextProvider = ({ children }: { children: React.ReactNode }) => {
  // ** Contexts
  const { usersData, setUsersData } = useContext(UsersDataContext);
  const { lifeCycle, setLifeCycle } = useContext(LifeCycleContext);
  const { requestStatus, setRequestStatus } = useContext(RequestStatusContext);
  const { error, setError } = useContext(ErrorContext);

  // ** Refs
  const socketRef = useRef<WebSocket | undefined | null>(null);
  const usersDataRef = useRef<{
    fromPublicKey: string | null;
    fromNickName: string | null;
    toPublicKey: string | null;
    toNickName: string | null;
  } | null>(null);
  const lifeCycleRef = useRef<string | null>();
  const errorRef = useRef<ErrorTypes | null>();
  const requestStatusRef = useRef<
    'requestSent' | 'requestReceived' | 'requestConfirmed' | null | undefined
  >();

  // ** Hooks
  const { handleMessage } = useInternalMessagesWebSocketHandler();

  useEffect(() => {
    lifeCycleRef.current = lifeCycle;
  }, [lifeCycle]);

  useEffect(() => {
    errorRef.current = error;
  }, [error]);

  useEffect(() => {
    usersDataRef.current = usersData;
  }, [usersData]);

  useEffect(() => {
    requestStatusRef.current = requestStatus;
  }, [requestStatus]);

  const connectWebSocket = () => {
    if (!socketRef.current) {
      socketRef.current = new WebSocket('wss://www.internal-server-projects.xyz:4000/');
      socketRef.current.addEventListener('open', handleOpen);
      socketRef.current.addEventListener('message', (e) =>
        handleMessage(
          e,
          setLifeCycle,
          setRequestStatus,
          requestStatusRef.current && requestStatusRef.current,
          setError,
        ),
      );
      socketRef.current.addEventListener('close', handleClose);
      socketRef.current.addEventListener('error', handleError);
      return true;
    }
    return false;
  };

  const handleOpen = () => {
    setLifeCycle('online');
  };

  const handleClose = () => {
    if (errorRef.current === ErrorTypes.TheUserHasClosed) {
      window.location.href = '/home';
    } else {
      setUsersData({
        fromPublicKey: null,
        fromNickName: null,
        toPublicKey: null,
        toNickName: null,
      });
      setError(ErrorTypes.ServerError);
    }

    socketRef.current = undefined;
  };

  const handleError = (error: unknown) => {
    console.error('Error de conexión:', error);
  };

  // 3
  const sendWebSocketMessage = (message: unknown) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(message));
    }
  };

  const createUser = (message: unknown) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ createUserData: message }));
    }
  };

  const tryPairing = (publicKeyUser1: string, publicKeyUser2: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(
        JSON.stringify({
          tryPairing: {
            publicKeyUser1: publicKeyUser1,
            publicKeyUser2: publicKeyUser2,
          },
        }),
      );
      usersDataRef.current && setUsersData({ ...usersDataRef.current, toPublicKey: publicKeyUser2 });
    }
  };

  const closeConnection = () => {
    socketRef.current && socketRef.current.close();
  };

  const WebSocketContextValue = {
    connectWebSocket,
    sendWebSocketMessage,
    createUser,
    closeConnection,
    tryPairing,
  };

  return (
    <WebSocketConnectionContext.Provider value={WebSocketContextValue}>
      {children}
    </WebSocketConnectionContext.Provider>
  );
};

// ** React Imports
import { createContext, useRef, useState, useContext, useEffect } from 'react';

// ** Contexts Imports
import { UsersDataContext } from './UsersDataProvider';

// ** Hooks Imports
import { useInternalMessagesWebSocketHandler } from '../hooks/useInternalMessagesWebSocketHandler';
import { LifeCycleContext } from './LifeCycleProvider';
import { ErrorTypes } from '../types';
import { ErrorContext } from './ErrorContextProvider';

interface IWebSocketConnectionContextType {
  connectWebSocket: () => boolean | null;
  connectionStatus: string | null;
  setConnectionStatus: React.Dispatch<React.SetStateAction<string | null>>;
  sendWebSocketMessage: (message: unknown) => void;
  createUser: (message: unknown) => void;
  closeConnection: () => void;
  tryPairing: (publicKeyUser1: string, publicKeyUser2: string) => void;
  setRequestError: React.Dispatch<
    React.SetStateAction<{ title: string; message: string; CTA: string } | null>
  >;
  requestError: { title: string; message: string; CTA: string } | null;
}

const WebSocketConnectionContextInitialValue: IWebSocketConnectionContextType = {
  connectWebSocket: () => null,
  connectionStatus: null,
  setConnectionStatus: () => null,
  sendWebSocketMessage: () => null,
  createUser: () => null,
  closeConnection: () => null,
  tryPairing: () => null,
  setRequestError: () => null,
  requestError: null,
};

export const WebSocketConnectionContext = createContext(WebSocketConnectionContextInitialValue);

export const WebSocketConnectionContextProvider = ({ children }: { children: React.ReactNode }) => {
  // ** Contexts
  const { usersData, setUsersData } = useContext(UsersDataContext);
  const { lifeCycle, setLifeCycle } = useContext(LifeCycleContext);
  const { error, setError } = useContext(ErrorContext);

  // ** States
  const [connectionStatus, setConnectionStatus] = useState<string | null>('offline');
  const [requestError, setRequestError] = useState<{ title: string; message: string; CTA: string } | null>(
    null,
  );

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

  // ** Hooks
  const { handleMessage } = useInternalMessagesWebSocketHandler();

  useEffect(() => {
    lifeCycleRef.current = connectionStatus;
  }, [lifeCycle]);

  useEffect(() => {
    errorRef.current = error;
  }, [error]);

  useEffect(() => {
    usersDataRef.current = usersData;
  }, [usersData]);

  const connectWebSocket = () => {
    if (!socketRef.current) {
      socketRef.current = new WebSocket('wss://www.internal-server-projects.xyz:4000/');
      socketRef.current.addEventListener('open', handleOpen);
      socketRef.current.addEventListener(
        'message',
        (e) => handleMessage(e, setLifeCycle, lifeCycleRef.current, setError), // REVISAR EN EL SERVER
      );
      socketRef.current.addEventListener('close', handleClose);
      socketRef.current.addEventListener('error', handleError);
      return true;
    }
    return false;
  };

  const handleOpen = () => {
    console.log('connected');
    setLifeCycle('online');
  };

  const handleClose = () => {
    console.log('closed');

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

  const sendWebSocketMessage = (message: unknown) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      console.log('Envio mensaje', message);
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
    connectionStatus,
    setConnectionStatus,
    sendWebSocketMessage,
    createUser,
    closeConnection,
    tryPairing,
    setRequestError,
    requestError,
  };

  return (
    <WebSocketConnectionContext.Provider value={WebSocketContextValue}>
      {children}
    </WebSocketConnectionContext.Provider>
  );
};

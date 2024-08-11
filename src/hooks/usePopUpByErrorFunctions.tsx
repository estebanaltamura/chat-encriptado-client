// usePopUpByErrorFunctions.ts
import { useContext, useEffect, useRef } from 'react';
import { Navigate, Router } from 'react-router-dom';
import { ErrorContext } from '../contexts/ErrorContextProvider';
import { LifeCycleContext } from '../contexts/LifeCycleProvider';
import { RequestStatusContext } from '../contexts/RequestStatusProvider';
import { UsersDataContext } from '../contexts/UsersDataProvider';
import { WebSocketConnectionContext } from '../contexts/WebSocketConnectionProvider';

const usePopUpByErrorFunctions = () => {
  const { usersData, setUsersData } = useContext(UsersDataContext);
  const { setLifeCycle } = useContext(LifeCycleContext);
  const { setError } = useContext(ErrorContext);
  const { sendWebSocketMessage } = useContext(WebSocketConnectionContext);
  const { requestStatus, setRequestStatus } = useContext(RequestStatusContext);
  const usersDataRef = useRef(usersData);
  const requestStatusRef = useRef(requestStatus);

  useEffect(() => {
    usersDataRef.current = usersData;
  }, [usersData]);

  useEffect(() => {
    requestStatusRef.current = requestStatus;
  }, [requestStatus]);

  // Handlers
  const acceptDisconnectionByInactivityHandler = () => {
    const path = window.location.pathname;
    const pathInParts = path.split('/');
    const lastPartPath = pathInParts[pathInParts.length - 1];

    if (lastPartPath === 'findingPair') {
      setLifeCycle('userRegistered');
      setError(null);
    } else if (lastPartPath === 'chatRoom') {
      setLifeCycle('chating');
      setError(null);
    }
  };

  const timeOutDisconnectionByInactivityHandler = () => {
    window.location.href = './home';
  };

  const acceptRequestErrorHandler = () => {
    setUsersData({ ...usersDataRef.current, toPublicKey: null, toNickName: null });
    setLifeCycle('userRegistered');
    setError(null);
    setRequestStatus(null);
  };

  const cancelRequestSentHandler = () => {
    const cancelRequestSent = {
      cancelRequestSent: {
        user1: usersDataRef.current.fromPublicKey,
        user2: usersDataRef.current.toPublicKey,
      },
    };

    setRequestStatus(null);
    setUsersData({ ...usersDataRef.current, toPublicKey: null, toNickName: null });
    sendWebSocketMessage(cancelRequestSent);
    setLifeCycle('userRegistered');
    setError(null);
  };

  // 2
  const acceptRequestReceivedHandler = () => {
    if (!usersDataRef.current) throw new Error('User data is undefined');
    const confirmedRequest = {
      confirmedRequest: {
        user1: usersDataRef.current.toPublicKey,
        user2: usersDataRef.current.fromPublicKey,
      },
    };

    setRequestStatus('requestConfirmed');
    setError(null);
    sendWebSocketMessage(confirmedRequest);
  };

  const rejectRequestReceivedHandler = () => {
    const rejectedRequest = {
      rejectedRequest: {
        user1: usersDataRef.current.toPublicKey,
        user2: usersDataRef.current.fromPublicKey,
      },
    };

    setRequestStatus(null);
    setError(null);
    setLifeCycle('userRegistered');
    setUsersData({ ...usersDataRef.current, toPublicKey: null, toNickName: null });
    sendWebSocketMessage(rejectedRequest);
  };

  const timeOutRequestReceivedHandler = () => {
    setRequestStatus(null);
    setError(null);
    setLifeCycle('userRegistered');
    setUsersData({ ...usersDataRef.current, toPublicKey: null, toNickName: null });
  };

  const acceptNickNameErrorHandler = () => {
    setLifeCycle('offline');
    setError(null);
  };

  const acceptUserInsertedAnEmptyEntry = () => {
    setLifeCycle('userRegistered');
    setError(null);
  };

  const canceledRequest = () => {
    setLifeCycle('userRegistered');
    setError(null);
  };

  const acceptTheUserHasClosedHandler = () => {
    window.location.href = './home';
  };

  const acceptServerErrorHandler = () => {
    window.location.href = './home';
  };

  const acceptOtherUserHasClosedHandler = () => {
    setRequestStatus(null);
    setError(null);
    setLifeCycle('userRegistered');
    setUsersData({ ...usersDataRef.current, toPublicKey: null, toNickName: null });
  };

  return {
    acceptDisconnectionByInactivityHandler,
    timeOutDisconnectionByInactivityHandler,
    acceptRequestErrorHandler,
    cancelRequestSentHandler,
    acceptRequestReceivedHandler,
    rejectRequestReceivedHandler,
    timeOutRequestReceivedHandler,
    canceledRequest,
    acceptNickNameErrorHandler,
    acceptUserInsertedAnEmptyEntry,
    acceptServerErrorHandler,
    acceptOtherUserHasClosedHandler,
    acceptTheUserHasClosedHandler,
  };
};

export default usePopUpByErrorFunctions;

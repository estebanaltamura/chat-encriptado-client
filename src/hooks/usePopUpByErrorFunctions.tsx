// usePopUpByErrorFunctions.ts
import { useState, useContext, useRef } from 'react';
import { WebSocketConnectionContext } from '../contexts/WebSocketConnectionProvider';
import { UsersDataContext } from '../contexts/UsersDataProvider';
import { ErrorContext } from '../contexts/ErrorContextProvider';
import { LifeCycleContext } from '../contexts/LifeCycleProvider';
import { ErrorTypes } from '../types';

const usePopUpByErrorFunctions = () => {
  const { setConnectionStatus, connectionStatus, sendWebSocketMessage, closeConnection } =
    useContext(WebSocketConnectionContext);
  const { usersData, setUsersData } = useContext(UsersDataContext);
  const { setLifeCycle } = useContext(LifeCycleContext);
  const { setError } = useContext(ErrorContext);

  const connectionStatusRef = useRef(connectionStatus);
  const usersDataRef = useRef(usersData);

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
    setLifeCycle('userRegistered');
    setError(null);
  };

  // Ver ESTA
  const timeOutRequestErrorHandler = () => {
    if (connectionStatusRef.current === 'requestError') {
      setLifeCycle('userRegistered');
      setError(null);
    }
  };

  const cancelRequestSentHandler = () => {
    const cancelRequestSent = {
      cancelRequestSent: {
        user1: usersDataRef.current.fromPublicKey,
        user2: usersDataRef.current.toPublicKey,
      },
    };
    setUsersData({ ...usersData, toPublicKey: null, toNickName: null });
    sendWebSocketMessage(cancelRequestSent);
    setLifeCycle('userRegistered');
    setError(null);
  };

  const timeOutRequestSentHandler = () => {
    if (connectionStatusRef.current === 'requestSent') {
      const cancelRequestSent = {
        cancelRequestSent: {
          user1: usersDataRef.current.fromPublicKey,
          user2: usersDataRef.current.toPublicKey,
        },
      };
      setUsersData({ ...usersData, toPublicKey: null, toNickName: null });
      sendWebSocketMessage(cancelRequestSent);

      setError(ErrorTypes.ErrorUserDoesntExistOrReject);

      setError(null);
    }
  };

  const acceptRequestReceivedHandler = () => {
    if (!usersDataRef.current) throw new Error('User data is undefined');
    const confirmedRequest = {
      confirmedRequest: {
        user1: usersDataRef.current.toPublicKey,
        user2: usersDataRef.current.fromPublicKey,
      },
    };
    sendWebSocketMessage(confirmedRequest);
    setError(null);
  };

  const rejectRequestReceivedHandler = () => {
    const rejectedRequest = {
      rejectedRequest: {
        user1: usersDataRef.current.toPublicKey,
        user2: usersDataRef.current.fromPublicKey,
      },
    };
    sendWebSocketMessage(rejectedRequest);
    setLifeCycle('userRegistered');
    setUsersData({ ...usersData, toPublicKey: null, toNickName: null });
    setError(null);
  };

  const timeOutRequestReceivedHandler = () => {
    if (connectionStatusRef.current === 'requestReceived') {
      setUsersData({ ...usersData, toPublicKey: null, toNickName: null });
      setLifeCycle('userRegistered');
      setError(null);
    }
  };

  const acceptNickNameErrorHandler = () => {
    setLifeCycle('offline');
    setError(null);
  };

  const timeOutNickNameErrorHandler = () => {
    if (connectionStatusRef.current === 'nickNameError') {
      setLifeCycle('offline');
      setError(null);
    }
  };

  const acceptUserInsertedAnEmptyEntry = () => {
    setLifeCycle('userRegistered');
    setError(null);
  };

  const timeOutUserInsertedAnEmptyEntry = () => {
    if (connectionStatusRef.current === 'userInsertedAnEmptyEntry') {
      setLifeCycle('userRegistered');
      setError(null);
    }
  };

  const acceptServerErrorHandler = () => {
    window.location.href = './home';
  };

  const timeOutServerErrorHandler = () => {
    window.location.href = './home';
  };

  const acceptOtherUserHasClosedHandler = () => {
    window.location.href = './home';
  };

  const timeOutOtherUserHasClosedHandler = () => {
    window.location.href = './home';
  };

  return {
    acceptDisconnectionByInactivityHandler,
    timeOutDisconnectionByInactivityHandler,
    acceptRequestErrorHandler,
    timeOutRequestErrorHandler,
    cancelRequestSentHandler,
    timeOutRequestSentHandler,
    acceptRequestReceivedHandler,
    rejectRequestReceivedHandler,
    timeOutRequestReceivedHandler,
    acceptNickNameErrorHandler,
    timeOutNickNameErrorHandler,
    acceptUserInsertedAnEmptyEntry,
    timeOutUserInsertedAnEmptyEntry,
    acceptServerErrorHandler,
    timeOutServerErrorHandler,
    acceptOtherUserHasClosedHandler,
    timeOutOtherUserHasClosedHandler,
  };
};

export default usePopUpByErrorFunctions;

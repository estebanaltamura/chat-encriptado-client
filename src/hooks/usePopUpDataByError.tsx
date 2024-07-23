// usePopUpDataByError.ts
import { useContext, useRef } from 'react';
import { WebSocketConnectionContext } from '../contexts/WebSocketConnectionProvider';
import { UsersDataContext } from '../contexts/UsersDataProvider';

import { ErrorTypes, IPopDataByError } from '../types';
import { ErrorContext } from '../contexts/ErrorContextProvider';
import usePopUpByErrorFunctions from './usePopUpByErrorFunctions';

const usePopUpDataByError = (): Record<ErrorTypes, IPopDataByError> => {
  const {
    acceptServerErrorHandler,
    timeOutServerErrorHandler,
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
    acceptOtherUserHasClosedHandler,
    timeOutOtherUserHasClosedHandler,
  } = usePopUpByErrorFunctions();

  return {
    [ErrorTypes.ServerError]: {
      title: 'Server Error',
      message: 'Error interacting with the server.',
      CTA: 'Click OK to continue',
      type: 'oneButtonAccept',
      seconds: 30,
      acceptButtonText: 'OK',
      handlerAccept: acceptServerErrorHandler,
      handlerTimeOut: timeOutServerErrorHandler,
    },
    [ErrorTypes.DisconnectionByInactivity]: {
      title: 'Disconnection Due to Inactivity',
      message: 'Due to inactivity of more than 1 minute, the connection is going to be closed.',
      CTA: 'If you want to stay connected, please press the button',
      type: 'oneButtonAccept',
      seconds: 30,
      acceptButtonText: "I'M HERE",
      handlerAccept: acceptDisconnectionByInactivityHandler,
      handlerTimeOut: timeOutDisconnectionByInactivityHandler,
    },
    [ErrorTypes.TheUserHasClosed]: {
      title: 'Connection Closed',
      message: 'You have closed the connection.',
      CTA: 'Click OK to continue',
      type: 'oneButtonAccept',
      seconds: 30,
      acceptButtonText: 'OK',
    },
    [ErrorTypes.OtherUserHasClosed]: {
      title: 'Connection Closed',
      message: 'The other user has closed their chat.',
      CTA: 'Click OK to continue',
      type: 'oneButtonAccept',
      seconds: 30,
      acceptButtonText: 'OK',
      handlerAccept: acceptOtherUserHasClosedHandler,
      handlerTimeOut: timeOutOtherUserHasClosedHandler,
    },
    [ErrorTypes.RequestReceived]: {
      title: 'Chat Request Received',
      message: 'An user wants to talk to you. Please accept or reject the request.',
      CTA: 'Click OK to continue',
      type: 'twoButtons',
      seconds: 30,
      acceptButtonText: 'START CHAT',
      rejectButtonText: 'REJECT',
      handlerAccept: acceptRequestReceivedHandler,
      handlerReject: rejectRequestReceivedHandler,
      handlerTimeOut: timeOutRequestReceivedHandler,
    },
    [ErrorTypes.RequestSent]: {
      title: 'Request Sent',
      message: 'Waiting for response from the other user.',
      CTA: 'Click OK to continue',
      type: 'oneButtonCancel',
      seconds: 30,
      rejectButtonText: 'CANCEL',
      handlerReject: cancelRequestSentHandler,
      handlerTimeOut: timeOutRequestSentHandler,
    },
    [ErrorTypes.UserInsertedAnEmptyEntry]: {
      title: 'Empty Entry',
      message: 'Please insert a valid public key.',
      CTA: 'Click OK to continue',
      type: 'oneButtonAccept',
      seconds: 30,
      acceptButtonText: 'OK',
      handlerAccept: acceptUserInsertedAnEmptyEntry,
      handlerTimeOut: timeOutUserInsertedAnEmptyEntry,
    },
    [ErrorTypes.CanceledRequest]: {
      title: 'Request Canceled',
      message: 'The request has been canceled.',
      CTA: 'Click OK to continue',
      type: 'oneButtonAccept',
      seconds: 30,
      acceptButtonText: 'OK',
    },
    [ErrorTypes.ErrorUserDoesntExistOrReject]: {
      title: 'Error Finding User',
      message: "User doesn't exist or rejected your request.",
      CTA: 'Click OK to continue',
      type: 'oneButtonAccept',
      seconds: 30,
      acceptButtonText: 'OK',
      handlerAccept: acceptRequestErrorHandler,
      handlerTimeOut: timeOutRequestErrorHandler,
    },
    [ErrorTypes.ErrorUserIsTheSame]: {
      title: 'Invalid Public Key',
      message: 'Enter a valid public key different from your own public key.',
      CTA: 'Click OK to continue',
      type: 'oneButtonAccept',
      seconds: 30,
      acceptButtonText: 'OK',
      handlerAccept: acceptRequestErrorHandler,
      handlerTimeOut: timeOutRequestErrorHandler,
    },
    [ErrorTypes.RequesterIsOffline]: {
      title: 'Requester Offline',
      message:
        'The requester is disconnected. Enter a valid public key of an online user or wait for a request.',
      CTA: 'Click OK to continue',
      type: 'oneButtonAccept',
      seconds: 30,
      acceptButtonText: 'OK',
      handlerAccept: acceptRequestErrorHandler,
      handlerTimeOut: timeOutRequestErrorHandler,
    },
    [ErrorTypes.NickNameError]: {
      title: 'Nick Name Error',
      message: 'Nick name should have only alphanumeric characters and at least one character.',
      CTA: 'Click OK to continue',
      type: 'oneButtonAccept',
      seconds: 30,
      acceptButtonText: 'OK',
      handlerAccept: acceptNickNameErrorHandler,
      handlerTimeOut: timeOutNickNameErrorHandler,
    },
  };
};

export default usePopUpDataByError;

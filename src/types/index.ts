export enum ErrorTypes {
  ServerError = 'serverError',
  DisconnectionByInactivity = 'disconnectionByInactivity',
  TheUserHasClosed = 'theUserHasClosed',
  OtherUserHasClosed = 'otherUserHasClosed',
  RequestReceived = 'requestReceived',
  RequestSent = 'requestSent',
  UserInsertedAnEmptyEntry = 'userInsertedAnEmptyEntry',
  CanceledRequest = 'canceledRequest',
  ErrorUserDoesntExistOrReject = 'errorUserDoesntExistOrReject',
  ErrorUserIsTheSame = 'errorUserIsTheSame',
  RequesterIsOffline = 'requesterIsOffline',
  NickNameError = 'nickNameError',
}

export enum lifeCycle {
  offline = 'offline',
  online = 'online',
  userRegistered = 'userRegistered',
  chating = 'chating',
}

export interface IPopDataByError {
  title: string;
  message: string;
  CTA?: string;
  type: string;
  seconds: number;
  acceptButtonText?: string;
  rejectButtonText?: string;
  handlerAccept?: () => void;
  handlerReject?: () => void;
  handlerTimeOut?: () => void;
  CTAtext?: string;
}

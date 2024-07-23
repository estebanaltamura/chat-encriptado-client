// ** React Imports
import { useContext, useEffect, useRef } from 'react';

// ** Contexts Imports
import { ChatHistoryContext } from '../contexts/ChatHistoryProvider';
import { ErrorContext } from '../contexts/ErrorContextProvider';
import { LifeCycleContext } from '../contexts/LifeCycleProvider';
import { UsersDataContext } from '../contexts/UsersDataProvider';
import { ErrorTypes } from '../types';

export const useInternalMessagesWebSocketHandler = () => {
  //  ** Contexts
  const { setChatHistory } = useContext(ChatHistoryContext);
  const { usersData, setUsersData } = useContext(UsersDataContext);
  const { lifeCycle, setLifeCycle } = useContext(LifeCycleContext);
  const { error, setError } = useContext(ErrorContext);

  //  ** Refs
  const usersDataRef = useRef<{
    fromPublicKey: string | null;
    fromNickName: string | null;
    toPublicKey: string | null;
    toNickName: string | null;
  }>();

  useEffect(() => {
    if (usersData) {
      usersDataRef.current = usersData;
    }
  }, [usersData]);

  const handleMessage = (
    event: MessageEvent<any>,
    setLifeCycle: React.Dispatch<
      React.SetStateAction<'offline' | 'online' | 'userRegistered' | 'chating' | null>
    >,
    connectionStatus: string | null | undefined,
    setError: React.Dispatch<React.SetStateAction<ErrorTypes | null>>,
  ) => {
    const message = event.data;
    const pardedMessage = JSON.parse(message);

    //GESTION RECEPCION DE MENSAJES
    console.log('mensaje recibido del servidor: ', pardedMessage);

    //Usuario creado por el servidor
    if (pardedMessage.hasOwnProperty('userCreated') && usersDataRef.current) {
      const userName = pardedMessage.userCreated.userName;
      const nickName = pardedMessage.userCreated.nickName;
      setLifeCycle('userRegistered');
      setUsersData({ ...usersDataRef.current, fromPublicKey: userName, fromNickName: nickName });
    }

    //Solicitud de chat de privado
    if (pardedMessage.hasOwnProperty('requestConnection') && usersDataRef.current) {
      const publicKeySolicitorUserData = pardedMessage.requestConnection.userName;
      const nickNameSolicitorUserData = pardedMessage.requestConnection.nickName;
      setUsersData({
        ...usersDataRef.current,
        toPublicKey: publicKeySolicitorUserData,
        toNickName: nickNameSolicitorUserData,
      });
      setError(ErrorTypes.RequestReceived);
    }

    //Mensaje de chat confirmado
    if (pardedMessage.hasOwnProperty('chatConfirmed') && usersDataRef.current) {
      const toPublicKey = pardedMessage.chatConfirmed.to;
      const toNickName = pardedMessage.chatConfirmed.toNickName;
      setUsersData({ ...usersDataRef.current, toPublicKey: toPublicKey, toNickName: toNickName });
      setLifeCycle('chating');
    }

    //Mensaje de error
    if (pardedMessage.hasOwnProperty('error') && usersDataRef.current) {
      console.log(connectionStatus);
      setUsersData({ ...usersDataRef.current, toPublicKey: null, toNickName: null });

      if (pardedMessage.error === 'errorUserDoesntExistOrReject') {
        setError(ErrorTypes.ErrorUserDoesntExistOrReject);
      } else if (pardedMessage.error === 'errorUserIsTheSame') {
        setError(ErrorTypes.ErrorUserIsTheSame);
      } else if (pardedMessage.error === 'requesterIsOffline') {
        setError(ErrorTypes.RequesterIsOffline);
      } else if (pardedMessage.error === 'canceledRequest' && connectionStatus === 'requestReceived') {
      }
    }

    //cierre
    if (pardedMessage.hasOwnProperty('closing')) {
      if (pardedMessage.closing === 'otherUserHasClosed') {
        setUsersData({ fromPublicKey: null, fromNickName: null, toPublicKey: null, toNickName: null });
        setError(ErrorTypes.OtherUserHasClosed);
      }
    }

    //Recepcion de mensajes
    if (pardedMessage.hasOwnProperty('sentMessaje')) {
      const message = pardedMessage.sentMessaje.message;
      console.log(message);
      const now = new Date();
      const minutes = now.getMinutes() <= 10 ? '0' + String(now.getMinutes()) : String(now.getMinutes());
      setChatHistory((chatHistory) => [
        { type: 'messageReceived', message: message, time: `${String(now.getHours())}:${minutes}` },
        ...chatHistory,
      ]);
    }
  };

  return {
    handleMessage,
  };
};

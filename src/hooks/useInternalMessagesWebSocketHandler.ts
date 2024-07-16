import { useContext, useEffect, useRef } from 'react';
import { ChatHistoryContext } from '../contexts/ChatHistoryProvider';
import { UsersDataContext } from '../contexts/UsersDataProvider';

export const useInternalMessagesWebSocketHandler = () => {
  const { setChatHistory } = useContext(ChatHistoryContext);
  const { usersData, setUsersData } = useContext(UsersDataContext);

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
    setConnectionStatus: React.Dispatch<React.SetStateAction<string | null>>,
    connectionStatus: string | null | undefined,
    setRequestError: React.Dispatch<
      React.SetStateAction<{
        title: string;
        message: string;
        CTA: string;
      } | null>
    >,
  ) => {
    const message = event.data;
    const pardedMessage = JSON.parse(message);

    //GESTION RECEPCION DE MENSAJES
    console.log('mensaje recibido del servidor: ', pardedMessage);

    //Usuario creado por el servidor
    if (pardedMessage.hasOwnProperty('userCreated') && usersDataRef.current) {
      const userName = pardedMessage.userCreated.userName;
      const nickName = pardedMessage.userCreated.nickName;
      setConnectionStatus('userRegistered');
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
      setConnectionStatus('requestReceived');
    }

    //Mensaje de chat confirmado
    if (pardedMessage.hasOwnProperty('chatConfirmed') && usersDataRef.current) {
      const toPublicKey = pardedMessage.chatConfirmed.to;
      const toNickName = pardedMessage.chatConfirmed.toNickName;
      setUsersData({ ...usersDataRef.current, toPublicKey: toPublicKey, toNickName: toNickName });
      setConnectionStatus('chating');
    }

    //Mensaje de error
    if (pardedMessage.hasOwnProperty('error') && usersDataRef.current) {
      console.log(connectionStatus);
      setUsersData({ ...usersDataRef.current, toPublicKey: null, toNickName: null });

      if (pardedMessage.error === 'errorUserDoesntExistOrReject') {
        setRequestError({
          title: 'Error finding user',
          message: "User doesn't exist or rejected your request",
          CTA: 'Click OK to continue',
        });
      } else if (pardedMessage.error === 'errorUserIsTheSame') {
        setRequestError({
          title: 'User searched  is the same as you',
          message: 'Enter a valid public key different to your public key',
          CTA: 'Click OK to continue',
        });
      } else if (pardedMessage.error === 'requesterIsOffline') {
        setRequestError({
          title: 'Requester is disconnected',
          message: 'Enter a valid public key of an online user or wait for a request',
          CTA: 'Click OK to continue',
        });
      } else if (pardedMessage.error === 'canceledRequest' && connectionStatus === 'requestReceived') {
        setRequestError({
          title: 'Requester cancel the request',
          message: 'Enter a valid public key of an online user or wait for a request',
          CTA: 'Click OK to continue',
        });
      }
    }

    //cierre
    if (pardedMessage.hasOwnProperty('closing')) {
      if (pardedMessage.closing === 'otherUserHasClosed') {
        setUsersData({ fromPublicKey: null, fromNickName: null, toPublicKey: null, toNickName: null });
        setConnectionStatus('otherUserHasClosed');
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

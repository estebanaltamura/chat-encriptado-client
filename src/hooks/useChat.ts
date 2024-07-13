import { FormEvent, useContext } from 'react';
import { UsersDataContext } from '../contexts/UsersDataProvider';
import { WebSocketConnectionContext } from '../contexts/WebSocketConnectionProvider';
import { ChatHistoryContext } from '../contexts/ChatHistoryProvider';

interface ChatFormElements extends HTMLFormControlsCollection {
  chatInput: HTMLInputElement;
}

interface ChatFormElement extends HTMLFormElement {
  elements: ChatFormElements;
}

export const useChat = () => {
  const { setConnectionStatus, closeConnection, sendWebSocketMessage } =
    useContext(WebSocketConnectionContext);
  const { usersData } = useContext(UsersDataContext);
  const { setChatHistory, chatHistory } = useContext(ChatHistoryContext);

  const closeConnectionHandler = () => {
    setConnectionStatus('theUserHasClosed');
    closeConnection();
  };

  const sendMessageHandler = (e: FormEvent<ChatFormElement>) => {
    e.preventDefault();

    // Obtener el elemento chatInput del formulario
    const chatInput = e.currentTarget.elements.chatInput;

    chatInput.focus();

    let message = chatInput.value;

    if (message.length > 0) {
      message = message[0].toUpperCase() + message.slice(1);
      const now = new Date();
      const minutes = now.getMinutes() <= 10 ? '0' + String(now.getMinutes()) : String(now.getMinutes());
      const messageToSend = {
        sendMessage: { from: usersData.fromPublicKey, to: usersData.toPublicKey, message: message },
      };

      if (chatHistory.length > 0) {
        setChatHistory([
          { type: 'messageSent', message: message, time: `${String(now.getHours())}:${minutes}` },
          ...chatHistory,
        ]);
      } else {
        setChatHistory([
          { type: 'messageSent', message: message, time: `${String(now.getHours())}:${minutes}` },
        ]);
      }

      sendWebSocketMessage(messageToSend);
      chatInput.value = '';
    }
  };

  return {
    closeConnectionHandler,
    sendMessageHandler,
  };
};

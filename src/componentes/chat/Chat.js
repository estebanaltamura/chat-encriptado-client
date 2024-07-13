import { useContext, useEffect, useState } from 'react';
import { UsersDataContext } from '../../contexts/UsersDataProvider';
import { ChatHistoryContext } from '../../contexts/ChatHistoryProvider';
import { useChat } from '../../hooks/useChat';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Message } from '../message/Message';
import { BsFillCircleFill } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import './Chat.css';

export const Chat = () => {
  const { usersData } = useContext(UsersDataContext);
  const { chatHistory } = useContext(ChatHistoryContext);
  const { closeConnectionHandler, sendMessageHandler } = useChat();

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.visualViewport ? window.visualViewport.height : window.innerHeight);
    };

    updateViewportHeight(); // Set initial height

    window.visualViewport?.addEventListener('resize', updateViewportHeight);
    window.visualViewport?.addEventListener('scroll', updateViewportHeight);

    return () => {
      window.visualViewport?.removeEventListener('resize', updateViewportHeight);
      window.visualViewport?.removeEventListener('scroll', updateViewportHeight);
    };
  }, []);

  return (
    <>
      <div className="ChatRoomContainer" style={{ height: viewportHeight, overflowY: 'auto', width: '100%' }}>
        <div className="greenBar"></div>

        <div className="chatHeader">
          <p className="nickNameInHeaderChat">{usersData.toNickName}</p>
          <AiOutlineCloseCircle className="closeButtonInHeader" onClick={closeConnectionHandler} />
        </div>

        <div className="chatMainArea">
          {chatHistory.map((element, index) => (
            <Message key={index} type={element.type} message={element.message} time={element.time} />
          ))}
        </div>

        <div className="chatSendMessageBar">
          <form className="formChatSendMessageBar" onSubmit={sendMessageHandler}>
            <input
              className="inputChatSendMessageBar"
              placeholder="Escriba un mensaje aquí"
              name="chatInput"
              autoComplete="off"
            />
            <button className="submitChatSendMessageBarContainer" type="submit">
              <BsFillCircleFill className="submitCircleChatSendMessageBar" />
              <IoMdSend className="submitArrowIconChatSendMessageBar" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

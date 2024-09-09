// ** React Imports
import { useContext, useEffect, useRef } from 'react';

// ** Icons Imports
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsFillCircleFill } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';

// ** Contexts Imports
import { UsersDataContext } from '../contexts/UsersDataProvider';
import { ChatHistoryContext } from '../contexts/ChatHistoryProvider';

// ** Hooks Imports
import { useChat } from '../hooks/useChat';

// ** Component Imports
import { Message } from '../componentes/message/Message';

// ** Material UI Imports
import { Box, Typography, Button } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { LifeCycleContext } from '../contexts/LifeCycleProvider';

export const ChatRoom: React.FC = () => {
  // ** Contexts
  const { usersData } = useContext(UsersDataContext);
  const { chatHistory } = useContext(ChatHistoryContext);
  const { lifeCycle } = useContext(LifeCycleContext);

  // ** Hooks
  const { closeConnectionHandler, sendMessageHandler } = useChat();

  // ** Refs
  const chatMainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatMainRef.current) {
      chatMainRef.current.scrollTop = chatMainRef.current.scrollHeight;
    }
  }, [chatHistory]);

  if (lifeCycle === 'userRegistered') return <Navigate to="/findingPair" />;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'white',
      }}
    >
      <Box
        sx={{
          margin: 'auto',
          width: '70%',
          maxWidth: '1700px',
          minHeight: 'calc(100vh - 200px)',
          borderRadius: '5px',
          border: 'none',
          zIndex: '1',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            height: '60px',
            padding: '7px 8px 7px 18px',
            alignItems: 'center',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            gridTemplateColumns: '1fr 60px',
            backgroundColor: '#EFEFEF',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '50px',
              height: '50px',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #4c4c4c',
              borderRadius: '50px',
            }}
          >
            <img src={`/avatar${usersData.toAvatarType}.svg`} className="userAvatar" />
          </Box>
          <Typography
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontFamily: 'Work Sans',
              lineHeight: '24px',

              fontSize: '20px',
              fontWeight: '700',
              color: '#353535',
              flexGrow: '1',
              marginLeft: '15px',
            }}
          >
            {usersData.toNickName}
          </Typography>

          <AiOutlineCloseCircle className="closeButtonInHeader" onClick={closeConnectionHandler} />
        </Box>

        <Box
          ref={chatMainRef}
          sx={{
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'baseline',
            width: '100%',
            height: 'calc(100vh - 303px)',
            paddingBottom: '18px',
            overflowY: 'auto',
            overflowX: 'hidden',
            backgroundImage: 'url(/doodle.svg)',
          }}
        >
          {chatHistory.map(
            (element, index) =>
              element.type &&
              element.message &&
              element.time && (
                <Message key={index} type={element.type} message={element.message} time={element.time} />
              ),
          )}
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
            height: '72px',
            flex: '0 0',
            backgroundColor: '#E7E7E5',
          }}
        >
          <form className="formChatSendMessageBar" onSubmit={sendMessageHandler}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <input
                className="inputChatSendMessageBar"
                placeholder="Escriba un mensaje aquí"
                name="chatInput"
                autoComplete="off"
              ></input>
            </Box>
            <Button sx={{ border: 'none', backgroundColor: '#E7E7E5' }} type="submit">
              <img src="/sendMessageIcon.svg" className="sendMessageIconMessageBar" />
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

// Guard para cuando la persona va atras

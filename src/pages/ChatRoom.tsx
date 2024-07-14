// ** React Imports
import { useContext } from 'react';

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

import { Box, Typography, Button } from '@mui/material';

export const ChatRoom: React.FC = () => {
  const { usersData } = useContext(UsersDataContext);
  const { chatHistory } = useContext(ChatHistoryContext);

  const { closeConnectionHandler, sendMessageHandler } = useChat();

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100vh',
          backgroundColor: 'black',
          opacity: '0.5',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '130px',
            backgroundColor: 'green',
            opacity: '0.5',
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          margin: '35px 0 35px 0',
          width: '70%',
          maxWidth: '1700px',
          minHeight: 'calc(100vh - 70px)',
          backgroundColor: '#e9e9e9',
          borderRadius: '5px',
          border: 'none',
          zIndex: '1',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            position: 'fixed',
            margin: 'auto',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            gridTemplateColumns: '1fr 60px',
            gridTemplateRows: '45px',
            gridTemplateAreas: '"nickName closeButton"',
            padding: '7px 8px 7px 18px',
            width: '70%',
            maxWidth: '1375px',
            backgroundColor: '#e9e9e9',
            color: 'black',
            height: '60px',
            flex: '0 0',
            border: '1px solid #cfcfcf',
          }}
        >
          <Typography
            sx={{
              display: 'block',
              position: 'relative',
              width: '95%',
              height: '100%',
              top: '6px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontFamily: 'Montserrat',
              fontSize: '24px',
              fontWeight: '500',
              color: 'black',
            }}
          >
            {usersData.toNickName}
          </Typography>
          <AiOutlineCloseCircle className="closeButtonInHeader" onClick={closeConnectionHandler} />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'baseline',
            width: '100%',
            height: 'calc(100vh - 192px)',
            marginTop: '60px',
            paddingBottom: '5px',
            overflowY: 'auto',
            overflowX: 'hidden',
            backgroundImage: 'url(/chatBackground.jpg)',
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
            maxWidth: '1375px',
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
            height: '62px',
            flex: '0 0',
            backgroundColor: '#e9e9e9',
          }}
        >
          <form className="formChatSendMessageBar" onSubmit={sendMessageHandler}>
            <input
              className="inputChatSendMessageBar"
              placeholder="Escriba un mensaje aquí"
              name="chatInput"
              autoComplete="off"
            ></input>
            <Button
              sx={{ gridArea: 'submit', position: 'relative', border: 'none', backgroundColor: '#e9e9e9' }}
              type="submit"
            >
              <BsFillCircleFill className="submitCircleChatSendMessageBar" />
              <IoMdSend className="submitArrowIconChatSendMessageBar" />
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

// Guard para cuando la persona va atras

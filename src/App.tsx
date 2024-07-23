// ** React Imports
import { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// ** Web socket connection context import
import { WebSocketConnectionContext } from './contexts/WebSocketConnectionProvider';

// ** Material UI Imports
import { Box, Typography, useMediaQuery } from '@mui/material';

// ** Pages Imports
import { Home } from './pages/Home';
import { FindingPair } from './pages/FindingPair';
import { ChatRoom } from './pages/ChatRoom';

// ** Pop up component import
import { PopUp } from './componentes/popUp/PopUp';

// ** CSS Import
import './global.css';
import { ErrorContext } from './contexts/ErrorContextProvider';

import { ErrorTypes } from './types';
import usePopUpDataByError from './hooks/usePopUpDataByError';

const App: React.FC = () => {
  // ** Contexts
  const { connectionStatus } = useContext(WebSocketConnectionContext);
  const { error, setError } = useContext(ErrorContext);

  const isDesktop = useMediaQuery('(min-width: 1200px)');

  const popUpDataByError = usePopUpDataByError();

  if (!isDesktop)
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 20px',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Typography sx={{ fontSize: '22px', fontWeight: '600', lineHeight: '28px' }}>
          Only available on desktop
        </Typography>
        <Typography sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '22px' }}>
          Please use a desktop to use this app
        </Typography>
        <Typography sx={{ fontSize: '14px', marginTop: '15px' }}>
          Soon It will be available a mobile version developped in React Native
        </Typography>
      </Box>
    );

  return (
    <>
      {error && <PopUp props={popUpDataByError[error]} key={Math.random()} />}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/findingPair"
              element={connectionStatus === 'offline' ? <Navigate to="/home" /> : <FindingPair />}
            />
            <Route
              path="/chatRoom"
              element={connectionStatus === 'offline' ? <Navigate to="/home" /> : <ChatRoom />}
            />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
};

export default App;

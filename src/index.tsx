// ** React Imports
import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';

// ** Contexts Imports
import { UsersDataProvider } from './contexts/UsersDataProvider';
import { ChatHistoryProvider } from './contexts/ChatHistoryProvider';
import { PopUpContextProvider } from './contexts/PopUpContextProvider';
import { LastActivityTimeProvider } from './contexts/LastActivityTimeProvider';

// ** Web socket provider
import { WebSocketConnectionContextProvider } from './contexts/WebSocketConnectionProvider';

// ** Cpmponent Imports
import App from './App';

import './global.css';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as ReactDOM.Container);

root.render(
  <React.StrictMode>
    <UsersDataProvider>
      <ChatHistoryProvider>
        <WebSocketConnectionContextProvider>
          <PopUpContextProvider>
            <LastActivityTimeProvider>
              <App />
            </LastActivityTimeProvider>
          </PopUpContextProvider>
        </WebSocketConnectionContextProvider>
      </ChatHistoryProvider>
    </UsersDataProvider>
  </React.StrictMode>,
);

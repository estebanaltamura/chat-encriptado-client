// ** React Imports
import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';

// ** Contexts Imports
import { UsersDataProvider } from './contexts/UsersDataProvider';
import { ChatHistoryProvider } from './contexts/ChatHistoryProvider';
import { LastActivityTimeProvider } from './contexts/LastActivityTimeProvider';

// ** Web socket provider
import { WebSocketConnectionContextProvider } from './contexts/WebSocketConnectionProvider';

// ** Component Imports
import App from './App';

// ** CSS Import
import './global.css';
import ErrorProvider from './contexts/ErrorContextProvider';
import { LifeCycleProvider } from './contexts/LifeCycleProvider';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as ReactDOM.Container);

root.render(
  <React.StrictMode>
    <LifeCycleProvider>
      <ErrorProvider>
        <UsersDataProvider>
          <ChatHistoryProvider>
            <WebSocketConnectionContextProvider>
              <LastActivityTimeProvider>
                <App />
              </LastActivityTimeProvider>
            </WebSocketConnectionContextProvider>
          </ChatHistoryProvider>
        </UsersDataProvider>
      </ErrorProvider>
    </LifeCycleProvider>
  </React.StrictMode>,
);

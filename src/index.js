import React from 'react';
import ReactDOM from 'react-dom/client';
import { WebSocketConnectionContextProvider } from './contexts/WebSocketConnectionProvider';
import { PublicKeysProvider } from './contexts/publickKeysProvider';
import { LastActivityTimeProvider } from './contexts/LastActivityTimeProvider';
import { ChatHistoryProvider } from './contexts/ChatHistoryProvider';
import App from './App';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatHistoryProvider>
      <PublicKeysProvider>
        <WebSocketConnectionContextProvider>    
          <LastActivityTimeProvider>
            <App />       
          </LastActivityTimeProvider>
        </WebSocketConnectionContextProvider>
      </PublicKeysProvider>
    </ChatHistoryProvider>
  </React.StrictMode>
);


//quiza isloading no tenga que ser un context

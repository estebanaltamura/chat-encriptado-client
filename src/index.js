import React from 'react';
import ReactDOM from 'react-dom/client';
import { WebSocketConnectionContextProvider } from './contexts/WebSocketConnectionProvider';
import { PublicKeysProvider } from './contexts/publickKeysProvider';
import { LastActivityTimeProvider } from './contexts/LastActivityTimeProvider';
import { ChatHistoryProvider } from './contexts/ChatHistoryProvider';
import { PopUpContextProvider } from './contexts/PopUpContextProvider';
import App from './App';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PublicKeysProvider>
      <ChatHistoryProvider>
        <WebSocketConnectionContextProvider>    
          <PopUpContextProvider>
            <LastActivityTimeProvider>
              <App />       
            </LastActivityTimeProvider>
          </PopUpContextProvider>
        </WebSocketConnectionContextProvider>      
      </ChatHistoryProvider>
    </PublicKeysProvider>
  </React.StrictMode>
);


//quiza isloading no tenga que ser un context

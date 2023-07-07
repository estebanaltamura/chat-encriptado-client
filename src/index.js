import React from 'react';
import ReactDOM from 'react-dom/client';
import { UsersDataProvider } from './contexts/UsersDataProvider';
import { ChatHistoryProvider } from './contexts/ChatHistoryProvider';
import { WebSocketConnectionContextProvider } from './contexts/WebSocketConnectionProvider';
import { PopUpContextProvider } from './contexts/PopUpContextProvider';
import { LastActivityTimeProvider } from './contexts/LastActivityTimeProvider';
import App from './App';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
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
  </React.StrictMode>
);


//quiza isloading no tenga que ser un context

import React from 'react';
import ReactDOM from 'react-dom/client';
import { WebSocketConnectionContextProvider } from './contexts/WebSocketConnectionProvider';
import { PublicKeysProvider } from './contexts/publickKeysProvider';
import App from './App';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PublicKeysProvider>
      <WebSocketConnectionContextProvider>        
          <App />       
      </WebSocketConnectionContextProvider>
    </PublicKeysProvider>
  </React.StrictMode>
);


//quiza isloading no tenga que ser un context

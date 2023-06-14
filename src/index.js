import React from 'react';
import ReactDOM from 'react-dom/client';
import { WebSocketConnectionContextProvider } from './contexts/WebSocketConnectionProvider';
import { IsLoadingContextProvider } from './contexts/IsLoadingProvider';
import { PublicKeysProvider } from './contexts/publickKeysProvider';
import App from './App';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PublicKeysProvider>
      <WebSocketConnectionContextProvider>
        <IsLoadingContextProvider>
          <App />
        </IsLoadingContextProvider>
      </WebSocketConnectionContextProvider>
    </PublicKeysProvider>
  </React.StrictMode>
);


//quiza isloading no tenga que ser un context

import React from 'react';
import ReactDOM from 'react-dom/client';
import { WebSocketConnectionContextProvider } from './contexts/WebSocketConnectionProvider';
import { IsLoadingContextProvider } from './contexts/IsLoadingProvider';
import App from './App';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WebSocketConnectionContextProvider>
      <IsLoadingContextProvider>
        <App />
      </IsLoadingContextProvider>
    </WebSocketConnectionContextProvider>
  </React.StrictMode>
);


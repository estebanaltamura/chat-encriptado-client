import React from 'react';
import ReactDOM from 'react-dom/client';
import { WebSocketConnectionContextProvider } from './contexts/WebSocketConnectionProvider';
import { IsLoadingContextProvider } from './contexts/IsLoadingProvider';
import { PairDataProvider } from './contexts/PairDataProvider';
import App from './App';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WebSocketConnectionContextProvider>
      <IsLoadingContextProvider>
        <PairDataProvider>
          <App />
        </PairDataProvider>
      </IsLoadingContextProvider>
    </WebSocketConnectionContextProvider>
  </React.StrictMode>
);


//quiza isloading no tenga que ser un context

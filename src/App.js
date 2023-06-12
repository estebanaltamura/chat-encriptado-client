import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './componentes/login/Login';
import { WebSocketConnectionContextProvider } from './contexts/WebSocketConnectionProvider';
import { IsLoadingContextProvider } from './contexts/IsLoadingProvider';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <WebSocketConnectionContextProvider>
        <IsLoadingContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </IsLoadingContextProvider>
      </WebSocketConnectionContextProvider>      
    </div>
  );
}

export default App;

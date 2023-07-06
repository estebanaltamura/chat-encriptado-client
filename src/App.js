import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { webSocketConnectionContext } from './contexts/WebSocketConnectionProvider';
import { Home } from './pages/Home';
import { FindingPair } from './pages/FindingPair';
import { Chat } from './componentes/chatRoom/Chat';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  const { connectionstatus }  = useContext(webSocketConnectionContext)

  return (
    <div className="App">      
      <BrowserRouter>
        <Routes>
          <Route path="*"             element={<Navigate to="/home" />} />
          <Route path="/home"         element={<Home />} />
          <Route path="/findingPair"  element={connectionstatus === "offline"  ? <Navigate to = "/home" /> : <FindingPair />} />
          <Route path="/chatRoom"     element={connectionstatus === "offline"  ? <Navigate to = "/home" /> : <Chat />} />          
        </Routes>
      </BrowserRouter>            
    </div>
  );
}

export default App;

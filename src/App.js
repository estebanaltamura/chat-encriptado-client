import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { webSocketConnectionContext } from './contexts/WebSocketConnectionProvider';
import { Home } from './pages/Home';
import { FindingPair } from './pages/FindingPair';
import { ChatRoom } from './pages/ChatRoom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  const { connectionStatus }  = useContext(webSocketConnectionContext)

  return (
    <div className="App">      
      <BrowserRouter>
        <Routes>
          <Route path="*"             element={<Navigate to="/home" />} />
          <Route path="/home"         element={<Home />} />
          <Route path="/findingPair"  element={connectionStatus === "offline"  ? <Navigate to = "/home" /> : <FindingPair />} />
          <Route path="/chatRoom"     element={connectionStatus === "offline"  ? <Navigate to = "/home" /> : <ChatRoom />} />          
        </Routes>
      </BrowserRouter>            
    </div>
  );
}

export default App;
import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { webSocketConnectionContext } from './contexts/WebSocketConnectionProvider';
import { Home } from './pages/Home';
import { FindingPair } from './pages/FindingPair';
import { ChatRoom } from './pages/ChatRoom';
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
          <Route path="/chatRoom"     element={connectionstatus === "offline"  ? <Navigate to = "/home" /> : <ChatRoom />} />          
        </Routes>
      </BrowserRouter>            
    </div>
  );
}

export default App;

//SOLUCION: Cuando alguien entra por la barra de direcciones a una direccion se borran todos los estados si existen. 
//Por los condicionales definidos:
//                                  -Cuando el usuario entra por primera vez a cualquier sub dominio se reenvia a home
//                                  -Cuando el usuario estaba usando la aplicacion y por barra de direcciones ingresa cualquier subdominio se resetea automaticamente 
//                                   todos los estados por defecto y connectionstatus vuelve a "offline" por que tambien cualquier subdominio es redireccionado a home
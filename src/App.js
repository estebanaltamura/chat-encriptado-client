import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './componentes/login/Login';
import { FindingPairs } from './componentes/findingPairs/FindingPairs';
import { Chat } from './componentes/chatRoom/Chat';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  return (
    <div className="App">      
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/findingPair" element={<FindingPairs />} />
          <Route path="/chatRoom" element={<Chat />} />
          
        </Routes>
      </BrowserRouter>            
    </div>
  );
}

export default App;

/*
Offline
userRegistered
Chating


Cualquier url no asignada:
Offline: Login
userRegistered: nada. findingPair
Chating: nada. chating

Login
Offline: Login
userRegistered: Login y cerrar conexion previa
Chating: chating: Login y cerrar conexion previa


FindingPair
Offline: Login
userRegistered: FindingPair
Chating: FindingPair y borrar el par de chat


Chating
Offline: Login
userRegistered: nada. FindingPair
Chating: nada. chating

*/

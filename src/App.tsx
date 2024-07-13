// ** React Imports
import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// ** Web socket connection
import { WebSocketConnectionContext } from './contexts/WebSocketConnectionProvider';

// ** Pages Imports
import { Home } from './pages/Home';
import { FindingPair } from './pages/FindingPair';
import { ChatRoom } from './pages/ChatRoom';

// ** Bootstrap Import
import 'bootstrap/dist/css/bootstrap.css';

// ** CSS Import
import './global.css';
import { PopUp } from './componentes/popUp/PopUp';
import { PopUpContext } from './contexts/PopUpContextProvider';

function App() {
  const { connectionStatus } = useContext(WebSocketConnectionContext);
  const { showPopUp, popUpData } = useContext(PopUpContext);

  return (
    <div className="app">
      {showPopUp && popUpData && (
        <PopUp
          title={popUpData.title}
          message={popUpData.message}
          type={popUpData.type}
          seconds={popUpData.seconds}
          CTAtext={popUpData?.CTAtext}
          acceptButtonText={popUpData?.acceptButtonText}
          rejectButtonText={popUpData?.rejectButtonText}
          handlerAccept={popUpData?.handlerAccept}
          handlerReject={popUpData?.handlerReject}
          handlerTimeOut={popUpData?.handlerTimeOut}
          key={Math.random()}
        />
      )}

      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/findingPair"
            element={connectionStatus === 'offline' ? <Navigate to="/home" /> : <FindingPair />}
          />
          <Route
            path="/chatRoom"
            element={connectionStatus === 'offline' ? <Navigate to="/home" /> : <ChatRoom />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

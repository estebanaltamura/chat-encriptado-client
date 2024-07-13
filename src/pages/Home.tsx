import { useContext } from 'react';
import { PopUpContext } from '../contexts/PopUpContextProvider';
import { PopUp } from '../componentes/popUp/PopUp';
import { LoginForm } from '../componentes/loginForm/LoginForm';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <div className="loginContainer">
      <LoginForm />
    </div>
  );
};

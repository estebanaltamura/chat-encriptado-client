// ** React Imports
import { useRef, useContext, useState, useEffect, FormEvent, FocusEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

// ** Web socket connection context import
import { WebSocketConnectionContext } from '../contexts/WebSocketConnectionProvider';

// ** Crypto codes Imports
import nacl from 'tweetnacl';

interface IUser {
  publicKey: string | null;
  nickName: string | null;
  password: string | null;
  to: string | null;
  requestStatus: string | null;
  stateTimeStamp: number;
  lastMessageTime: number | null;
}

interface LoginFormElements extends HTMLFormControlsCollection {
  nickNameInput: HTMLInputElement;
}

interface LoginFormElement extends HTMLFormElement {
  elements: LoginFormElements;
}

export const useLogin = () => {
  // ** Router
  const history = useNavigate();

  // ** States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // ** Contexts
  const { connectionStatus, setConnectionStatus, connectWebSocket, createUser } =
    useContext(WebSocketConnectionContext);

  // ** Refs
  const user = useRef<IUser>();

  useEffect(() => {
    if (connectionStatus === 'online') {
      createUser(user.current);
    }

    if (connectionStatus === 'userRegistered') {
      setIsLoading(false);
      history('/findingPair');
    }

    if (connectionStatus === 'serverError') {
      setIsLoading(false);
    }
  }, [connectionStatus]);

  // SET USER
  const setUserData = (inputValue: string) => {
    const nickNameInserted = inputValue;
    const regex = /['"]/g;
    const nickNameInsertedHandled = nickNameInserted.replace(regex, '');

    const keyPair = nacl.box.keyPair();
    const publicKey = keyPair.publicKey;
    const privateKey = keyPair.secretKey;

    const publicKeyString = String(publicKey);
    user.current = {
      publicKey: publicKeyString,
      nickName: nickNameInsertedHandled,
      password: null,
      to: null,
      requestStatus: null,
      stateTimeStamp: Date.now(),
      lastMessageTime: null,
    };
  };

  const startSession = (e: FormEvent<LoginFormElement>) => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.nickNameInput.value;

    if (inputValue !== '') {
      setUserData(inputValue);
      setIsLoading(true);
      connectWebSocket();
    } else setConnectionStatus('nickNameError');
  };

  // INPUT BEHAVIORS
  const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = (e.currentTarget.form as LoginFormElement).elements.nickNameInput;
    input.removeAttribute('placeholder');
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = (e.currentTarget.form as LoginFormElement).elements.nickNameInput;
    input.setAttribute('placeholder', 'Insert a nick name');
  };

  return {
    startSession,
    isLoading,
    onFocusHandler,
    onBlurHandler,
  };
};

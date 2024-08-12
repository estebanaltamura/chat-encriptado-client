// ** React Imports
import { useRef, useContext, useState, useEffect, FormEvent, FocusEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

// ** Web socket connection context import
import { WebSocketConnectionContext } from '../contexts/WebSocketConnectionProvider';

// ** Crypto codes Imports
import nacl from 'tweetnacl';
import { LifeCycleContext } from '../contexts/LifeCycleProvider';
import { ErrorContext } from '../contexts/ErrorContextProvider';
import { ErrorTypes } from '../types';

interface IUser {
  publicKey: string | null;
  nickName: string | null;
  avatarType: number | null;
  password: string | null;
  to: string | null;
  requestStatus: string | null;
  stateTimeStamp: number;
  lastMessageTime: number | null;
}

export interface LoginFormElements extends HTMLFormControlsCollection {
  nickNameInput: HTMLInputElement;
}

export interface LoginFormElement extends HTMLFormElement {
  elements: LoginFormElements;
}

export const useLogin = () => {
  // ** Router
  const history = useNavigate();

  // ** States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // ** Contexts
  const { connectWebSocket, createUser } = useContext(WebSocketConnectionContext);
  const { lifeCycle, setLifeCycle } = useContext(LifeCycleContext);
  const { error, setError } = useContext(ErrorContext);

  // ** Refs
  const user = useRef<IUser>();

  useEffect(() => {
    if (lifeCycle === 'online') {
      createUser(user.current);
    }

    if (lifeCycle === 'userRegistered') {
      setIsLoading(false);
      history('/findingPair');
    }
  }, [lifeCycle, error]);

  // SET USER
  const setUserData = (inputValue: string, avatarType: number) => {
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
      avatarType: avatarType,
      password: null,
      to: null,
      requestStatus: null,
      stateTimeStamp: Date.now(),
      lastMessageTime: null,
    };
  };

  const startSession = (e: FormEvent<LoginFormElement>, avatarType: number) => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.nickNameInput.value;

    if (inputValue !== '') {
      setUserData(inputValue, avatarType);
      setIsLoading(true);
      connectWebSocket();
    } else setError(ErrorTypes.NickNameError);
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

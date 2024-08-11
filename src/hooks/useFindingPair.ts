// ** React Imports
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ** Contexts Imports
import { WebSocketConnectionContext } from '../contexts/WebSocketConnectionProvider';
import { UsersDataContext } from '../contexts/UsersDataProvider';
import { ErrorContext } from '../contexts/ErrorContextProvider';
import { ErrorTypes, lifeCycle } from '../types';
import { LifeCycleContext } from '../contexts/LifeCycleProvider';
import { RequestStatusContext } from '../contexts/RequestStatusProvider';

export const useFindingPair = () => {
  // ** Contexts
  const { tryPairing, closeConnection } = useContext(WebSocketConnectionContext);
  const { usersData } = useContext(UsersDataContext);
  const { setError } = useContext(ErrorContext);
  const { lifeCycle } = useContext(LifeCycleContext);
  const { setRequestStatus } = useContext(RequestStatusContext);

  // ** States
  const [copyPublicKeyText, setCopyPublicKeyText] = useState('Copy my public key');

  // ** Hooks
  const history = useNavigate();

  useEffect(() => {
    if (lifeCycle === 'chating') {
      setError(null);
      history('/chatRoom');
    }
  }, [lifeCycle]);

  const tryPairingHandler = (e) => {
    e.preventDefault();
    const publicKeyUser2 = e.target.elements.findingPairInput.value;

    if (publicKeyUser2 !== '' && usersData.fromPublicKey) {
      setError(ErrorTypes.RequestSent);
      setRequestStatus('requestSent');
      tryPairing(usersData.fromPublicKey, publicKeyUser2);
    } else setError(ErrorTypes.UserInsertedAnEmptyEntry);
  };

  const closeConnectionHandler = () => {
    setError(ErrorTypes.TheUserHasClosed); // Se disparaba cuando el propio usuario cierra la conexion
    closeConnection();
  };

  const copyToClipboard = async () => {
    if (!usersData.fromPublicKey) throw new Error('Public key is undefined');
    await navigator.clipboard.writeText(usersData.fromPublicKey);
    setCopyPublicKeyText('Copied!');
    const timeOut = setTimeout(() => {
      setCopyPublicKeyText('Copy my public key');
      clearTimeout(timeOut);
    }, 1500);
  };

  // BEHAVIOR INPUT
  const onFocusHandler = (e) => {
    const element = e.target;
    element.removeAttribute('placeholder');
  };

  const onBlurHandler = (e) => {
    const element = e.target;
    element.setAttribute('placeholder', 'Insert a public key of your peer');
  };

  return {
    onFocusHandler,
    onBlurHandler,
    tryPairingHandler,
    closeConnectionHandler,
    copyToClipboard,
    copyPublicKeyText,
  };
};

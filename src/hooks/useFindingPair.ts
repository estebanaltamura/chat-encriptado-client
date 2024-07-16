import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { WebSocketConnectionContext } from '../contexts/WebSocketConnectionProvider';
import { UsersDataContext } from '../contexts/UsersDataProvider';
import { PopUpContext } from '../contexts/PopUpContextProvider';

export const useFindingPair = () => {
  const { setConnectionStatus, connectionStatus, tryPairing, closeConnection } =
    useContext(WebSocketConnectionContext);
  const { usersData } = useContext(UsersDataContext);
  const [copyPublicKeyText, setCopyPublicKeyText] = useState('Copy my public key');
  const { setShowPopUp } = useContext(PopUpContext);
  const history = useNavigate();

  useEffect(() => {
    if (connectionStatus === 'chating') {
      setShowPopUp(false);
      history('/chatRoom');
    }
  }, [connectionStatus]);

  const tryPairingHandler = (e) => {
    e.preventDefault();
    const publicKeyUser2 = e.target.elements.findingPairInput.value;

    if (publicKeyUser2 !== '' && usersData.fromPublicKey) {
      setConnectionStatus('requestSent');
      tryPairing(usersData.fromPublicKey, publicKeyUser2);
    } else setConnectionStatus('userInsertedAnEmptyEntry');
  };

  const closeConnectionHandler = () => {
    setConnectionStatus('theUserHasClosed');
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

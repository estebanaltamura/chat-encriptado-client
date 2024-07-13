import { useContext } from 'react';
import { PopUpContext } from '../contexts/PopUpContextProvider';
import { useFindingPair } from '../hooks/useFindingPair';
import { PopUp } from '../componentes/popUp/PopUp';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FindingPairForm } from '../componentes/findingPairForm/FindingPairForm';
import './FindingPair.css';

export const FindingPair = () => {
  const { showPopUp, popUpData } = useContext(PopUpContext);
  const { closeConnectionHandler } = useFindingPair();

  return (
    <div className="findingPairContainer">
      <div className="closeButtonContainerFindingPair">
        <AiOutlineCloseCircle className="closeConnectionButtonFindingPair" onClick={closeConnectionHandler} />
      </div>
      <div className="logoContainer">
        <img className="logoImage" src="https://i.postimg.cc/bNy9QWtG/logo.jpg" />
      </div>

      <div className="tutorialMessageContainerFindingPair">
        <p className="tutorialMessageFindingPair">
          Share your public key by whatsapp or similar with the person you want and wait for his/her
          invitation
        </p>
        <p className="tutorialMessageFindingPair or">or</p>
        <p className="tutorialMessageFindingPair">
          Insert the public key which you received of the person who you want have a private talk and send
          his/her an invitation
        </p>
      </div>

      <FindingPairForm />
    </div>
  );
};

import { useEffect } from 'react';
import './PopUp.css';

interface PopUpProps {
  title: string;
  message: string;
  type: string;
  seconds: number;
  acceptButtonText?: string;
  rejectButtonText?: string;
  handlerAccept?: () => void;
  handlerReject?: () => void;
  handlerTimeOut: () => void;
  CTAtext?: string;
}

export const PopUp = ({
  title,
  message,
  type,
  CTAtext,
  acceptButtonText,
  rejectButtonText,
  seconds,
  handlerAccept,
  handlerReject,
  handlerTimeOut,
}: PopUpProps) => {
  useEffect(() => {
    const secondsToMiliSeconds = seconds * 1000;

    const timeOut = setTimeout(() => {
      console.log(title);
      handlerTimeOut();
    }, secondsToMiliSeconds);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div className="popUpContainer">
      <div className="popUpElement">
        <div
          className={
            type === 'oneButtonAccept'
              ? 'popUpGridOneButtonAccept'
              : type === 'oneButtonCancel'
                ? 'popUpGridOneButtonCancel'
                : type === 'noButtons'
                  ? 'popUpGridNoButtons'
                  : type === 'twoButtons'
                    ? 'popUpGridTwoButton'
                    : ''
          }
        >
          <img src="https://i.postimg.cc/76bz30BG/logo-Miniatura.jpg" className="logoPopUp" />
          <h2 className="tituloPopUp">{title}</h2>

          {message !== undefined && <p className="messagePopUp">{message}</p>}

          {CTAtext !== undefined && <p className="CTA">{CTAtext}</p>}

          {type === 'oneButtonAccept' ? (
            <button className="button2PopUp buttonPopUp" onClick={handlerAccept} autoFocus>
              {acceptButtonText}
            </button>
          ) : type === 'oneButtonCancel' ? (
            <button className="button1PopUp buttonPopUp" onClick={handlerReject} autoFocus>
              {rejectButtonText}
            </button>
          ) : type === 'twoButtons' ? (
            <>
              <button className="button1PopUp buttonPopUp" onClick={handlerReject}>
                {rejectButtonText}
              </button>
              <button className="button2PopUp buttonPopUp" onClick={handlerAccept} autoFocus>
                {acceptButtonText}
              </button>
            </>
          ) : (
            type === 'noButtons' && <></>
          )}
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect, useRef, useContext } from "react"
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";

import "./PopUp.css"

export const PopUp = ({title, message, type, CTAtext, button1Text, button2Text, seconds, handlerAccept, handlerReject, handlerTimeOut})=>{
          
    const { connectionstatus } = useContext(webSocketConnectionContext)
    //const [ isMounted, setIsMounted ] = useState()
    //const isMountedRef = useRef(null)

    
    useEffect(() => {
      //isMountedRef.current = true;
      const secondsToMiliSeconds = seconds * 1000;      
      
      const timeOut = setTimeout(() => {        
        handlerTimeOut();        
      }, secondsToMiliSeconds);
  
      return () => {        
        clearTimeout(timeOut);
      };
    }, []);

    
    return(
        <div className="popUpContainer"> 
            <div className="popUpElement">
                <div className={type === "oneButtonAccept" ? "popUpGridOneButtonAccept" : type === "oneButtonCancel" ? "popUpGridOneButtonCancel" : "popUpGridTwoButton"}>
                    <img src="https://i.postimg.cc/76bz30BG/logo-Miniatura.jpg" className="logoPopUp" />
                    <h2 className="tituloPopUp">{title}</h2>
                    <p className="messagePopUp">{message}</p>  
                    <p className="CTA">{CTAtext}</p>                  
                        {
                            type === "oneButtonAccept" ?
                                    <button className="button2PopUp buttonPopUp" onClick={handlerAccept} autoFocus>{button2Text}</button>
                                                 :
                            type === "oneButtonCancel" ?
                                     <button className="button1PopUp buttonPopUp" onClick={handlerAccept} autoFocus>{button2Text}</button>
                                                 :
                                <>
                                    <button className="button1PopUp buttonPopUp" onClick={handlerReject}>{button1Text}</button>     
                                    <button className="button2PopUp buttonPopUp" onClick={handlerAccept} autoFocus>{button2Text}</button>                
                                </>

                        }                
                </div>
            </div>
        </div>
    )
}

//probar con estos coloresaccept #149AD9 reject #EB5421
import { useState, useEffect, useRef, useContext } from "react"
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";

import "./PopUp.css"

export const PopUp = ({title, message, type, CTAtext, button1Text, button2Text, seconds, handledAccept, handledReject})=>{
          
    const { connectionstatus } = useContext(webSocketConnectionContext)
    //const [ isMounted, setIsMounted ] = useState()
    //const isMountedRef = useRef(null)

    
    useEffect(() => {
      //isMountedRef.current = true;
      const secondsToMiliSeconds = seconds * 1000;      
      
      const timeOut = setTimeout(() => {        
          handledReject();        
      }, secondsToMiliSeconds);
  
      return () => {        
        clearTimeout(timeOut);
      };
    }, []);

    
    return(
        <div className="popUpContainer">
            <div className={type === "oneButton" ? "popUpElementOneButton popUpElement" : "popUpElementTwoButton popUpElement"}>
                <div className={type === "oneButton" ? "popUpGridOneButton" : "popUpGridTwoButton"}>
                    <div className="logoPopUp">IMAGEN LOGO</div>
                    <h2 className="tituloPopUp">{title}</h2>
                    <p className="messagePopUp">{message}</p>  
                    <p className="CTA">{CTAtext}</p>                  
                        {
                            type === "oneButton" ?
                                    <button className="button2PopUp buttonPopUp" onClick={handledAccept}>{button2Text}</button>
                                                 :
                                <>
                                    <button className="button1PopUp buttonPopUp" onClick={handledReject}>{button1Text}</button>     
                                    <button className="button2PopUp buttonPopUp" onClick={handledAccept}>{button2Text}</button>                
                                </>

                        }                
                </div>
            </div>
        </div>
    )
}
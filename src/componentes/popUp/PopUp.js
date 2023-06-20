import { useState, useEffect,useContext } from "react"
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import "./PopUp.css"

export const PopUp = ({title, message, type, CTAtext, button1Text, button2Text, handledAccept, handledReject})=>{

    const [ countDown, setCountDown ] = useState(10)
    const [ messageCountDown, setMessageCountDown ] = useState(10)
    const { closeConnection } = useContext(webSocketConnectionContext)


    useEffect(()=>{
        let timeOut
        const interval = setInterval(()=>{
        

            setCountDown((countDown)=>{
                if(countDown > 1){                    
                    return countDown-1
                }                 

                //comportamiento cierre automatico
                timeOut = setTimeout(()=>closeConnection(), 1000)
            })

        },1000)
        
        return ()=>{
            console.log(timeOut)
            clearInterval(interval)
            clearTimeout(timeOut)
        }
    },[])

    useEffect(()=>{
        if(countDown > 1){
            setMessageCountDown(` in ${countDown} seconds`)
        }
        else if(countDown === 1){
            setMessageCountDown(` in ${countDown} second`)
        }
        else setMessageCountDown("")
          
    },[countDown])


    return(
        <div className="popUpContainer">
            <div className={type === "oneButton" ? "popUpElementOneButton popUpElement" : "popUpElementTwoButton popUpElement"}>
                <div className={type === "oneButton" ? "popUpGridOneButton" : "popUpGridTwoButton"}>
                    <div className="logoPopUp">IMAGEN LOGO</div>
                    <h2 className="tituloPopUp">{title}</h2>
                    <p className="messagePopUp">{message}{messageCountDown}</p>  
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
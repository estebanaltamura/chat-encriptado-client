import { useEffect, useState } from "react"
import "./Message.css"

export const Message = ({message, type})=>{

    const [screenWidth, setScreenWidth ] = useState()

    useEffect(()=>{
        setScreenWidth(window.innerWidth)
        const innerWidthChangeHandler = ()=>{
            setScreenWidth(window.innerWidth)
        }
        
        window.addEventListener("resize",innerWidthChangeHandler)

        return()=> window.removeEventListener("resize",innerWidthChangeHandler)
        
    },[])

    
    return(
        <div className="messageRow">

        
            <div className={type === "messageReceived" ? "messageReceivedContainer" : "messageSentContainer"}>

                <p className={screenWidth < 440 ? "messageLessThan440 message" : "messageMoreThan440 message"}>{message}</p>
                
            </div>

        </div>
    )
}
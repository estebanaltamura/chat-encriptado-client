import { useEffect, useState } from "react"
import "./Message.css"

export const Message = ({message, type, time})=>{

    //const [screenWidth, setScreenWidth ] = useState()

    // useEffect(()=>{
    //     setScreenWidth(window.innerWidth)
    //     const innerWidthChangeHandler = ()=>{
    //         setScreenWidth(window.innerWidth)
    //     }
        
    //     window.addEventListener("resize",innerWidthChangeHandler)

    //     return()=> window.removeEventListener("resize",innerWidthChangeHandler)
        
    // },[])

    
    return(
        <div className="messageRow">
            <div className={type === "messageReceived" ? "messageReceivedContainer" : "messageSentContainer"}>
                <div className="messageContainer">
                    <p className="message">{message}</p>
                    <span className="timeMessage">{time}</span>
                </div>
            </div>
        </div>
    )
}
import { useContext, useEffect } from "react";
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { AiFillCloseSquare } from "react-icons/ai";
import "./Chat.css"

export const Chat = ()=>{

    const { connectionstatus, closeConnection } = useContext(webSocketConnectionContext)

    const closeConnectionHandler = ()=>{        
        closeConnection()
    }

    useEffect(()=>{
        connectionstatus==="offline" && history("/login") 
        connectionstatus==="online" && history("/login")
        connectionstatus==="findingPairs" && history("/login") 
    }     
    ,[connectionstatus])


    return(
        <>
            <AiFillCloseSquare className="closeConnectionButton" onClick={closeConnectionHandler}/>
            <h1>CHATING</h1>
        </>
        
    )
}
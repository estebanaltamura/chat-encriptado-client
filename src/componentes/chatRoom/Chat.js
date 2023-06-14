import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { AiFillCloseSquare } from "react-icons/ai";
import "./Chat.css"

export const Chat = ()=>{

    const { connectionstatus, closeConnection, requestCloseConnection } = useContext(webSocketConnectionContext)

    const history = useNavigate()

    const closeConnectionHandler = ()=>{         
        requestCloseConnection()        
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
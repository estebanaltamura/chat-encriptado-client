import { useContext } from "react";
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { AiFillCloseSquare } from "react-icons/ai";
import "./Chat.css"

export const Chat = ()=>{

    const { closeConnection } = useContext(webSocketConnectionContext)

    const closeConnectionHandler = ()=>{        
        closeConnection()
    }


    return(
        <>
            <AiFillCloseSquare className="closeConnectionButton" onClick={closeConnectionHandler}/>
            <h1>CHATING</h1>
        </>
        
    )
}
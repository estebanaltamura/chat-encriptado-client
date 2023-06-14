import { useContext } from "react";
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { AiFillCloseSquare } from "react-icons/ai";
import "./ChatRoom.css"

export const ChatRoom = ()=>{

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
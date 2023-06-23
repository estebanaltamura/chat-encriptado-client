import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { PopUp } from "../popUp/PopUp";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";
import "./Chat.css"

export const Chat = ()=>{

    const { connectionstatus, setConnectionStatus, closeConnection, requestCloseConnection, requesterData } = useContext(webSocketConnectionContext)    
    const history = useNavigate()

    const closeConnectionHandler = ()=>{   
        setConnectionStatus("userClosed")      
        requestCloseConnection()        
        closeConnection()
    }

    //estado cierre por decision propia o cierre por voluntad del otro

    useEffect(()=>{
        connectionstatus==="offline" && history("/login") 
        connectionstatus==="online" && history("/login")
        connectionstatus==="findingPairs" && history("/login") 
    }     
    ,[connectionstatus])

    const handledAcceptServerError =()=>{        
        setConnectionStatus("offline")
    }

    const handledRejectServerError =()=>{            
        setConnectionStatus("offline")
    }

    const handledAcceptUserClosed =()=>{        
        setConnectionStatus("offline")
    }

    const handledRejectUserClosed =()=>{            
        setConnectionStatus("offline")
    }

    const handledAcceptOtherUserClosed =()=>{        
        setConnectionStatus("offline")
    }

    const handledRejectOtherUserClosed =()=>{            
        setConnectionStatus("offline")
    }



    return(
        <>  {
            connectionstatus === "serverError"
                    ?   
                    <PopUp  title="Closing"  
                            message="Error interacting with server"                      
                            type="oneButton" 
                            seconds={10}                            
                            button2Text="OK"
                            handledAccept={handledAcceptServerError}
                            handledReject={handledRejectServerError}
                            key={connectionstatus}
                    />   
                    :    
            connectionstatus === "userClosed"
                    ?   
                    <PopUp  title="Closing"  
                            message="You have close the chat"                      
                            type="oneButton" 
                            seconds={10}                            
                            button2Text="OK"
                            handledAccept={handledAcceptUserClosed}
                            handledReject={handledRejectUserClosed}
                            key={connectionstatus}
                    />   
                    :
            connectionstatus === "otherUserClosed"
                    ?   
                    <PopUp  title="Closing"  
                            message="The other user has close the chat"                      
                            type="oneButton" 
                            seconds={10}                            
                            button2Text="OK"
                            handledAccept={handledAcceptOtherUserClosed}
                            handledReject={handledRejectOtherUserClosed}
                            key={connectionstatus}
                    />   
                    :                 
                    <div className="backgroundChatRoom">
                        <div className="chatRoomContainer">
                            <div className="ChatRoomGrid">
                                <div className="chatRoomHeader">
                                    <p className="nickNameInHeaderChatRoom">{requesterData.nickName}</p>
                                    <AiFillCloseCircle className="closeButtonInHeaderChatRoom" onClick={closeConnectionHandler}/>
                                </div>
                                <div className="chatRoomArea"></div>
                                <div className="chatRoomSendMessageBar">
                                    <form className="formChatRoomSendMessageBar">
                                        <input className="inputChatRoomSendMessageBar"></input>
                                        <div className="submitChatRoomSendMessageBarContainer">
                                            <BsFillCircleFill className="submitCircleChatRoomSendMessageBar" />
                                            <IoMdSend  className="submitArrowIconChatRoomSendMessageBar" />
                                        </div>                              
                                    </form>
                                </div>
                            </div>
                        </div>                 
                    </div>
                    
            }
            
        </>
        
    )
}

// problema consumir el requester es que solo una punta lo sabe. arreglar ese paso de informacion
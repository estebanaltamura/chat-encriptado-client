import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { publicKeysContext } from "../../contexts/publickKeysProvider";
import { chatHistoryContext } from "../../contexts/ChatHistoryProvider";
import { PopUp } from "../popUp/PopUp";
import { Message } from "../message/Message";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";
import "./Chat.css"

export const Chat = ()=>{

    const { connectionstatus, setConnectionStatus, closeConnection, requestCloseConnection, requesterData, sendWebSocketMessage } = useContext(webSocketConnectionContext)    
    const { publicKeys } = useContext(publicKeysContext)
    const { chatHistory, setChatHistory } = useContext(chatHistoryContext)
    const inputRef = useRef()
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

    const sendMessageHandler = (e)=>{
        e.preventDefault()
        console.log(publicKeys.from, publicKeys.to, inputRef.current.value)
        const messageToSend = {"sendMessage": {"from": publicKeys.from, "to": publicKeys.to, "message": inputRef.current.value}}        
        setChatHistory([...chatHistory, {type: "messageSent", "message": inputRef.current.value}])
        inputRef.current.value = ""
        sendWebSocketMessage(messageToSend)
    }

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
            connectionstatus === "otherUserHasClosed"
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
                    <>
                        <div className="ChatRoomContainer">
                            <div className="greenBar"></div>

                            <div className="chatContainer">
                                
                                    <div className="chatHeader">
                                        <p className="nickNameInHeaderChat">{requesterData.nickName}</p>
                                        <AiFillCloseCircle className="closeButtonInHeaderChat" onClick={closeConnectionHandler}/>
                                    </div>

                                    <div className="chatMainArea">
                                        {
                                            chatHistory.map((element, index)=><Message key={index} type={element.type} message={element.message}/>)
                                        }                                        
                                    </div>
                                    
                                    <div className="chatSendMessageBar">
                                        <form className="formChatSendMessageBar">
                                            <input className="inputChatSendMessageBar" placeholder="Escriba un mensaje aquí" ref={inputRef}></input>
                                            <div className="submitChatSendMessageBarContainer" onClick={sendMessageHandler}>
                                                <BsFillCircleFill className="submitCircleChatSendMessageBar" />
                                                <IoMdSend  className="submitArrowIconChatSendMessageBar" />
                                            </div>                              
                                        </form>
                                    </div>
                                
                            </div>                 


                        </div>

                    </>          
                    
                    
            }
            
        </>
        
    )
}

// problema consumir el requester es que solo una punta lo sabe. arreglar ese paso de informacion
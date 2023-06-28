import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { publicKeysContext } from "../../contexts/publickKeysProvider";
import { chatHistoryContext } from "../../contexts/ChatHistoryProvider";
import { PopUp } from "../popUp/PopUp";
import { Message } from "../message/Message";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";
import { usePopUpHandler } from '../../hooks/usePopUpHandler';
import "./Chat.css"

export const Chat = ()=>{

    const { connectionstatus, setConnectionStatus, closeConnection, requestCloseConnection, requesterData, sendWebSocketMessage } = useContext(webSocketConnectionContext)    
    const { publicKeys } = useContext(publicKeysContext)
    const { chatHistory, setChatHistory } = useContext(chatHistoryContext)
    const inputRef = useRef()
    const history = useNavigate()

    const [screenWidth, setScreenWidth ] = useState()

    useEffect(()=>{
        setScreenWidth(window.innerWidth)
        const innerWidthChangeHandler = ()=>{
            setScreenWidth(window.innerWidth)
        }
        
        window.addEventListener("resize",innerWidthChangeHandler)

        return()=> window.removeEventListener("resize",innerWidthChangeHandler)
        
    },[])

    const { acceptDisconnectionByInactivityHandler,
            timeOutDisconnectionByInactivityHandler,      
            acceptOtherUserHasClosedHandler,
            timeOutOtherUserHasClosedHandler,
            acceptServerErrorClosingHandler,
            timeOutServerErrorClosingHandler,
        } = usePopUpHandler()

    const closeConnectionHandler = ()=>{   
             
               
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
        let message = inputRef.current.value.trim()       

        if(message.length > 0){
            message = message[0].toUpperCase() + message.slice(1)          
            const messageToSend = {"sendMessage": {"from": publicKeys.from, "to": publicKeys.to, "message": message}}

            setChatHistory([...chatHistory, {type: "messageSent", "message": message}])        
            sendWebSocketMessage(messageToSend)
            inputRef.current.value = ""
        }        
    }



    return(
        <>  {
            connectionstatus === "disconnectionByInactivity" 
                    ?                
                    <PopUp  title="The connection is shutting down" 
                            message="Due to inactivity of more than 1 minute, the connection is going to be closed"
                            CTAtext="If you want to stay connected, please press the button"
                            type="oneButton" 
                            seconds={10}
                            button2Text="I'm here"
                            handlerAccept={acceptDisconnectionByInactivityHandler}
                            handlerTimeOut={timeOutDisconnectionByInactivityHandler}
                            key={connectionstatus}
                    />                                             
                    :
            connectionstatus === "serverError"
                    ?   
                    <PopUp  title="Closing"  
                            message="Error interacting with server"                      
                            type="oneButton" 
                            seconds={10}                            
                            button2Text="OK"
                            handlerAccept={acceptServerErrorClosingHandler}
                            handlerTimeOut={timeOutServerErrorClosingHandler}
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
                            handlerAccept={acceptOtherUserHasClosedHandler}
                            handlerTimeOut={timeOutOtherUserHasClosedHandler}
                            key={connectionstatus}
                    />   
                    :       
                    <>
                        <div className="ChatRoomContainer">
                            <div className="greenBar"></div>

                            <div className="chatContainer">
                                
                                    <div className="chatHeader">
                                        <p className="nickNameInHeaderChat">{publicKeys.toNickName}</p>                                            
                                        <AiOutlineCloseCircle className={screenWidth < 1375 ? "closeButtonInHeaderChatLessThan1375" : "closeButtonInHeaderChatMoreThan1375"} onClick={closeConnectionHandler}/>
                                    </div>

                                    <div className="chatMainArea">
                                        {
                                            chatHistory.map((element, index)=><Message key={index} type={element.type} message={element.message}/>)
                                        }                                        
                                    </div>
                                    
                                    <div className="chatSendMessageBar">
                                        <form className="formChatSendMessageBar" onSubmit={sendMessageHandler}>
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
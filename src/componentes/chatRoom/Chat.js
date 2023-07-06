import { useContext, useRef } from "react";
import { Navigate } from "react-router-dom";
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { publicKeysContext } from "../../contexts/publickKeysProvider";
import { chatHistoryContext } from "../../contexts/ChatHistoryProvider";
import { PopUpContext } from '../../contexts/PopUpContextProvider';
import { PopUp } from "../popUp/PopUp";
import { Message } from "../message/Message";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { BsFillCircleFill } from "react-icons/bs";
import "./Chat.css"

export const Chat = ()=>{

    const { connectionstatus, setConnectionStatus, closeConnection, sendWebSocketMessage } = useContext(webSocketConnectionContext)    
    const { publicKeys } = useContext(publicKeysContext)
    const { chatHistory, setChatHistory } = useContext(chatHistoryContext)
    const inputRef = useRef()    
    const {showPupUp, popUpData} = useContext(PopUpContext)

    // ver que cuando entra en una ruta no contemplada vaya a login


    //caso 1: Entra al login y no hay servidor NO GESTIONAR
    //caso 2: Estando en login el servidor se apaga NO GESTIONAR

    //GESTIONAR CAIDAS DEL SERVER:
    //caso 3: Clickeando en iniciar sesion no hay servidor. IDEA: Dispare serverError que es un popUp que al cerrarlo o timeOut redirecciona a login. EVENTO CLOSE XXX
    //caso 4: En findingPair se desconecta el server. IDEA: Dispare serverError que es un popUp que al cerrarlo o timeOut redirecciona a login. EVENTO CLOSE XXX
    //caso 5: En chatRoom se desconecta el server. IDEA: Dispare serverError que es un popUp que al cerrarlo o timeOut redirecciona a login. EVENTO CLOSE XXX
    //EVENTO CLOSE  NO REDIRECCIONA A LOGIN SIN POPUP


    
    //GESTIONAR ACCIONES DEL USUARIO:
    //caso 6: cierre chat CLOSE CONNECTION XXX
    //caso 7: el otro cierra el chat OTHER USER HAS CLOSED XXX
    //caso 7: el otro estando en chatRoom se desconecta VER XXX


    //Que genere un shutting down que al aceptar o timeout haga close connection

    const closeConnectionHandler = ()=>{   
        setConnectionStatus("theUserHasClosed")             
        closeConnection()
    }

    //estado cierre por decision propia o cierre por voluntad del otro

    const sendMessageHandler = (e)=>{
        e.preventDefault()        
        let message = inputRef.current.value.trim()       

        if(message.length > 0){
            message = message[0].toUpperCase() + message.slice(1)    
            const now = new Date()      
            const messageToSend = {"sendMessage": {"from": publicKeys.from, "to": publicKeys.to, "message": message}}
            setChatHistory([{type: "messageSent", "message": message, "time": `${String(now.getHours())}:${String(now.getMinutes())}`}, ...chatHistory])        
            sendWebSocketMessage(messageToSend)
            inputRef.current.value = ""
        }        
    }

    return(
        <>  
            {connectionstatus === "chating" ?
                showPupUp   ?   
                    <PopUp  title                       = {popUpData.title}
                            message                     = {popUpData.message}                      
                            type                        = {popUpData.type}
                            seconds                     = {popUpData.seconds}  
                            CTAtext                     = {popUpData.CTA}    
                            acceptButtonText            = {popUpData.acceptButtonText}                
                            rejectButtonText            = {popUpData.rejectButtonText}                       
                            handlerAccept               = {popUpData.handlerAccept}
                            handlerReject               = {popUpData.handlerReject}
                            handlerTimeOut              = {popUpData.handlerTimeOut}
                            />  

                            : 
                            <>
                                <div className="ChatRoomContainer">
                                    <div className="greenBar"></div>

                                    <div className="chatContainer">
                                        
                                            <div className="chatHeader">
                                                <p className="nickNameInHeaderChat">{publicKeys.toNickName}</p>                                            
                                                <AiOutlineCloseCircle className="closeButtonInHeader" onClick={closeConnectionHandler}/>
                                            </div>

                                            <div className="chatMainArea">
                                                {
                                                    chatHistory.map((element, index)=><Message key={index} type={element.type} message={element.message} time={element.time}/>)
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
                                            :
                <Navigate to = "/home" />             
            }
            
            
        </>
        
    )
}


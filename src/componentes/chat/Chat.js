import { useContext } from "react";
import { publicKeysContext } from "../../contexts/publickKeysProvider";
import { chatHistoryContext } from "../../contexts/ChatHistoryProvider";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { Message } from "../message/Message";
import { useChat } from "../../hooks/useChat";
import "./Chat.css"

export const Chat = ()=>{
     
  const { publicKeys } = useContext(publicKeysContext)
  const { chatHistory } = useContext(chatHistoryContext)
       
   
  const { closeConnectionHandler,
		      sendMessageHandler } = useChat()    

  return(
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
              <input className="inputChatSendMessageBar" placeholder="Escriba un mensaje aquí" name="chatInput"></input>
              <button className="submitChatSendMessageBarContainer" type="submit">
                <BsFillCircleFill className="submitCircleChatSendMessageBar" />
                <IoMdSend  className="submitArrowIconChatSendMessageBar" />
              </button>                              
            </form>
          </div>
                                        
        </div>              
      </div>
    </>         
  )
}






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


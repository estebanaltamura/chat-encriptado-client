import { useContext } from "react"
import { PopUpContext } from "../contexts/PopUpContextProvider"
import { PopUp } from "../componentes/popUp/PopUp"
import { Chat } from "../componentes/chat/Chat"

export const ChatRoom = ()=>{
  const { showPopUp, popUpData } = useContext(PopUpContext)
  
  return(
    <>
      {
        showPopUp ?   
          <PopUp  title                       = {popUpData.title}
                  message                     = {popUpData.message}                      
                  type                        = {popUpData.type}
                  seconds                     = {popUpData.seconds}  
                  CTAtext                     = {popUpData.CTAtext}    
                  acceptButtonText            = {popUpData.acceptButtonText}                
                  rejectButtonText            = {popUpData.rejectButtonText}                       
                  handlerAccept               = {popUpData.handlerAccept}
                  handlerReject               = {popUpData.handlerReject}
                  handlerTimeOut              = {popUpData.handlerTimeOut}
          />  

                  : 
          <Chat />
      }
    </>    
  )
}
import { useContext } from "react"
import { useFindingPair } from "../hooks/useFindingPair";
import { PopUpContext } from "../contexts/PopUpContextProvider";
import { PopUp } from "../componentes/popUp/PopUp";
import { FindingPairForm } from "../componentes/findingPairForm/FindingPairForm";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./FindingPair.css"

export const FindingPair = ()=>{
    
  const { showPopUp, popUpData } = useContext(PopUpContext)   
  const { closeConnectionHandler} = useFindingPair()  
   
  return(
    <>
      {  
        showPopUp   ?  

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
                  index                       = {Math.random()}
          />  
                    :        
                    
          <>
            <div className="closeButtonContainerFindingPair">
              <AiOutlineCloseCircle className="closeConnectionButtonFindingPair" onClick={closeConnectionHandler} />
            </div>   

            <div className="findingPairContainer">
              <div className="logoContainer">
                <img className="logoImage" src="https://i.postimg.cc/bNy9QWtG/logo.jpg"/>
              </div>
                                            
              <div className="tutorialMessageContainerFindingPair">
                <p className="tutorialMessageFindingPair">Share your public key by whatsapp or similar with the person you want and wait for his/her invitation</p>
                <p className="tutorialMessageFindingPair or">or</p>
                <p className="tutorialMessageFindingPair">Insert the public key which you received of the person who you want have a private talk and send his/her an invitation</p>
              </div>     

              <FindingPairForm />  
            </div>

          </>   
      }
    </>        
  )
}
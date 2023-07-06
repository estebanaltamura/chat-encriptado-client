import { useContext } from "react"
import { PopUpContext } from "../contexts/PopUpContextProvider";
import { Login } from "../componentes/login/Login";
import { PopUp } from "../componentes/popUp/PopUp";

export const Home = ()=>{

    const {showPopUp, popUpData} = useContext(PopUpContext)    
   
    return(
      <>
        {          
          showPopUp   ?   
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
                      
            <Login />                               
        }
      </>        
    )
}
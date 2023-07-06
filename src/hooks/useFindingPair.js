import { useContext, useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { webSocketConnectionContext } from "../contexts/WebSocketConnectionProvider"
import { publicKeysContext } from "../contexts/publickKeysProvider"
import { PopUpContext } from "../contexts/PopUpContextProvider"


export const useFindingPair = ()=>{

  const { setConnectionStatus, connectionstatus, tryPairing, closeConnection } = useContext(webSocketConnectionContext)
  const { publicKeys } = useContext(publicKeysContext)
  const [ copyPublicKeyText, setCopyPublicKeyText ] = useState("Copy my public key") 
  const { setShowPopUp } = useContext(PopUpContext)
  const history = useNavigate()

  useEffect(()=>{
    if(connectionstatus==="chating"){
      setShowPopUp(false)
      history("/chatRoom")            
    }           
  }     
  ,[connectionstatus])

  const tryPairingHandler = (e)=>{
    e.preventDefault()
    const publicKeyUser2 = e.target.elements.findingPairInput.value
    console.log(publicKeyUser2)      
    if(publicKeyUser2 !== ""){
      setConnectionStatus("requestSent")                
      tryPairing(publicKeys.from, publicKeyUser2) 
    }
    else setConnectionStatus("userInsertedAnEmptyEntry")                
  } 

  const closeConnectionHandler = ()=>{        
    setConnectionStatus("theUserHasClosed") 
    closeConnection()
  }

  const copyToClipboard = async () => {       
    await navigator.clipboard.writeText(publicKeys.from);  
    setCopyPublicKeyText("Copied!")
    const timeOut = setTimeout(()=>{
      setCopyPublicKeyText("Copy my public key")
      clearTimeout(timeOut)
    },1500)        
  };


  // BEHAVIOR INPUT
  const onFocusHandler = (e)=>{    
    const element = e.target      
    element.removeAttribute("placeholder")
  }

  const onBlurHandler = (e)=>{  
    const element = e.target          
    element.setAttribute("placeholder", "Insert a public key of your peer")
  }
    
  return({
    onFocusHandler,
    onBlurHandler,
    tryPairingHandler,
    closeConnectionHandler,
    copyToClipboard,
    copyPublicKeyText
  })
}
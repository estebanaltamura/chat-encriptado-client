import { useEffect, useContext, useState, useRef } from "react"
import { webSocketConnectionContext } from "../contexts/WebSocketConnectionProvider"
import { publicKeysContext } from "../contexts/publickKeysProvider";

export const usePopUpHandler = () =>{

    


//sirva para server error, cierre propio o cierre del otro
// stados para server error y cierres "serverError" "theUserHasClosed" "theOtherUserHasClosed" un boton que fuerza el cierre


const { connectionStatus, setConnectionStatus, sendWebSocketMessage, closeConnection, solicitorUserData } = useContext(webSocketConnectionContext)
const { publicKeys } = useContext(publicKeysContext)   
const publicKeysRef = useRef()
const solicitorUserDataDataRef = useRef()


useEffect(()=>{
    publicKeysRef.current = publicKeys
},[publicKeys])


useEffect(()=>{
    solicitorUserDataDataRef.current = solicitorUserData
},[solicitorUserData])




//INACTIVITY TIME HANDLER
const inactivityAcceptHandler =()=>{ 
    const path = window.location.href
    const pathInParts = path.split("/")
    const lastPartPath = pathInParts[ pathInParts.length - 1 ]
    
    if(lastPartPath === "findingPair"){
        setConnectionStatus("userRegistered")
    } 
    else if(lastPartPath === "chatRoom"){
        setConnectionStatus("chating")
    }
    
}

const inactivityRejectHandler = ()=>{
    closeConnection() //cierre directo
}

//REQUEST RECEIVED USER RESPONSE HANDLER
const requestReceivedAcceptByUserHandler =()=>{        
    const confirmedRequest = {"confirmedRequest": {"user1": solicitorUserDataDataRef.current.publicKey, "user2": publicKeys.from}}   
    sendWebSocketMessage(confirmedRequest)
}

const requestReceivedRejectByUserHandler = ()=>{          
    const rejectedRequest = {"rejectedRequest": {"user1": solicitorUserDataDataRef.current.publicKey, "user2": publicKeys.from}}   
    sendWebSocketMessage(rejectedRequest)
    setConnectionStatus("userRegistered")
}


//REQUEST SENT REJECTED OR EXCEPTION
const requestSentAcceptRejectOrExceptionHandler =()=>{         
    setConnectionStatus("userRegistered")
}

const requestSentRejectRejectOrExceptionHandler =()=>{                
    setConnectionStatus("userRegistered")
}



//SERVER ERROR
const acceptServerErrorClosingHandler =()=>{        
    closeConnection() // ver
}

const rejectedServerErrorClosingHandler =()=>{            
    closeConnection() // ver
}



//CLOSING BY THE OTHER USER
const acceptOtherUserHasClosedHandler =()=>{         
    closeConnection() // popUp explicando
}

const rejectOtherUserHasClosedHandler =()=>{            
    closeConnection() // popUp explicando
}


//NICK NAME ERROR
const handledAcceptNickNameError =()=>{        
    setConnectionStatus("offline")
}

const handledRejectNickNameError =()=>{            
    setConnectionStatus("offline")
}









    return({
        inactivityAcceptHandler,
        inactivityRejectHandler,
        requestReceivedAcceptByUserHandler,
        requestReceivedRejectByUserHandler,
        requestSentAcceptRejectOrExceptionHandler,
        requestSentRejectRejectOrExceptionHandler,
        acceptServerErrorClosingHandler,
        rejectedServerErrorClosingHandler,        
        acceptOtherUserHasClosedHandler,
        rejectOtherUserHasClosedHandler,
        handledAcceptNickNameError,
        handledRejectNickNameError

    })
}



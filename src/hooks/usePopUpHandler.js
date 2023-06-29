import { useEffect, useContext, useState, useRef } from "react"
import { webSocketConnectionContext } from "../contexts/WebSocketConnectionProvider"
import { publicKeysContext } from "../contexts/publickKeysProvider";

export const usePopUpHandler = () =>{

    


//sirva para server error, cierre propio o cierre del otro
// stados para server error y cierres "serverError" "theUserHasClosed" "theOtherUserHasClosed" un boton que fuerza el cierre


const { connectionStatus, setConnectionStatus, sendWebSocketMessage, closeConnection, solicitorUserData, setRequestError } = useContext(webSocketConnectionContext)
const { publicKeys } = useContext(publicKeysContext)   
const solicitorUserDataDataRef = useRef()


useEffect(()=>{
    solicitorUserDataDataRef.current = solicitorUserData
},[solicitorUserData])



//INACTIVITY TIME HANDLER
const acceptDisconnectionByInactivityHandler =()=>{ 
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

const timeOutDisconnectionByInactivityHandler = ()=>{
    closeConnection() //cierre directo
}

//REQUEST RECEIVED USER RESPONSE HANDLER
const acceptRequestReceivedHandler =()=>{        
    const confirmedRequest = {"confirmedRequest": {"user1": solicitorUserDataDataRef.current.publicKey, "user2": publicKeys.from}}   
    sendWebSocketMessage(confirmedRequest)
}

const rejectRequestReceivedHandler = ()=>{          
    const rejectedRequest = {"rejectedRequest": {"user1": solicitorUserDataDataRef.current.publicKey, "user2": publicKeys.from}}   
    sendWebSocketMessage(rejectedRequest)
    setConnectionStatus("userRegistered")
}

const timeOutrequestReceivedHandler = ()=>{      
    setConnectionStatus("userRegistered")
}

//REQUEST ERROR HANDLER
const acceptRequestErrorHandler = ()=>{      
    setConnectionStatus("userRegistered")
}

const timeOutRequestErrorHandler = ()=>{      
    setConnectionStatus("userRegistered")
}


//SERVER ERROR
const acceptServerErrorClosingHandler =()=>{        
    closeConnection() // ver
}

const timeOutServerErrorClosingHandler =()=>{            
    closeConnection() // ver
}



//CLOSING BY THE OTHER USER
const acceptOtherUserHasClosedHandler =()=>{         
    closeConnection() // popUp explicando
}

const timeOutOtherUserHasClosedHandler =()=>{            
    closeConnection() // popUp explicando
}

//REQUEST SENT
const cancelRequestSentHandler =()=>{ 
    const cancelRequestSent = {"cancelRequestSent": {"user": publicKeys.from}}   
    sendWebSocketMessage(cancelRequestSent)        
    setConnectionStatus("userRegistered") // popUp explicando
}

const timeOutRequestSentHandler =()=>{          
    const cancelRequestSent = {"cancelRequestSent": {"user": publicKeys.from}}   
    sendWebSocketMessage(cancelRequestSent)          
    setRequestError({"title": "Error finding user", "message": "User doesn't exist or rejected your request", "CTA": "Click OK to continue"}) 
}

//NICK NAME ERROR
const AcceptNickNameErrorHandler =()=>{        
    setConnectionStatus("offline")
}

const timeOutNickNameErrorHandler =()=>{            
    setConnectionStatus("offline")
}

//USER INSERTED AN EMPTY ENTRY IN TRY PAIRING PROCESS
const acceptUserInsertedAnEmptyEntry=()=>{
    setConnectionStatus("userRegistered")
}

const timeOutUserInsertedAnEmptyEntry=()=>{
    setConnectionStatus("userRegistered")
}
            



    return({              
        acceptOtherUserHasClosedHandler,
        timeOutOtherUserHasClosedHandler,
        cancelRequestSentHandler,
        timeOutRequestSentHandler,
        acceptRequestErrorHandler,
        timeOutRequestErrorHandler,
        acceptRequestReceivedHandler,
        rejectRequestReceivedHandler,
        timeOutrequestReceivedHandler,
        acceptDisconnectionByInactivityHandler,
        timeOutDisconnectionByInactivityHandler,
        acceptServerErrorClosingHandler,
        timeOutServerErrorClosingHandler,
        AcceptNickNameErrorHandler,
        timeOutNickNameErrorHandler,
        acceptUserInsertedAnEmptyEntry,
        timeOutUserInsertedAnEmptyEntry
    })
}



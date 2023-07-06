import { useState, useEffect, useContext, createContext, useRef } from "react"
import { webSocketConnectionContext } from "./WebSocketConnectionProvider"
import { publicKeysContext } from "./publickKeysProvider"


export const PopUpContext = createContext({}) 

export const PopUpContextProvider = ({children})=>{

    const { connectionstatus, 
            setConnectionStatus, 
            sendWebSocketMessage,              
            solicitorUserData, 
            setRequestError, 
            requiredUserData, 
            setSolicitorUserData, 
            setRequiredUserData,
            requestError } = useContext(webSocketConnectionContext)

    const [ showPupUp, setShowPopUp ] = useState(false)
    const [ popUpData, setPopUpData ] = useState({})

    const [requesterNickName, setRequesterNickName] = useState()
    const requestErrorRef = useRef()
    

    const { publicKeys } = useContext(publicKeysContext)    
    const PublicKeysRef = useRef()

    useEffect(()=>{
        PublicKeysRef.current = publicKeys
        console.log(PublicKeysRef.current)
    },[publicKeys])


    const solicitorUserDataDataRef = useRef()
    useEffect(()=>{
        solicitorUserDataDataRef.current = solicitorUserData
    },[solicitorUserData])




    useEffect(()=>{
        
        
        if(solicitorUserData !== null){
            if(solicitorUserData.nickName !== null){
                if(solicitorUserData.nickName.length < 18){
                    setRequesterNickName(solicitorUserData.nickName)
                } 
                else{
                    const nickNameHandled = solicitorUserData.nickName.slice(0,18) + "..."
                    setRequesterNickName(nickNameHandled)
                }               
            }            
        }        
    }     
    ,[solicitorUserData])

    useEffect(()=>{
        requestErrorRef.current = requestError
        if(requestErrorRef.current !== null){
            setConnectionStatus("requestError")
        }        
    }     
    ,[requestError])


    useEffect(()=>{
        
        if(connectionstatus === "nickNameError"){
            setShowPopUp(true)
            setPopUpData({  "title"                 : "Nick name error",
                            "message"               : "Nick name should have only alphanumeric characters and minimum one character",                    
                            "type"                  : "oneButtonAccept", 
                            "seconds"               : 10,                           
                            "acceptButtonText"      : "OK",
                            "handlerAccept"         : AcceptNickNameErrorHandler, 
                            "handlerTimeOut"        : timeOutNickNameErrorHandler                       
                        })
        }

        if(connectionstatus === "serverError"){
            setShowPopUp(true)
            setPopUpData({  "title"                 : "Closing",  
                            "message"               : "Error interacting with server",                      
                            "type"                  : "oneButtonAccept", 
                            "seconds"               : 10,
                            "acceptButtonText"      : "OK",
                            "handlerAccept"         : acceptServerErrorHandler, 
                            "handlerTimeOut"        : timeOutServerErrorHandler                                 
                        })
        }

        if(connectionstatus === "disconnectionByInactivity"){
            setShowPopUp(true)
            setPopUpData({  "title"                 : "The connection is shutting down",
                            "message"               : "Due to inactivity of more than 1 minute, the connection is going to be closed",
                            "CTAtext"               : "If you want to stay connected, please press the button",
                            "type"                  : "oneButtonAccept", 
                            "seconds"               : 30,
                            "acceptButtonText"      : "I'M HERE",
                            "handlerAccept"         : acceptDisconnectionByInactivityHandler,
                            "handlerTimeOut"        : timeOutDisconnectionByInactivityHandler
                                                           
                        })
        }

        if(connectionstatus === "requestReceived"){
            setShowPopUp(true)
            setPopUpData({  "title"                 : "An user wants talk to you",
                            "message"               : `${requesterNickName} asks you to talk in a private room`,
                            "CTAtext"               : `If you want talk with ${requesterNickName}, please press accept`,
                            "type"                  : "twoButtons", 
                            "seconds"               : 10,
                            "acceptButtonText"      : "START CHAT",
                            "rejectButtonText"      : "REJECT",
                            "handlerAccept"         : acceptRequestReceivedHandler,
                            "handlerReject"         : rejectRequestReceivedHandler,
                            "handlerTimeOut"        : timeOutrequestReceivedHandler                                                           
                        })
        }

        if(connectionstatus === "requestError"){            
            setShowPopUp(true)
            setPopUpData({  "title"                 : `${requestErrorRef.current.title}`,
                            "message"               : `${requestErrorRef.current.message}`,
                            "CTAtext"               : `${requestErrorRef.current.CTA}`,
                            "type"                  : "oneButtonAccept", 
                            "seconds"               : 10,                          
                            "acceptButtonText"      : "OK",
                            "handlerAccept"         : acceptRequestErrorHandler,
                            "handlerTimeOut"        : timeOutRequestErrorHandler,                                                          
                        })
        }

        if(connectionstatus === "requestSent"){
            setShowPopUp(true)
            setPopUpData({  "title"                 : "Request sent",  
                            "message"               : "Waiting for response of user",                      
                            "type"                  : "oneButtonCancel", 
                            "seconds"               : 30,                            
                            "rejectButtonText"      : "CANCEL",
                            "handlerReject"         : cancelRequestSentHandler, 
                            "handlerTimeOut"        : timeOutRequestSentHandler                                                     
                        })
        }

        if(connectionstatus === "userInsertedAnEmptyEntry"){
            setShowPopUp(true)
            setPopUpData({  "title"                 : "Inserted a empty entry",
                            "message"               : "Please insert a valid public key",                      
                            "type"                  : "oneButtonAccept", 
                            "seconds"               : 10,                            
                            "acceptButtonText"      : "OK",
                            "handlerAccept"         : acceptUserInsertedAnEmptyEntry,
                            "handlerTimeOut"        : timeOutUserInsertedAnEmptyEntry                                                
                        })
        }

        if(connectionstatus === "otherUserHasClosed"){
            setShowPopUp(true)
            setPopUpData({  "title"                 : "Closing",  
                            "message"               : "The other user has close the chat",                      
                            "type"                  : "oneButtonAccept", 
                            "seconds"               : 10,                           
                            "acceptButtonText"      : "OK",
                            "handlerAccept"         : acceptOtherUserHasClosedHandler,
                            "handlerTimeOut"        : timeOutOtherUserHasClosedHandler                                                
                        })
        }
    },[connectionstatus])

    //INACTIVITY TIME HANDLER
    const acceptDisconnectionByInactivityHandler =()=>{ 
        const path = window.location.pathname        
        const pathInParts = path.split("/")
        const lastPartPath = pathInParts[ pathInParts.length - 1 ]
        
        console.log(lastPartPath)

        if(lastPartPath === "findingPair"){
            setConnectionStatus("userRegistered")
            setShowPopUp(false)
        } 
        else if(lastPartPath === "chatRoom"){
            setConnectionStatus("chating")
            setShowPopUp(false)
        }    
    }

    const timeOutDisconnectionByInactivityHandler = ()=>{
        setShowPopUp(false)
        window.location.href= "./login" //cierre directo
    }

    //REQUEST RECEIVED USER RESPONSE HANDLER
    const acceptRequestReceivedHandler =()=>{
        setSolicitorUserData(null)  
        setRequiredUserData(null)        
        const confirmedRequest = {"confirmedRequest": {"user1": solicitorUserDataDataRef.current.publicKey, "user2": publicKeys.from}}   
        sendWebSocketMessage(confirmedRequest)
        setShowPopUp(false)
    }

    const rejectRequestReceivedHandler = ()=>{           
        const rejectedRequest = {"rejectedRequest": {"user1": solicitorUserDataDataRef.current.publicKey, "user2": publicKeys.from}}   
        sendWebSocketMessage(rejectedRequest)
        setConnectionStatus("userRegistered")
        setSolicitorUserData(null)  
        setRequiredUserData(null)  
        setShowPopUp(false)  
    }

    const timeOutrequestReceivedHandler = ()=>{  
        setSolicitorUserData(null)  
        setRequiredUserData(null)     
        setConnectionStatus("userRegistered")
        setShowPopUp(false)
    }


    //REQUEST ERROR HANDLER
    const acceptRequestErrorHandler = ()=>{      
        setConnectionStatus("userRegistered")
        setShowPopUp(false)
    }

    const timeOutRequestErrorHandler = ()=>{      
        setConnectionStatus("userRegistered")
        setShowPopUp(false)
    }

    

    //REQUEST SENT
    const cancelRequestSentHandler =()=>{ 
        const cancelRequestSent = {"cancelRequestSent": {"user1": PublicKeysRef.current.from, "user2": requiredUserData.publicKey}}   
        sendWebSocketMessage(cancelRequestSent)        
        setConnectionStatus("userRegistered") 
        setShowPopUp(false)
    }

    const timeOutRequestSentHandler =()=>{          
        console.log(PublicKeysRef.current, requiredUserData.publicKey)
        const cancelRequestSent = {"cancelRequestSent": {"user1": PublicKeysRef.current.from, "user2": requiredUserData.publicKey}}   
        sendWebSocketMessage(cancelRequestSent)          
        setRequestError({"title": "Error finding user", "message": "User doesn't exist or rejected your request", "CTA": "Click OK to continue"})
        setShowPopUp(false) 
    }

    //NICK NAME ERROR
    const AcceptNickNameErrorHandler =()=>{        
        setConnectionStatus("offline")   
        setShowPopUp(false) 
    }

    const timeOutNickNameErrorHandler =()=>{   
        setConnectionStatus("offline")    
        setShowPopUp(false)     
    }

    //SERVER ERROR
    const acceptServerErrorHandler = ()=>{         
        window.location.href= "./login"              
    }
    
    const timeOutServerErrorHandler = ()=>{        
        window.location.href= "./login" 
    }

    //CLOSING BY THE OTHER USER
    const acceptOtherUserHasClosedHandler =()=>{         
        window.location.href= "./login"        
    }

    const timeOutOtherUserHasClosedHandler =()=>{            
        window.location.href= "./login"        
    }

    //

    //USER INSERTED AN EMPTY ENTRY IN TRY PAIRING PROCESS
    const acceptUserInsertedAnEmptyEntry=()=>{
        setConnectionStatus("userRegistered")
        setShowPopUp(false) 
    }

    const timeOutUserInsertedAnEmptyEntry=()=>{
        setConnectionStatus("userRegistered")
        setShowPopUp(false) 
    }


    return(
        <PopUpContext.Provider value={{showPupUp, popUpData, setShowPopUp, setPopUpData}}>
            {children}
        </PopUpContext.Provider>
    )
}
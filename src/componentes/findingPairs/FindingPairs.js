import { useRef, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { publicKeysContext } from "../../contexts/publickKeysProvider";
import { lastActivityTimeContext } from "../../contexts/LastActivityTimeProvider";
import { AiOutlineCloseCircle, AiOutlineCopy } from "react-icons/ai";
import { usePopUpHandler } from '../../hooks/usePopUpHandler';
import { PopUp } from '../popUp/PopUp';


import "./FindingPairs.css"

export const FindingPairs = ()=>{
    const { connectionstatus, setConnectionStatus, closeConnection, tryPairing, requesterData, sendWebSocketMessage, requestError } = useContext(webSocketConnectionContext)
    const { setSecondsFromLastActivity } = useContext(lastActivityTimeContext)
    const { publicKeys } = useContext(publicKeysContext)     
    const input = useRef() 
    const requesterDataRef = useRef()   
    const requestErrorRef = useRef()
    const publicKeysRef = useRef()
    const [isLoading, setIsLoading] = useState(false)
    const [requesterNickName, setRequesterNickName] = useState() 
    const [copyPublicKeyText, setCopyPublicKeyText] = useState("Copy my public key")   

    const { inactivityAcceptHandler,
            inactivityRejectHandler,
            requestReceivedAcceptByUserHandler,
            requestReceivedRejectByUserHandler,
            requestSentAcceptRejectOrExceptionHandler,
            requestSentRejectRejectOrExceptionHandler,
            acceptServerErrorClosingHandler,
            rejectedServerErrorClosingHandler,
            } = usePopUpHandler()

    const history = useNavigate()
    

    const closeConnectionHandler = ()=>{        
        closeConnection()
    }


    

   
    useEffect(()=>{
        if(connectionstatus==="offline") window.location.href = "/login"  
        
        if(connectionstatus==="chating"){
            history("/chatRoom") 
            setIsLoading(false)
        }

        if(connectionstatus==="requestError"){
            setIsLoading(false)
        }        
    }     
    ,[connectionstatus])



    useEffect(()=>{
        requesterDataRef.current = requesterData
        
        if (requesterData.nickName !== null){
            if(requesterData.nickName.length < 18){
                setRequesterNickName(requesterData.nickName)
            } 
            else{
                const nickNameHandled = requesterData.nickName.slice(0,18) + "..."
                setRequesterNickName(nickNameHandled)
            }
        }
        
    }     
    ,[requesterData])

    useEffect(()=>{
        requestErrorRef.current = requestError
        if(requestErrorRef.current !== null){
            setConnectionStatus("requestError")
        }        
    }     
    ,[requestError])


    useEffect(()=>{
        publicKeysRef.current = publicKeys
    }     
    ,[publicKeys])

    

    const tryPairingHandler = (e)=>{
        e.preventDefault()
        const publicKeyUser2 = input.current.value
        setConnectionStatus("findingPair")
        setIsLoading(true)        
        tryPairing(publicKeys.from, publicKeyUser2)        
    }



    

    const copyToClipboard = async () => {       
        await navigator.clipboard.writeText(publicKeysRef.current.from);  
        setCopyPublicKeyText("Copied!")
        const timeOut = setTimeout(()=>{
            setCopyPublicKeyText("Copy my public key")
            clearTimeout(timeOut)
        },1500)
        
    };

  
    // COMPORTAMIENTO INPUT
    const onFocusHandler = ()=>{          
        input.current.removeAttribute("placeholder")
    }

    const onBlurHandler = ()=>{        
        input.current.setAttribute("placeholder", "Insert a public key of your peer")
    }


    return(
        <>
            {
                connectionstatus === "disconnectionByInactivity" 
                    ?                
                    <PopUp  title="The connection is shutting down" 
                            message="Due to inactivity of more than 1 minute, the connection is going to be closed"
                            CTAtext="If you want to stay connected, please press the button"
                            type="oneButton" 
                            seconds={10}
                            button2Text="I'm here"
                            handledAccept={inactivityAcceptHandler}
                            handledReject={inactivityRejectHandler}
                            key={connectionstatus}
                    />                                             
                    :
                connectionstatus === "requestReceived" 
                    ?   
                    <PopUp  title="An user wants talk to you" 
                            message={`${requesterNickName} asks you to talk in a private room`}
                            CTAtext={`If you want talk with ${requesterNickName}, please press accept`}
                            type="twoButton" 
                            seconds={25}
                            button1Text="Reject"
                            button2Text="Start chat"
                            handledAccept={requestReceivedAcceptByUserHandler}
                            handledReject={requestReceivedRejectByUserHandler}
                            key={connectionstatus}
                    />   
                    :
                connectionstatus === "requestError"
                    ?   
                    <PopUp  title={`${requestErrorRef.current.title}`}
                            message={`${requestErrorRef.current.message}`}
                            CTAtext={`${requestErrorRef.current.CTA}`}
                            type="oneButton" 
                            seconds={10}                            
                            button2Text="OK"
                            handledAccept={requestSentAcceptRejectOrExceptionHandler}
                            handledReject={requestSentRejectRejectOrExceptionHandler}
                            key={connectionstatus}
                    />   
                    :
                connectionstatus === "serverError" // ver
                    ?   
                    <PopUp  title="Closing"  
                            message="Error interacting with server"                      
                            type="oneButton" 
                            seconds={10}                            
                            button2Text="OK"
                            handledAccept={acceptServerErrorClosingHandler}
                            handledReject={rejectedServerErrorClosingHandler}
                            key={connectionstatus}
                    />   
                    :    
                    isLoading   ?
                        <h4 className="waitingMessage">Waiting renponse of potential pair...</h4>                 
                                :
                        <>                    
                            <AiOutlineCloseCircle className="closeConnectionButtonFindingPair" onClick={closeConnectionHandler}/>
                            <div className="formContainer">                    
                                <form className="formFindingPair">
                                    <input className="nickNameInput" ref={input} type="text" placeholder="Insert a public key of your peer" autoComplete="off" onFocus={onFocusHandler} onBlur={onBlurHandler}></input>
                                    <button className="startSessionButton" onClick={tryPairingHandler}>Start chat</button>
                                    <div className="copyPublicKeyContainer" onClick={copyToClipboard}><AiOutlineCopy className="copyIcon" /><p className="copyPublicKeyText">{copyPublicKeyText}</p></div>
                                </form>                                        
                            </div>
                        </>
            }
        </>            
    )
}



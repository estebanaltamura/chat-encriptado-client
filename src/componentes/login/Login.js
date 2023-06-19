import { useRef, useContext, useEffect, useState} from "react"
import { useNavigate } from 'react-router-dom'
import nacl from 'tweetnacl';
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { publicKeysContext } from "../../contexts/publickKeysProvider";
import { lastActivityTimeContext } from "../../contexts/LastActivityTimeProvider";
import Spinner from 'react-bootstrap/Spinner';
import "./Login.css"
import { PopUp } from "../popUp/PopUp";


export const Login = ()=>{
    const { connectionstatus, connectWebSocket, createUser, closeConnection } = useContext(webSocketConnectionContext)
    const { publicKeys, setPublicKeys } = useContext(publicKeysContext)
    const { setSecondsFromLastActivity } = useContext(lastActivityTimeContext)
    const input = useRef()
    const user = useRef()    
    const [isLoading, setIsLoading] = useState(false)    
    const history = useNavigate()

    useEffect(()=>{        
        if(connectionstatus==="online"){      
            setIsLoading(true)
            createUser(user.current)          
        }

        if(connectionstatus==="userRegistered"){      
            setIsLoading(false)
            setPublicKeys({...publicKeys, "from": user.current.publicKey})
            history("/findingPair")          
        }        
    }    
    ,[connectionstatus])

    const iniciarSesion = (e)=>{
        e.preventDefault()
        setUserData()
        setSecondsFromLastActivity(0)
        connectWebSocket()     
    }

    const popUpAcceptHadler = ()=>{
        console.log("sd")
        closeConnection()
    }


    const setUserData = ()=>{
        //CANDIDATO A CUSTOM HOOK
        if(input.current.value === ""){
            alert("ingresar apodo")
            return           
        } 

        const nickNameInserted = input.current.value
        const regex = /['"]/g;
        const nickNameInsertedHandled = nickNameInserted.replace(regex, "");

        const keyPair = nacl.box.keyPair();
        const publicKey = keyPair.publicKey;
        const privateKey = keyPair.secretKey;


        const publicKeyString = String(publicKey)
        user.current = {
                            "publicKey"         : publicKeyString,
                            "nickName"          : nickNameInsertedHandled,
                            "password"          : null,
                            "to"                : null,
                            "state"             : "findingPair",
                            "stateTimeStamp"    : Date.now(),
                            "lastMessageTime"   : null
                        }        
    }
    
    // COMPORTAMIENTO INPUT
    const onFocusHandler = ()=>{        
        input.current.removeAttribute("placeholder")
    }

    const onBlurHandler = ()=>{        
        input.current.setAttribute("placeholder", "Insert a nick name")
    }
   
    return(
        <>
            {  
                connectionstatus === "disconnectionByInactivity" 
                    ?                
                <PopUp  title="The connection is shutting down" 
                        message="Due to inactivity of more than 1 minute, the connection is going to be closed" 
                        type="oneButton" 
                        handledAccept={popUpAcceptHadler}/>                                             
                    :
                isLoading ?
                    <Spinner className="spinner" animation="border" />                 
                          :
                    <div className="formContainerLogin">
                        <form className="formLogin">                        
                            <input className="nickNameInput" ref={input} type="text" placeholder="Insert a nick name" autoComplete="off" onFocus={onFocusHandler} onBlur={onBlurHandler}></input>
                            <button className="startSessionButton" onClick={iniciarSesion}>Start session</button>
                        </form>                                        
                    </div>                
            }
        </>        
    )
}
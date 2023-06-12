import { useRef, useContext, useEffect} from "react"
import { useNavigate } from 'react-router-dom'

import nacl from 'tweetnacl';
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { isLoadingContext } from "../../contexts/IsLoadingProvider";

import Spinner from 'react-bootstrap/Spinner';
import "./Login.css"


export const Login = ()=>{

    const input = useRef()
    const user = useRef()
    const {isLoading, setIsLoading} = useContext(isLoadingContext)    
    const {isConnected, isUserRegistered, connectWebSocket, createUser} = useContext(webSocketConnectionContext)
    const history = useNavigate()

    useEffect(()=>{
        if(isConnected){      
            setIsLoading(true)
            createUser(user.current)          
        }
    }     
    ,[isConnected])

    useEffect(()=>{
        setIsLoading(false)
        isUserRegistered && history("/findingPair")
    }     
    ,[isUserRegistered])
    

    const iniciarSesion = (e)=>{
        e.preventDefault()

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
                            "pair"              : null,
                            "state"             : "findingPair",
                            "stateTimeStamp"    : Date.now(),
                            "lastMessageTime"   : null
                        }
        connectWebSocket()      
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
                isLoading ?
                <Spinner className="spinner" animation="border" />                 
                        :
                <div className="formContainer">
                    <form>
                        <input className="nickNameInput" ref={input} type="text" placeholder="Insert a nick name" autoComplete="off" onFocus={onFocusHandler} onBlur={onBlurHandler}></input>
                        <button className="startSessionButton" onClick={iniciarSesion}>Start session</button>
                    </form>                                        
                </div>
                
            }
        </>        
    )
}
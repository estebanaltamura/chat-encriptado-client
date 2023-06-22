import { useRef, useContext, useEffect, useState} from "react"
import { useNavigate } from 'react-router-dom'
import nacl from 'tweetnacl';
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { publicKeysContext } from "../../contexts/publickKeysProvider";
import { PopUp } from "../popUp/PopUp";
import Spinner from 'react-bootstrap/Spinner';
import "./Login.css"



export const Login = ()=>{
    const { connectionstatus, connectWebSocket, createUser, setConnectionStatus } = useContext(webSocketConnectionContext)
    const { publicKeys, setPublicKeys } = useContext(publicKeysContext)    
    const input = useRef()
    const user = useRef()    
    const [isLoading, setIsLoading] = useState(false)    
    const history = useNavigate()

    useEffect(()=>{        
        if(connectionstatus==="online"){                
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
        setIsLoading(true)
        setUserData()        
        connectWebSocket()     
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
    

    const handledAcceptClosing =()=>{        
        setConnectionStatus("offline")
    }

    const handledRejectClosing =()=>{            
        setConnectionStatus("offline")
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
                connectionstatus === "closing"
                ?   
                <PopUp  title="Closing"  
                        message="Error trying to connect to the server"                      
                        type="oneButton" 
                        seconds={10}                            
                        button2Text="OK"
                        handledAccept={handledAcceptClosing}
                        handledReject={handledRejectClosing}
                        key={connectionstatus}
                />   
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
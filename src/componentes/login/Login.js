import { useRef, useContext, useEffect, useState} from "react"
import { useNavigate } from 'react-router-dom'
import nacl from 'tweetnacl';
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { publicKeysContext } from "../../contexts/publickKeysProvider";
import { PopUp } from "../popUp/PopUp";
import { usePopUpHandler } from "../../hooks/usePopUpHandler";
import Spinner from 'react-bootstrap/Spinner';
import "./Login.css"



export const Login = ()=>{
    const { connectionstatus, connectWebSocket, createUser, setConnectionStatus } = useContext(webSocketConnectionContext)
    const { publicKeys, setPublicKeys } = useContext(publicKeysContext)    
    const input = useRef()
    const user = useRef()    
    const [isLoading, setIsLoading] = useState(false)    
    const history = useNavigate()

    const { acceptServerErrorClosingHandler,
            timeOutServerErrorClosingHandler, 
            AcceptNickNameErrorHandler,
            timeOutNickNameErrorHandler} = usePopUpHandler()

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
        setUserData() 
        if (input.current.value !== ""){
            setIsLoading(true)   
            connectWebSocket()   
        }    
          
    }  


    const setUserData = ()=>{
        //CANDIDATO A CUSTOM HOOK
        if(input.current.value === ""){
            setConnectionStatus("nickNameError")
            return false         
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
                            "requestStatus"     : null,
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
                connectionstatus === "serverError" // ver
                ?   
                <PopUp  title="Closing"  
                        message="Error trying to connect to the server"                      
                        type="oneButtonAccept" 
                        seconds={10}                            
                        button2Text="OK"
                        handlerAccept={acceptServerErrorClosingHandler}
                        handlerTimeOut={timeOutServerErrorClosingHandler}
                        key={connectionstatus}
                />   
                :           
                connectionstatus === "nickNameError"
                ?   
                <PopUp  title="Nick name error"  
                        message="Nick name should have only alphanumeric characters and minimum one character"                      
                        type="oneButtonAccept" 
                        seconds={5}                            
                        button2Text="OK"
                        handlerAccept={AcceptNickNameErrorHandler}
                        handlerTimeOut={timeOutNickNameErrorHandler}
                        key={connectionstatus}
                />   
                :             
                isLoading ?
                    <Spinner className="spinner" animation="border" />                 
                          :
                    <div className="loginContainer">
                        
                        <div className="logoContainer">
                            <img className="logoImage" src="https://i.postimg.cc/bNy9QWtG/logo.jpg"/>
                        </div>
                        
                        <div className="tutorialMessageContainerLogin">
                            <p className="tutorialMessageLogin">Secret chat is a private chat encrypted end to end with private and public keys SHA256</p>
                        </div>   
                                    
                        <div className="formContainerLogin">
                            <form className="formLogin" onSubmit={iniciarSesion}>                        
                                <input className="nickNameInputLogin" ref={input} type="text" placeholder="Insert a nick name" autoComplete="off" onFocus={onFocusHandler} onBlur={onBlurHandler}></input>
                                <button className="startSessionButtonLogin" onClick={iniciarSesion}>Start session</button>
                            </form>                                        
                        </div> 

                    </div>      
            }
        </>        
    )
}
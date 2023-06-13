import { useRef, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { AiFillCloseSquare } from "react-icons/ai";

import "./FindingPairs.css"

export const FindingPairs = ()=>{

    const input = useRef()    
    const history = useNavigate()

    const { connectionstatus, closeConnection, tryPairing } = useContext(webSocketConnectionContext)

    const closeConnectionHandler = ()=>{        
        closeConnection()
    }

    useEffect(()=>{
        connectionstatus==="offline" && history("/login")                  
    }     
    ,[connectionstatus])

    const tryPairingHandler = (e)=>{
        e.preventDefault()
        tryPairing(input.value)
    }
  
    // COMPORTAMIENTO INPUT
    const onFocusHandler = ()=>{          
        input.current.removeAttribute("placeholder")
    }

    const onBlurHandler = ()=>{        
        input.current.setAttribute("placeholder", "Insert a public key of your peer")
    }


    return(
        <>
            <AiFillCloseSquare className="closeConnectionButton" onClick={closeConnectionHandler}/>
            <div className="formContainer">                    
                <form className="formFindingPair">
                    <input className="nickNameInput" ref={input} type="text" placeholder="Insert a public key of your peer" autoComplete="off" onFocus={onFocusHandler} onBlur={onBlurHandler}></input>
                    <button className="startSessionButton" onClick={tryPairingHandler}>Start chat</button>
                </form>                                        
            </div>
        </>
        
                
              
    )
}
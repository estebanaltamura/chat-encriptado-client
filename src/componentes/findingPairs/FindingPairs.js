import { useRef, useContext } from 'react';
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";

import { AiFillCloseSquare } from "react-icons/ai";

import "./FindingPairs.css"

export const FindingPairs = ()=>{

    const input = useRef()

    const {closeConnection} = useContext(webSocketConnectionContext)

    // COMPORTAMIENTO INPUT
    const onFocusHandler = ()=>{        
        input.current.removeAttribute("placeholder")
    }

    const onBlurHandler = ()=>{        
        input.current.setAttribute("placeholder", "Insert a public key of your peer")
    }


    return(
        <>
            <AiFillCloseSquare className="closeConnectionButton" onClick={()=>closeConnection()}/>
            <div className="formContainer">                    
                <form>
                    <input className="nickNameInput" ref={input} type="text" placeholder="Insert a public key of your peer" autoComplete="off" onFocus={onFocusHandler} onBlur={onBlurHandler}></input>
                    <button className="startSessionButton">Start chat</button>
                </form>                                        
            </div>
        </>
        
                
              
    )
}
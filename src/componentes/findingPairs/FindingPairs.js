import { useRef, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { webSocketConnectionContext } from "../../contexts/WebSocketConnectionProvider";
import { publicKeysContext } from "../../contexts/publickKeysProvider";
import { lastActivityTimeContext } from "../../contexts/LastActivityTimeProvider";
import { AiFillCloseSquare } from "react-icons/ai";

import "./FindingPairs.css"

export const FindingPairs = ()=>{
    const { connectionstatus, closeConnection, tryPairing } = useContext(webSocketConnectionContext)
    const { publicKeys } = useContext(publicKeysContext) 
    const { setSecondsFromLastActivity } = useContext(lastActivityTimeContext)
    const input = useRef()    
    const [isLoading, setIsLoading] = useState(false)    
    const history = useNavigate()
    

    const closeConnectionHandler = ()=>{        
        closeConnection()
    }

   
    useEffect(()=>{
        connectionstatus==="offline" && history("/login") 
        
        if(connectionstatus==="chating"){
            history("/chatRoom") 
            setIsLoading(false)
        }
    }     
    ,[connectionstatus])

    const tryPairingHandler = (e)=>{
        e.preventDefault()
        const publicKeyUser2 = input.current.value
        setIsLoading(true)
        setSecondsFromLastActivity(0)
        tryPairing(publicKeys.from, publicKeyUser2)        
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
            {
                isLoading ?
                <h4 className="waitingMessage">Waiting renponse of potential pair...</h4>                 
                        :
                <>
                    <AiFillCloseSquare className="closeConnectionButton" onClick={closeConnectionHandler}/>
                    <div className="formContainer">                    
                        <form className="formFindingPair">
                            <input className="nickNameInput" ref={input} type="text" placeholder="Insert a public key of your peer" autoComplete="off" onFocus={onFocusHandler} onBlur={onBlurHandler}></input>
                            <button className="startSessionButton" onClick={tryPairingHandler}>Start chat</button>
                        </form>                                        
                    </div>
                </>
            }
        </>            
    )
}

/*
//Usuario 1 manda al servidor una direccion publica correspondiente supuestamente a usuario2. 
    -Apenas envia el mensaje queda waiting bloqueado sin la posibilidad de manipular nada. 
        -Si esta, manda un alert a usuario 2 
        -Si no esta en 30 segundos alert a usuario 1 indicando que el usuario 1 no existe o no acepto la solicitud
    
        si acepta:
                -1 usuario2 manda mensaje al servidor
                -2 el servidor crea el par. 
                -3 El servidor manda mensaje a usuario1 y a usuario2 avisando de la creacion del par
                -4 Usuario 1 y usuario 2 son redirigidos a la ventana de chat
        
        si rechaza manda mensaje a usuario 1, genera un alert indicando que el usuario 1 no existe o no acepto la solicitud


    try manda una key. 
    usuario que envia se bloquea, 
    si existe, manda un mensaje preguntando a esa key, si acepta se crea el par




    cuando el par esta creado cada uno en su chat manda mensaje de from to, en el servidor se verifica si ese par existe. 
    es el mismo par por que va a estar ordenado con sort a - b. Osea se recibe mensaje from to y su par. si el par existe y cada uno es un integrante del par se envia el mensaje al otro



    nueva teoria. el server no sabe ni quien esta hablando con quien. Una vez que uno autoriza al otro queda en el front del otro. 
    Como las claves son largas y efimeras son muy dificiles de 

    chequear que el otro tenga el par completo para abrir la ventana



*/

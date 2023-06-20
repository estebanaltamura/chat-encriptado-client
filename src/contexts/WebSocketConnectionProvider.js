import { createContext, useRef, useState, useContext, useEffect } from "react"
import { publicKeysContext } from "./publickKeysProvider";

export const webSocketConnectionContext = createContext(null)

export const WebSocketConnectionContextProvider = ({children})=>{
    const [connectionstatus, setConnectionStatus] = useState("offline")
    const { publicKeys, setPublicKeys } = useContext(publicKeysContext) 
    const socketRef = useRef(null);    
    const publicKeyRef = useRef()

    useEffect(()=>{
        publicKeyRef.current = publicKeys
    },[publicKeys])
    

    const handleOpen = () => {
        console.log("connected")        
        setConnectionStatus("online");
    };
    

    const handleMessage = (event) => { 
        const message = event.data; 
        const pardedMessage = JSON.parse(message)  

        //GESTION RECEPCION DE MENSAJES

        //TODOS reflejando su coentenido por console.log
        console.log("mensaje recibido del servidor: ", pardedMessage)

        //Usuario creado por el servidor
        if(pardedMessage.hasOwnProperty("userCreated")){
            setConnectionStatus("userRegistered")
        }   

        //Solicitud de chat de privado
        if(pardedMessage.hasOwnProperty("requestConnection")){           
            const userNameUser1 = pardedMessage.requestConnection.userName
            const nickNameUser1 = pardedMessage.requestConnection.nickName

            const response = window.confirm(`The user ${nickNameUser1} wants talk to you. Accept the request?`) 

            if(response === true){                
                const confirmedRequest = JSON.stringify({"confirmedRequest": {"user1": userNameUser1, "user2": publicKeyRef.current.from}})
                socketRef.current.send(confirmedRequest)
            }
        } 

        //Mensaje de chat confirmado
        if(pardedMessage.hasOwnProperty("chatConfirmed")){
            const to = pardedMessage.chatConfirmed.to
            setPublicKeys({"from": publicKeyRef.current.from, "to": to})
            setConnectionStatus("chating")
        } 
    };
    
    const handleClose = () => { 
        console.log("closed")
        //Al usar location.href fuerza el refresh lo cual borra todos los estados y contextos
        window.location.href = "/login"        
    };
    
    const handleError = (error) => {
        console.error('Error de conexión:', error);
    };
    
    const connectWebSocket = () => {
        if (!socketRef.current) {
          socketRef.current = new WebSocket('ws://localhost:8080');          
          socketRef.current.addEventListener('open', handleOpen);
          socketRef.current.addEventListener('message', handleMessage);
          socketRef.current.addEventListener('close', handleClose);
          socketRef.current.addEventListener('error', handleError);
          return true
        }
        return false
    };

    const sendWebSocketMessage = (message) => {        
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            console.log("Envio mensaje", message)
            socketRef.current.send(JSON.stringify({"mensaje":message}));
        }
    };
    
    const createUser = (message) => {        
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {            
            socketRef.current.send(JSON.stringify({"createUserData":message}));
        }
    };

    const tryPairing = (publicKeyUser1, publicKeyUser2) => {        
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {    
            socketRef.current.send(JSON.stringify({"tryPairing":{"publicKeyUser1": publicKeyUser1, "publicKeyUser2": publicKeyUser2}}));
        }
    };

    const closeConnection = () => {
        socketRef.current.close()
    }

    const requestCloseConnection = ()=>{
        socketRef.current.send(JSON.stringify({"requestCloseConnection":{"publicKeyUser2": publicKeyRef.current.to}}));        
    }
    
    
    const WebSocketContextValue = {
        connectionstatus,           
        connectWebSocket,
        setConnectionStatus,
        sendWebSocketMessage,
        createUser,
        closeConnection,
        requestCloseConnection,
        tryPairing
    }
    
    return(
        <webSocketConnectionContext.Provider value={WebSocketContextValue}>
            {children}
        </webSocketConnectionContext.Provider>
    )   
}
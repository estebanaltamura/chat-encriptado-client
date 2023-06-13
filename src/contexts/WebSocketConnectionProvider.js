import { createContext, useRef, useState } from "react"


export const webSocketConnectionContext = createContext(null)

export const WebSocketConnectionContextProvider = ({children})=>{

    const socketRef = useRef(null);    
    const [connectionstatus, setConnectionStatus] = useState("offline")
    
    const handleOpen = () => {
        console.log("connected")        
        setConnectionStatus("online");
    };
    
    const handleMessage = (event) => { 
        const message = event.data;        
        console.log("mensaje recibido del servidor: ", message)

        if(message === "userCreated"){
            setConnectionStatus("userRegistered")
        }   

        if(message === "tryPairing"){
            alert("entro mensaje")
        } 
        
        


    };
    
    const handleClose = () => {
        console.log("closed")
        window.location.href = "/login"
        setConnectionStatus("offline");
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
    
    const createUser = (message) => {        
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {            
            socketRef.current.send(JSON.stringify({"createUserData":message}));
        }
    };

    const tryPairing = (publicKey, nickName) => {        
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {    
            console.log("entron")        
            socketRef.current.send(JSON.stringify({"tryPairing":{"publicKey": publicKey, "nickName": nickName}}));
        }
    };



    const sendWebSocketMessage = (message) => {        
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            console.log("Envio mensaje", message)
            socketRef.current.send(JSON.stringify({"mensaje":message}));
        }
    };

    const closeConnection = () => {
        socketRef.current.close()
    }
     
    const WebSocketContextValue = {
        connectionstatus,           
        connectWebSocket,
        sendWebSocketMessage,
        createUser,
        closeConnection,
        tryPairing
    }
    
    return(
        <webSocketConnectionContext.Provider value={WebSocketContextValue}>
            {children}
        </webSocketConnectionContext.Provider>

    )        
    
}
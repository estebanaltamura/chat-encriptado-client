import { createContext, useRef, useState } from "react"

export const webSocketConnectionContext = createContext(null)

export const WebSocketConnectionContextProvider = ({children})=>{

    const socketRef = useRef(null);
    const [isConnected, setIsConnected] = useState(false);
    const [isUserRegistered, setIsUserRegistered] = useState(false);


    const handleOpen = () => {
        console.log("connected")        
        setIsConnected(true);
    };
    
    const handleMessage = (event) => { 
        const message = event.data;        
        console.log("mensaje recibido del servidor: ", message)

        if(message === "userCreated"){
            setIsUserRegistered(true)
        }
    };
    
    const handleClose = () => {
        console.log("closed")
        setIsConnected(false);
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

    const sendWebSocketMessage = (message) => {        
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            console.log("Envio mensaje", message)
            socketRef.current.send(JSON.stringify({"mensaje":message}));
        }
    };

 


    
    const WebSocketContextValue = {
        isConnected,        
        isUserRegistered,
        connectWebSocket,
        sendWebSocketMessage,
        createUser
    }
    

    return(
        <webSocketConnectionContext.Provider value={WebSocketContextValue}>
            {children}
        </webSocketConnectionContext.Provider>

    )        
    
}
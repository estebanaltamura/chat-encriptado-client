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
        const pardedMessage = JSON.parse(message)  

        console.log("mensaje recibido del servidor: ", pardedMessage)

        if(pardedMessage.hasOwnProperty("userCreated")){
            setConnectionStatus("userRegistered")
        }   


        if(pardedMessage.hasOwnProperty("requestConnection")){
            console.log("ho")
            const a = confirm("entro mensaje") 
        } 

        //user1 pide a user2, funcion try con user 1 y user2
        //el servidor envia a user2 confirm con JSON mensaje, user1, user2, si dice si, envia al servidor respuesta afirmativa, user1, user2. 
        //El servidor envia a user1 y user2 JSON con el user del otro para completar el TO del provider y TO del servidor y sean redirigidos automaticamente al chat        / 
        
        
        //cuando uno manda un mensaje al servidor es un JSON, mensaje, TO y si el otro existe y su to es user 1 envia, sino servidor envia notificacion de user2 no esta coenctado y cierre del chat
        //si el otro se desconecta el servidor busca si algun usuario tenia ese usuario en su TO. si es asi manda mensaje envia notificacion de user2 no esta coenctado y cierre del chat

        // if(pardedMessage.hasOwnProperty("requestMessage")){
        //     alert("entro mensaje")
        // } 
        
        //aca manejar la notificacion de conexion creada
        


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


    //PRINCIPIOS
    //cada front tiene que:1 intentar conectar con un par (bloquea) o 2 recibir una peticion 3 recibir la notificacion deconexion creada 4 ir a chating
    
    const tryPairing = (publicKeyUser1, publicKeyUser2) => {        
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {    
            socketRef.current.send(JSON.stringify({"tryPairing":{"publicKeyUser1": publicKeyUser1, "publicKeyUser2": publicKeyUser2}}));
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
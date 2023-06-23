import { createContext, useRef, useState, useContext, useEffect } from "react"
import { publicKeysContext } from "./publickKeysProvider";
import { chatHistoryContext } from "./ChatHistoryProvider";


export const webSocketConnectionContext = createContext(null)

export const WebSocketConnectionContextProvider = ({children})=>{
    const [ connectionstatus, setConnectionStatus ] = useState("offline")
    const [ requesterData, setRequesterData ] = useState({"publicKey": null, "nickName": null})
    const [ requestError, setRequestError ] = useState(null)      
    const { publicKeys, setPublicKeys } = useContext(publicKeysContext) 
    const { chatHistory, setChatHistory} = useContext(chatHistoryContext)
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
            const publicKeyRequester = pardedMessage.requestConnection.userName
            const nickNameRequester = pardedMessage.requestConnection.nickName

            setRequesterData({"publicKey": publicKeyRequester, "nickName": nickNameRequester})
            setConnectionStatus("requestReceived")             
        } 

        //Mensaje de chat confirmado
        if(pardedMessage.hasOwnProperty("chatConfirmed")){
            const to = pardedMessage.chatConfirmed.to
            setPublicKeys({"from": publicKeyRef.current.from, "to": to})
            setConnectionStatus("chating")
        } 

        //Mensaje de error
        if(pardedMessage.hasOwnProperty("error")){
            
            if(pardedMessage.error === "errorUserDoesntExistOrReject"){
                setRequestError({"title": "Error finding user", "message": "User doesn't exist or rejected your request", "CTA": "Click OK to continue"})
            }
            else if(pardedMessage.error === "errorUserIsTheSame"){
                setRequestError({"title": "User searched  is the same as you", "message": "Enter a valid public key different to your public key", "CTA": "Click OK to continue"})
            }
            else setRequestError({"title": "Error unspecified unhandled", "message": "An unexpected error has happened", "CTA": "Click OK to continue"})

            setConnectionStatus("requestError")            
        } 

        //cierre
        if(pardedMessage.hasOwnProperty("closing")){            
            if(pardedMessage.closing === "otherUserClosed"){                
                setConnectionStatus("otherUserClosed")
            }                        
        } 

        //Recepcion de mensajes
        if(pardedMessage.hasOwnProperty("sentMessaje")){
            const message = pardedMessage.sentMessaje.message
            setChatHistory((chatHistory)=>[...chatHistory, {"type": "messageReceived", "message": message}])
            
        } 



        
    };
    
    const handleClose = async (e) => {         
        console.log("closed")
        //Al usar location.href fuerza el refresh lo cual borra todos los estados y contextos
        console.log(socketRef.current.readyState)
        const timeOut = setTimeout(()=>{
            window.location.href = "/login"
            clearTimeout(timeOut) 
        },4000)         
    };
    
    const handleError = async (error) => {   
        setConnectionStatus("serverError")                     
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
            socketRef.current.send(JSON.stringify(message));
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
        requestError,
        setConnectionStatus,
        sendWebSocketMessage,
        createUser,
        closeConnection,
        requestCloseConnection,
        tryPairing,
        requesterData
    }
    
    return(
        <webSocketConnectionContext.Provider value={WebSocketContextValue}>
            {children}
        </webSocketConnectionContext.Provider>
    )   
}
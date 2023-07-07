import { createContext, useRef, useState, useContext, useEffect } from "react"
import { publicKeysContext } from "./publickKeysProvider";
import { chatHistoryContext } from "./ChatHistoryProvider";
import { PopUpContext } from "./PopUpContextProvider";


export const webSocketConnectionContext = createContext(null)

export const WebSocketConnectionContextProvider = ({children})=>{
    const [ connectionstatus, setConnectionStatus ] = useState("offline")
    
    const [ solicitorUserData, setSolicitorUserData ] = useState(null)
    const [ requiredUserData, setRequiredUserData ] = useState(null)    
    const [ requestError, setRequestError ] = useState(null)      
    const { publicKeys, setPublicKeys } = useContext(publicKeysContext) 
    const { chatHistory, setChatHistory} = useContext(chatHistoryContext)
    const socketRef = useRef(null);  
    const publicKeyRef = useRef()
    const connectionStatusRef = useRef()
   

    useEffect(()=>{
        connectionStatusRef.current = connectionstatus
    },[connectionstatus])
    
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
            const publicKeySolicitorUserData = pardedMessage.requestConnection.userName
            const nickNameSolicitorUserData = pardedMessage.requestConnection.nickName            
            setSolicitorUserData({"publicKey": publicKeySolicitorUserData, "nickName": nickNameSolicitorUserData})
            setConnectionStatus("requestReceived")             
        } 
        
        //Mensaje de chat confirmado
        if(pardedMessage.hasOwnProperty("chatConfirmed")){
            setSolicitorUserData(null)  
            setRequiredUserData(null) 
            const to = pardedMessage.chatConfirmed.to
            const toNickName = pardedMessage.chatConfirmed.toNickName
            setPublicKeys({"from": publicKeyRef.current.from, "to": to, "toNickName": toNickName})
            setConnectionStatus("chating")
            
        } 

        //Mensaje de error
        if(pardedMessage.hasOwnProperty("error")){            
            setSolicitorUserData(null)  
            setRequiredUserData(null)
            
            if(pardedMessage.error === "errorUserDoesntExistOrReject"){
                setRequestError({"title": "Error finding user", "message": "User doesn't exist or rejected your request", "CTA": "Click OK to continue"})
            }
            else if(pardedMessage.error === "errorUserIsTheSame"){
                setRequestError({"title": "User searched  is the same as you", "message": "Enter a valid public key different to your public key", "CTA": "Click OK to continue"})
            }            
            else if(pardedMessage.error === "requesterIsOffline"){
                setRequestError({"title": "Requester is disconnected", "message": "Enter a valid public key of an online user or wait for a request", "CTA": "Click OK to continue"})
            }  
            else if(pardedMessage.error === "canceledRequest" && connectionStatusRef.current === "requestReceived"){
                setRequestError({"title": "Requester cancel the request", "message": "Enter a valid public key of an online user or wait for a request", "CTA": "Click OK to continue"})
            }             
                                   
        } 

        //cierre
        if(pardedMessage.hasOwnProperty("closing")){            
            if(pardedMessage.closing === "otherUserHasClosed"){                
                setConnectionStatus("otherUserHasClosed")
            }                        
        } 

        //Recepcion de mensajes
        if(pardedMessage.hasOwnProperty("sentMessaje")){
            const message = pardedMessage.sentMessaje.message
            console.log(message)
            const now = new Date()
            const minutes = now.getMinutes() <= 10 ? "0" + String(now.getMinutes()) : String(now.getMinutes())           
            setChatHistory((chatHistory)=>[{"type": "messageReceived", "message": message, "time": `${String(now.getHours())}:${minutes}`}, ...chatHistory])            
        }        
    }; 
    
    const handleClose = async (e) => {  
                   
        console.log("closed")        
        
        if(connectionStatusRef.current === "theUserHasClosed"){
            window.location.href = "/home"            
        }
        else setConnectionStatus("serverError")
        
        console.log(socketRef.current.readyState)
        
        
        socketRef.current = undefined
    }; 
    
    const handleError = async (error) => {                         
        //setConnectionStatus("serverError")
        console.error('Error de conexión:', error);        
    };
    
    const connectWebSocket = () => {
        if (!socketRef.current) {
          socketRef.current = new WebSocket('ws://localhost:4000');          
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
            setRequiredUserData({"publicKey": publicKeyUser2})
        }
    };

    const closeConnection = () => {        
        socketRef.current.close()
    }
    
   

    
    
    
    const WebSocketContextValue = {
        connectionstatus,           
        connectWebSocket,
        requestError,
        setRequestError,
        setConnectionStatus,
        sendWebSocketMessage,
        createUser,
        closeConnection,        
        tryPairing,
        solicitorUserData,
        requiredUserData,
        setSolicitorUserData, 
        setRequiredUserData
    }
    
    return(
        <webSocketConnectionContext.Provider value={WebSocketContextValue}>
            {children}
        </webSocketConnectionContext.Provider>
    )   
}

/*
Login:
    Clickear iniciar sesion sin ingresar apodo:
        -PopUp correcto (OK)
        -Accion al clickear en OK (OK)
        -Accion time out (OK)

    Clickear iniciar iniciar pero no se logra conexion con el server:
        -PopUp correcto (OK)
        -Accion al clickear en OK (OK)
        -Accion time out (OK)

FindingPair:
    Clickear iniciar chat sin ingresar apodo:
        -PopUp correcto (OK)
        -Accion al clickear en OK (OK)
        -Accion time out (OK)

    PopUp inactividad:
        -Solo aparezca en findingPair y no en ningun otro estado de connectionstatus derivado de findingPair
        -PopUp correcto (OK)
        -Accion al clickear en OK (OK)
        -Accion time out (OK)


    SOLICITANTE:

    Enviar solicitud a un usuario existente 
        -PopUp correcto (OK)
        -Accion al clickear en CANCEL (OK)
        -Accion time out, analizar el nuevo popUp disparado en OK y en TIMEOUT (OK)
    
    Enviar solicitud a un usuario inexistente 
        -PopUp correcto (OK)
        -Accion al clickear en CANCEL (OK)
        -Accion time out analizar el nuevo popUp disparado en OK y en TIMEOUT (OK)

    Enviar solicitud a un usuario existente pero que se desconecto en el proceso 
        -PopUp correcto (OK)
        -Accion al clickear en CANCEL (OK)
        -Accion time out analizar el nuevo popUp disparado en OK y en TIMEOUT (OK)

    Enviar solicitud a un usuario existente que la rechaza 
        -PopUp correcto (OK) 
        -Accion al clickear en CANCEL (OK)
        -Accion time out analizar el nuevo popUp disparado en OK y en TIMEOUT (OK)

    Enviar solicitud a un usuario existente que la acepta
        -Redireccion a chatRoom (OK)


    SOLICITADO:

    Solicitud cancelada por el solicitante 
        -PopUp correcto (OK)
        -Accion al clickear en OK (OK)
        -Accion time out analizar el nuevo popUp disparado en OK y en TIMEOUT (OK)

    Solicitud cancelada por que timeOut de la solicitud del lado del solicitante 
        -PopUp correcto (OK)
        -Accion al clickear en OK (OK)
        -Accion time out analizar el nuevo popUp disparado en OK y en TIMEOUT (OK)    

    Solicitud de un usuario que se desconecto luego de enviarla
        -PopUp correcto (OK)
        -Accion al clickear en ACCEPT analizar el nuevo popUp disparado en OK y en TIMEOUT (OK)
        -Accion al clickear en REJECT Devolver a findingPair (OK)
        -Accion time out Devolver a findingPair (OK)


    Solicitud no cancelada y con la otra parte conectada
        -PopUp correcto (OK)
        -Accion al clickear en ACCEPT redireccionar a chatRoom (OK)
        -Accion al clickear en REJECT Devolver a findingPair (OK)
        -Accion time out Devolver a findingPair (OK) // analizar si no queda cargado el timeout y se ejecuta ya en chat room
    

    Servidor se desconecta:
        (en findingPair, enviando solicitud, recibiendo solicitud, cualquier error)
        -PopUp correcto
        -Accion al clickear en OK
        -Accion time out    

    estado publickey parece que esta desactualizado cuando lee nickname para chat
    acortar con ... el nombre si es largo para el chat
    mensaje encontrar estilo aceptable para una linea y para muchas
    chequear server como ultima cosa

    VERIFICAR EN TODOS LOS ESTADOS POSIBLES QUERER ENTRAR POR BARRA DE DIRECCIONES A ALGUNA DE LAS TRES PAGINAS POSIBLES
*/
import { createContext, useRef, useState, useContext, useEffect } from "react"
import { usersDataContext } from "./UsersDataProvider";
import { useInternalMessagesWebSocketHandler } from "../hooks/useInternalMessagesWebSocketHandler";

export const webSocketConnectionContext = createContext({})

export const WebSocketConnectionContextProvider = ({children})=>{
  const [ connectionStatus, setConnectionStatus ] = useState("offline")    
  const [ requestError, setRequestError ] = useState(null) 

  const { handleMessage } = useInternalMessagesWebSocketHandler()
 
  const { usersData, setUsersData } = useContext(usersDataContext) 
      
  const usersDataRef = useRef()
  const connectionStatusRef = useRef() 

  const socketRef = useRef(null);     
  
  useEffect(()=>{
    connectionStatusRef.current = connectionStatus    
  },[connectionStatus])
    

  useEffect(()=>{
    usersDataRef.current = usersData
  },[usersData])

  const connectWebSocket = () => {
    if (!socketRef.current) {
      socketRef.current = new WebSocket('ws://localhost:4000');          
      socketRef.current.addEventListener('open', handleOpen);
      socketRef.current.addEventListener('message', (e)=> handleMessage(e, setConnectionStatus, connectionStatusRef.current, setRequestError));
      socketRef.current.addEventListener('close', handleClose);
      socketRef.current.addEventListener('error', handleError);
      return true
    }
      return false
  };

  const handleOpen = () => {
    console.log("connected")        
    setConnectionStatus("online");
  };   
    
  const handleClose = () => {                     
    console.log("closed")    
        
    if(connectionStatusRef.current === "theUserHasClosed"){
      window.location.href = "/home"            
    }
    else setConnectionStatus("serverError")        
        
    socketRef.current = undefined
  }; 
    
  const handleError = (error) => {  
    console.error('Error de conexión:', error);        
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
        setUsersData({...usersDataRef.current, "toPublicKey": publicKeyUser2})
    }
  };

  const closeConnection = () => {        
    socketRef.current.close()
  }   
    
  const WebSocketContextValue = {
    connectWebSocket,    
    connectionStatus, 
    setConnectionStatus,
    sendWebSocketMessage,
    createUser,
    closeConnection,        
    tryPairing,
    setRequestError,
    requestError
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

    Revisar para cada combinacion connectionStatus, usersData y parpadeos. tambien esta requestError, showPopUp y lastActivity

    Pedirle a Lu El logo con naranja y azul
*/
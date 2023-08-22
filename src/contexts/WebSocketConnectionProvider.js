import { createContext, useRef, useState, useContext, useEffect } from "react"
import { usersDataContext } from "./UsersDataProvider";
import { useInternalMessagesWebSocketHandler } from "../hooks/useInternalMessagesWebSocketHandler";

export const webSocketConnectionContext = createContext({})

export const WebSocketConnectionContextProvider = ({children})=>{
  const [ connectionStatus, setConnectionStatus ] = useState("offline")    
  const socketRef = useRef(null);     


  const [ requestError, setRequestError ] = useState(null) 

  const { handleMessage } = useInternalMessagesWebSocketHandler()
 
  const { usersData, setUsersData } = useContext(usersDataContext) 
      
  const usersDataRef = useRef()
  const connectionStatusRef = useRef() 
  
  useEffect(()=>{
    connectionStatusRef.current = connectionStatus    
  },[connectionStatus])
    

  useEffect(()=>{
    usersDataRef.current = usersData
  },[usersData])

  const connectWebSocket = () => {
    if (!socketRef.current) {
      socketRef.current = new WebSocket('wss://www.encrypted-chat-backend.online:4000/');          
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
    else{      
      setUsersData({"fromPublicKey":null, "fromNickName": null, "toPublicKey": null, "toNickName": null})      
      setConnectionStatus("serverError")
    }         
        
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
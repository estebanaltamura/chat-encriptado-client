import { useContext } from "react"
import { usersDataContext } from "../contexts/UsersDataProvider"
import { webSocketConnectionContext } from "../contexts/WebSocketConnectionProvider"
import { chatHistoryContext } from "../contexts/ChatHistoryProvider"

export const useChat = ()=>{

	const { setConnectionStatus, closeConnection, sendWebSocketMessage} = useContext(webSocketConnectionContext)
	const { usersData } = useContext(usersDataContext)
	const { setChatHistory, chatHistory} = useContext(chatHistoryContext)
		
	const closeConnectionHandler = ()=>{   		
		setConnectionStatus("theUserHasClosed")             
		closeConnection()
	}

	const sendMessageHandler = (e)=>{
		e.preventDefault() 
		e.target.focus()       
		let message = e.target.elements.chatInput.value      

		if(message.length > 0){
			message = message[0].toUpperCase() + message.slice(1)   		    
			const now = new Date()
            const minutes = now.getMinutes() <= 10 ? "0" + String(now.getMinutes()) : String(now.getMinutes())     
			const messageToSend = {"sendMessage": {"from": usersData.fromPublicKey, "to": usersData.toPublicKey, "message": message}}
			setChatHistory([{type: "messageSent", "message": message, "time": `${String(now.getHours())}:${minutes}`}, ...chatHistory])        
			sendWebSocketMessage(messageToSend)
			e.target.elements.chatInput.value = ""
		}        
	}

  return({
		closeConnectionHandler,
		sendMessageHandler
  })
}
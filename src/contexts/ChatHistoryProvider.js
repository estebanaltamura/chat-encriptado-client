import { createContext, useState } from "react"

export const chatHistoryContext = createContext()

export const ChatHistoryProvider = ({ children })=>{

    const  [chatHistory, setChatHistory] = useState([])

    return(
        <chatHistoryContext.Provider value={{ chatHistory, setChatHistory }}>
            {children}
        </chatHistoryContext.Provider>
    )    
} 
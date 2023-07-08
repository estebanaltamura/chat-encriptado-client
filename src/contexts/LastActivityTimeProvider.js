import { createContext, useEffect, useState, useContext } from "react"
import { webSocketConnectionContext } from "./WebSocketConnectionProvider"

export const lastActivityTimeContext = createContext()

export const LastActivityTimeProvider = ({children})=>{

    const { connectionsStatus, setConnectionStatus } = useContext(webSocketConnectionContext)
    const [secondsFromLastActivity, setSecondsFromLastActivity] = useState(0)
    
    useEffect(()=>{
        if(connectionsStatus === "userRegistered" && secondsFromLastActivity >= 30) setConnectionStatus("disconnectionByInactivity")     
        if(connectionsStatus === "chating" && secondsFromLastActivity >= 30) setConnectionStatus("disconnectionByInactivity")
        
    }, [secondsFromLastActivity])

    useEffect(()=>{
        setSecondsFromLastActivity(0)        
    }, [connectionsStatus])
    
    useEffect(()=>{
        
        const clickActivityHandler = ()=>{
            setSecondsFromLastActivity(0)
        }

        const contextmenuActivityHandler = ()=>{
            setSecondsFromLastActivity(0)
        }

        const mousemoveActivityHandler = (e)=>{  
            // no anda          
            setSecondsFromLastActivity(0)
        }
        
        const scrollActivityHandler = ()=>{
            setSecondsFromLastActivity(0)
        }
        
        const keydownActivityHandler = ()=>{
            setSecondsFromLastActivity(0)
        }

        const interval = setInterval(()=>{            
            setSecondsFromLastActivity((secondsFromLastActivity)=>secondsFromLastActivity + 1)
        },1000)

        window.addEventListener("click", clickActivityHandler)
        window.addEventListener("contextmenu", contextmenuActivityHandler)
        window.addEventListener("mousemove", mousemoveActivityHandler)        
        window.addEventListener("scroll", scrollActivityHandler)
        window.addEventListener("keydown", keydownActivityHandler)

        
    return ()=>{
        clearInterval(interval)
        window.removeEventListener("click", clickActivityHandler)
        window.removeEventListener("contextmenu", contextmenuActivityHandler)
        window.removeEventListener("mousemove", mousemoveActivityHandler)
        window.removeEventListener("scroll", scrollActivityHandler)
        window.removeEventListener("keydown", keydownActivityHandler)       
    } 
        
    },[])

    return(
        <lastActivityTimeContext.Provider value={{ secondsFromLastActivity, setSecondsFromLastActivity }}>
            {children}
        </lastActivityTimeContext.Provider>
    )
}



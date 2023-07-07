import "./Message.css"

export const Message = ({message, type, time})=>{ 
    
    return(
        <div className="messageRow">
            <div className={type === "messageReceived" ? "messageReceivedContainer" : "messageSentContainer"}>   
                <div className="messageContainer">
                    <p className="message">{message}</p>
                    <span className="timeMessage">{time}</span>      
                </div>             
            </div>
        </div>
    )
}
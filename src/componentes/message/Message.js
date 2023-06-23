import "./Message.css"

export const Message = ({message, type})=>{
    return(
        <div className="messageRow">

        
            <div className={type === "messageReceived" ? "messageReceivedContainer" : "messageSentContainer"}>

                <p className="massage">{message}</p>
                
            </div>

        </div>
    )
}
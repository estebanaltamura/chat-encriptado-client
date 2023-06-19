import "./PopUp.css"

export const PopUp = ({title, message, type, handledAccept, handledReject})=>{
    return(
        <div className="popUpContainer">
            <div className="popUpElement">
                <div className="popUpGrid">
                    <div className="logoPopUp">IMAGEN LOGO</div>
                    <h2 className="tituloPopUp">{title}</h2>
                    <p className="messagePopUp">{message}</p>                    
                        {
                            type === "oneButton" ?
                                    <button className="button2PopUp buttonPopUp" onClick={handledAccept}>Accept</button>
                                                 :
                                <>
                                    <button className="button1PopUp buttonPopUp" onClick={handledReject}>Reject</button>     
                                    <button className="button2PopUp buttonPopUp" onClick={handledAccept}>Accept</button>                
                                </>

                        }                
                </div>
            </div>
        </div>
    )
}
import { createContext, useState } from "react";

export const publicKeyContext = createContext(null)

export const PublicKeyProvider = ({children})=>{

    const [ publicKey, setPublicKey ] = useState(null)

    return(
        <publicKeyContext.Provider value={{ publicKey, setPublicKey }}>
            {children}
        </publicKeyContext.Provider>
    )
}
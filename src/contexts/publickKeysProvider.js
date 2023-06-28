import { createContext, useState } from "react";

export const publicKeysContext = createContext({})

export const PublicKeysProvider = ({children})=>{

    const [ publicKeys, setPublicKeys ] = useState({"from":null, "to": null, "toNickName": null})
    const [ requestSent, setRequestSent ] = useState(null) // publickKey del otro


    return(
        <publicKeysContext.Provider value={{ publicKeys, setPublicKeys }}>
            {children}
        </publicKeysContext.Provider>
    )
}
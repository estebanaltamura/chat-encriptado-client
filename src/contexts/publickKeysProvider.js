import { createContext, useState } from "react";

export const publicKeysContext = createContext({})

export const PublicKeysProvider = ({children})=>{

    const [ publicKeys, setPublicKeys ] = useState({"from":null, "to": null, "toNickName": null})    


    return(
        <publicKeysContext.Provider value={{ publicKeys, setPublicKeys }}>
            {children}
        </publicKeysContext.Provider>
    )
}
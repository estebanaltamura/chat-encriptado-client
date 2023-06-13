import { createContext, useState } from "react";

export const pairDataContext = createContext(null)

export const PairDataProvider = ({children})=>{

    const [pairData, setPairData] = useState({"from": null, "to": null})

    return(
        <pairDataContext.Provider value={{ pairData, setPairData }}>
            {children}
        </pairDataContext.Provider>
    )
}
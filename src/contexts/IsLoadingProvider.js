import { useState, createContext } from "react";

export const isLoadingContext = createContext(null)

export const IsLoadingContextProvider = ({children})=>{
    const [isLoading, setIsLoading] = useState(false)

    return(
        <isLoadingContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </isLoadingContext.Provider>
    )
}
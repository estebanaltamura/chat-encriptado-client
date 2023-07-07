import { createContext, useState } from "react";

export const usersDataContext = createContext({})

export const UsersDataProvider = ({children})=>{

    const [ usersData, setUsersData ] = useState({"fromPublicKey":null, "fromNickName": null, "toPublicKey": null, "toNickName": null})    


    return(
        <usersDataContext.Provider value={{ usersData, setUsersData }}>
            {children}
        </usersDataContext.Provider>
    )
}
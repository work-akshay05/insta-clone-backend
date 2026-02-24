/**
 * @description basically this is to create context
 */

import { createContext, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const [code, setCode] = useState(null);

    return(
        <AuthContext.Provider value={{user,setUser,loading,setLoading,code,setCode}}>
            {children}
        </AuthContext.Provider>
    )
}

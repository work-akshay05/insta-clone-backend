import { useContext } from "react";
import { AuthContext } from "../authProvider";
import { login,register } from "../service/auth.api";

export const useAuth=()=>{
    const context=useContext(AuthContext);

    const {user,setUser,loading,setLoading,code,setCode}=context;

    const loginHandler=async (userName,password)=>{
        setLoading(true);
        try{
            const response=await login(userName,password);
            setUser(response);
            setCode(200);
            setLoading(false);
            return { success: true, data: response };
        }catch(err){
            setLoading(false);
            setCode(err.status || 401);
            return { success: false, code: err.status };
        }
    }
    const registerHandler=async (userName,email,password)=>{
        setLoading(true);
        const response=await register(userName,email,password);
        setUser(response);
        setLoading(false);
    }
    return {user,loading,loginHandler,registerHandler,code}
}
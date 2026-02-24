import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../src/featurs/auth/hooks/useAuth'
const VerifyUser = ({children}) => {
    const {code}=useAuth();
    const [isValid,setIsvalid]=useState(null);
    useEffect(() => {
        const gettingtoken=async()=>{
            try{
                const response=await axios.get('http://localhost:3000/api/user/gettoken',{
                    withCredentials:true
                });
                setIsvalid(response.data.message);
            }catch{
                setIsvalid(false);
            }
        }
        gettingtoken();
    },[])
    if(isValid===null){
        return <p>checking that you are authorized to see the feed or not.....</p>
    }
    console.log(isValid);
    if(code===200 || isValid){
            return (
            <>{children}</>
        )
    }
    else{
        return <h1>unauthorized</h1>
    }
  
}

export default VerifyUser;
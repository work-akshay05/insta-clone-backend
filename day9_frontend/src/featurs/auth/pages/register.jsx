import React from 'react'
import { Link } from 'react-router-dom'
import '../style/form.scss'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const register = () => {
    const {loading,registerHandler}=useAuth();
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email,setEmail]=useState("");

    const onsubmitHandler=async (e)=>{
        e.preventDefault();
        await registerHandler(userName,email,password);
        setUserName("");
        setPassword("");
        setEmail("");
        navigate('/feed');
    }
    if(loading){
        return (
            <main>
                <h1>loading...</h1>
            </main>
        )
    }
  return (
    <main>
        <div className='form-container'>
            <div className='text'>register</div>
            <form onSubmit={onsubmitHandler} >
                <input 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder='email'
                />
                <input 
                    onChange={(e)=>setUserName(e.target.value)}
                    value={userName}
                    type="text"
                    placeholder='username'
                />
                <input
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    type="text" 
                    placeholder='password' 
                />
                <button className='button login'>register</button>
            </form>
            <p>already have an account? <Link className='link' to={"/login"}>login</Link></p>
        </div>
        
    </main>
    
  )
}

export default register
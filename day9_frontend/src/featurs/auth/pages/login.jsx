import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/form.scss'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
    const {loading,code,loginHandler}=useAuth()
    const navigate = useNavigate()
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const onsubmitHandler=async (e)=>{
        e.preventDefault();
        const result = await loginHandler(userName,password);
        setUserName("");
        setPassword("");
        if(result.success) {
            navigate('/feed');
        }
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
            <div className='text'>Login</div>
            <form onSubmit={onsubmitHandler} >
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
                <button className='button login'>login</button>
            </form>
            <p>create new account? <Link className='link' to={"/register"}>register</Link></p>
            {code!=200 && code!=null && <p className='error'>Login failed</p>}
        </div>
        
    </main>
    
  )
}

export default Login
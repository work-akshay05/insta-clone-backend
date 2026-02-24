import axios from 'axios'

const api=axios.create({
    baseURL:"http://localhost:3000/api/user",
    withCredentials:true
})

export async function login(userName,password) {
    const response=await api.post('/login',{
        userName,
        password
    })
    if(response.status===200){
        return response.data;
    }
    else throw new Error(response.data.message);
}
export async function register(userName,email,password) {
    const response=await api.post('/register',{
        userName,email,password
    })
    return response.data;
}
import {createBrowserRouter} from 'react-router-dom'
import Login from './featurs/auth/pages/login'
import Register from './featurs/auth/pages/register'
import Feed from './featurs/post/pages/feed'
import VerifyUser from './verify.user'

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/feed",
        element:(<VerifyUser>
            <Feed/>
        </VerifyUser>),
    }
])
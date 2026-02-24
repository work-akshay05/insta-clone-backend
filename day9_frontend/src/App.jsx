import { RouterProvider } from "react-router-dom"
import { AuthProvider } from "./featurs/auth/authProvider"
import { router } from "./app.route"
import './featurs/shared/global.scss'


const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App
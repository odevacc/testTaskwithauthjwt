import LoginSupp from "./components/pages/auth/LoginSupp"
import Registration from "./components/pages/auth/Registration"
import Home from "./components/pages/Home/Home"


export const publicRoutes = [
    {
        path: '/registration',
        Component: Registration
    },
    {
        path: '/login',
        Component: LoginSupp
    }
    
]

export const authRoutes = [
    {
        path: '/home',
        Component: Home
    }
]
import LoginSupp from "./components/pages/auth/LoginSupp"
import RegistrationSupp from "./components/pages/auth/RegistrationSupp"
import Home from "./components/pages/Home/Home"
import Profile from "./components/pages/Profile/Profile"


export const publicRoutes = [
    {
        path: '/registration',
        Component: RegistrationSupp
    },
    {
        path: '/login',
        Component: LoginSupp
    },
    {
        path: '/home',
        Component: Home
    }
    
]

export const authRoutes = [
    {
        path: '/profile',
        Component: Profile
    }
]
import { $auth, $public } from "./api";


export const userAPI = {
    registration(username, email, password) {
        return $public.post('/users', { user: { username, email, password } })
    },

    login(email, password) {
        return $public.post('/users/login', { user: { email, password } })
    }
}
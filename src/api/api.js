import axios from "axios";

const $public = axios.create({
    baseURL: 'https://conduit.productionready.io/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

const $auth = axios.create({
    baseURL: 'https://conduit.productionready.io/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

const authInterceptor = config => {
    config.headers.authoriztion = `Bearer ${localStorage.getItem('token')}`
    return config
}

$auth.interceptors.request.use(authInterceptor)

export {
    $public,
    $auth
}


// export const jwt = (email, password) => {
//     $public.post('/users/login', {users: {email, password}}).then(response => {console.log(response)})
// }




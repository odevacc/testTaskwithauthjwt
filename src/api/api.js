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
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})

export {
    $public,
    $auth
}





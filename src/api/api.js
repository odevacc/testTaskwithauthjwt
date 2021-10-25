import axios from "axios";

const url = 'https://api.realworld.io/api'

const $public = axios.create({
    baseURL: url
})

const $auth = (token) => axios.create({
    baseURL: url,
    headers: {
        'Authorization': `Token ${token}`
    }
})

export {
    $public,
    $auth
}





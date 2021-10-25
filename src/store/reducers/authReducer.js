import { SET_USER, UPDATE_USER } from "../consts";
import { userAPI } from "../../api/userAPI";
import { stopSubmit } from "redux-form";

const initialState = {
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state, ...action.payload
            }
        }
        case UPDATE_USER: {
            return {
                ...state, ...action.payload
            }
        }
        default:
            return state
    }
}

export default authReducer;

const setUser = (email, username, bio, image, isAuth) => ({ type: SET_USER, payload: { email, username, bio, image, isAuth } })

export const getUser = () => async (dispatch) => {
    if (localStorage.getItem('token')) {
        let token = localStorage.getItem('token')
        await userAPI.getUser(token).then(response => {
            let { email, username, bio, image } = response.data.user
            dispatch(setUser(email, username, bio, image, true))
            
        })
        .catch(e => {
            console.warn("Error", e.message)
            localStorage.removeItem('token')
            setUser(null, null, null, null, false)
        })
    }
}

export const registration = (username, email, password) => async (dispatch) => {
    return await userAPI.registration(username, email, password).then(response => {
        localStorage.setItem('token', response.data.user.token)
        let { email, username, bio, image } = response.data.user
        dispatch(setUser(email, username, bio, image, true))
    }).catch(e => {
        dispatch(stopSubmit('registration', { _error: e.message || 'errorD' }))

    })
}

export const login = (email, password) => async (dispatch) => {
    return await userAPI.login(email, password).then(response => {
        localStorage.setItem('token', response.data.user.token)
        let { email, username, bio, image } = response.data.user
        dispatch(setUser(email, username, bio, image, true))
    }).catch(e => {
        dispatch(stopSubmit('login', { _error: e.message || "Email или пароль указан не правильно" }))

    })
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('token')
    dispatch(setUser(null, null, null, null, false))
}

export const updateUser = (email, username, bio, image, password) => async (dispatch) => {
    let token = localStorage.getItem('token')
    return await userAPI.updateUser(email, username, bio, image, password, token).then(response => {
        let { email, username, bio, image } = response.data.user
        if (localStorage.getItem('token') !== response.data.user.token) {
            localStorage.removeItem('token')
            localStorage.setItem('token', response.data.user.token)
        }

        dispatch(setUser(email, username, bio, image, true))
    }).catch(e =>
        dispatch(stopSubmit('editProfile', { _error: e.message || `Что то пошло не так` })))
}



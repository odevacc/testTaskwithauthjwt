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
    let token = localStorage.getItem('token')
    if (token) {
        return await userAPI.getUser().then(response => {
            let { email, username, bio, image } = response.data.user
            dispatch(setUser(email, username, bio, image, true))
        })

    } else {
        return dispatch(setUser(null, null, null, null, false))
    }
}

export const registration = (username, email, password) => async (dispatch) => {
    return await userAPI.registration(username, email, password).then(response => {
        localStorage.setItem('token', response.data.user.token)
        let { email, username, bio, image } = response.data.user
        dispatch(setUser(email, username, bio, image, true))
    }).catch(e => {
        dispatch(stopSubmit('registration', { _error: "Пользователь с таким Ником или Email уже зарегестрирован" }))

    })
}

export const login = (email, password) => async (dispatch) => {
    return await userAPI.login(email, password).then(response => {
        localStorage.setItem('token', response.data.user.token)
        let { email, username, bio, image } = response.data.user
        dispatch(setUser(email, username, bio, image, true))
    }).catch(e => {
        dispatch(stopSubmit('login', { _error: "Email или пароль указан не правильно" }))

    })
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('token')
    dispatch(setUser(null, null, null, null, false))
}

export const updateUser = (email, username, bio, image, password) => async (dispatch) => {
    return await userAPI.updateUser(email, username, bio, image, password).then(response => {
        let token = localStorage.getItem('token')
        let { email, username, bio, image } = response.data.user
        if (token !== response.data.user.token) {
            localStorage.setItem('token', response.data.user.token)
        }
        
        dispatch(setUser(email, username, bio, image, true))
    }).catch(e => 
        dispatch(stopSubmit('editProfile', {_error: `Что то пошло не так`})))
}



import { SET_USER } from "../consts";
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
        default:
            return state
    }
}

export default authReducer;

const setUser = (email, username, bio, image, isAuth) => ({ type: SET_USER, payload: { email, username, bio, image, isAuth } })

export const getUser = () => async (dispatch) => {
    let token = localStorage.getItem('token')
    if(token){
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
        let {email, username, bio, image} = response.data.user
        dispatch(setUser(email, username, bio, image, true))
    }).catch(e => {
        dispatch(stopSubmit('registration', {_error: "Такой пользователь уже существует"}))
})
}

export const login = (email, password) => async (dispatch) => {
    return await userAPI.login(email, password).then(response => {
        localStorage.setItem('token', response.data.user.token)
        dispatch(getUser())
    }).catch(e => {
        dispatch(stopSubmit('login', {_error: "Email или пароль указан не правильно" }))
    
    })
}

export const logout = () =>  (dispatch) => {
    localStorage.removeItem('token')
    dispatch(setUser(null, null, null, null, false))
}



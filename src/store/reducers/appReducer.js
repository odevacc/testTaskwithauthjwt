import { INITIALIZE_SUCCESS } from "../consts";
import { getUser } from "./authReducer";

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS: {
            return { ...state, initialized: true }
        }
        default: {
            return state
        }
    }
}

export const initializedSuccess = () => ({ type: INITIALIZE_SUCCESS })

export const initializeApp = () => async (dispatch) => {
    await dispatch(getUser())
    dispatch(initializedSuccess())
}

export default appReducer;
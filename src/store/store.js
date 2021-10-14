import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk'
import authReducer from './reducers/authReducer'

let reducers = combineReducers({
    form: formReducer,
    auth: authReducer
}) 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

window.__store = store

export default store
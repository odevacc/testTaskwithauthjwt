import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk'
import appReducer from './reducers/appReducer'
import authReducer from './reducers/authReducer'

let reducers = combineReducers({
    form: formReducer,
    auth: authReducer,
    app: appReducer
}) 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

window.__store = store

export default store
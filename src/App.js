import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import AppRouter from './components/AppRouter.jsx';
import { connect } from 'react-redux';
import { getUser } from './store/reducers/authReducer.js';

function App({isAuth, username, getUser}) {
  
  return (
    <BrowserRouter>
        <AppRouter getUser={getUser} isAuth={isAuth} username={username} />
    </BrowserRouter>
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth : state.auth.isAuth,
    username : state.auth.username
  }
}

export default connect(mapStateToProps, {getUser})(App);

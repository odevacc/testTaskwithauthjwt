import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import AppRouter from './components/AppRouter.jsx';
import { connect } from 'react-redux';
import { initializeApp } from './store/reducers/appReducer'
import { getUser } from './store/reducers/authReducer.js';
import { useEffect } from 'react';
import Preloader from './utils/preloader/Preloader.jsx';

function App({ isAuth, username, initializeApp, initialized, getUser }) {
  useEffect(() => {
    initializeApp()
  })

  if (!initialized) {
    return <Preloader />
  }

  return (
    <BrowserRouter>
      <AppRouter getUser={getUser} isAuth={isAuth} username={username} />
    </BrowserRouter>
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    username: state.auth.username,
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { initializeApp, getUser })(App);

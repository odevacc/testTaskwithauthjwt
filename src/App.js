import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import AppRouter from './components/AppRouter.jsx';

function App() {
  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  )
}

export default App;

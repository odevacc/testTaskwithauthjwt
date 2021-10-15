import { Button, Col, Image, Row } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../../../store/reducers/authReducer'
import s from './Header.module.css'

const HeaderComponent = ({isAuth, username, logout}) => {
    return (
        <div>
        <Row>
        <Col span={16}>
        <Image width={100}/>
        </Col>
        <Col span={8}>
        <NavLink className={s.btn} to='/home'>Домой</NavLink>
        {isAuth ?
        <span>
        <NavLink className={s.username} to='/profile'>{username}</NavLink>
        <Button className={s.btn} onClick={logout}>Logout</Button></span> :
        <span><NavLink className={s.btn} to='/login'>Войти</NavLink>
        <NavLink className={s.btn} to='registration'>Регистрация</NavLink></span>}
        </Col>
        </Row>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth : state.auth.isAuth,
        username : state.auth.username
    }
}

export default connect(mapStateToProps, {logout})(HeaderComponent) 

import React from 'react'
import { reduxForm } from 'redux-form'
import Login from './Login'
import { validate } from '../../../utils/validate'
import { connect } from 'react-redux'
import { login } from '../../../store/reducers/authReducer'
import { Redirect } from 'react-router'

const LoginForm = reduxForm({ form: 'login', validate })(Login)

const LoginSupp = ({ login, isAuth }) => {
    const onSubmit = (values) => {
        const { email, password } = values
        login(email, password)

    }
    if (isAuth) {
        return <Redirect to='/profile' />
    }
    return (
        <div>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { login })(LoginSupp)



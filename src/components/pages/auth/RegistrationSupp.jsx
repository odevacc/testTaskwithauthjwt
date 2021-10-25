import React from 'react'
import { reduxForm } from 'redux-form'
import Registration from './Registration'
import { validate } from '../../../utils/validate'
import { connect } from 'react-redux'
import { registration } from '../../../store/reducers/authReducer'
import { Redirect } from 'react-router'

const RegistrationForm = reduxForm({ form: 'registration', validate })(Registration)

const RegistrationSupp = ({ registration, isAuth }) => {
    const onSubmit = (values) => {
        const { username, email, password } = values
        registration(username, email, password)

    }
    if (isAuth) {
        return <Redirect to='/profile' />
    }
    return (
        <div>
            <RegistrationForm onSubmit={onSubmit} isAuth={isAuth} />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, { registration })(RegistrationSupp)



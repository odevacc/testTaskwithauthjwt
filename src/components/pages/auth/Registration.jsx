import React from 'react'
import { Form, Button, Col, Row, Typography } from 'antd';
import { Field } from 'redux-form';
import { NewInput } from '../../CustomFormFields';
import s from './Login.module.css'
import { NavLink } from 'react-router-dom';

const { Title } = Typography

const Registration = ({ handleSubmit, error }) => {

    return (
        <div className={s.auth}>
            <Title level={2}>Регистрация</Title>
            <span>Нет аккаунта? </span>
            <NavLink to='/login'>Войти!</NavLink>
            <Row>

                <Col span={8} offset={8}>
                    <Form

                        autoComplete="off"
                    >
                        <Col className={s.error} span={8} offset={8}>{error}</Col>
                        <Field
                            className={s.input}
                            component={NewInput}
                            name="username"
                            placeholder="User name"
                            hasFeedback
                        />

                        <Field
                            className={s.input}
                            component={NewInput}
                            name="email"
                            placeholder="Email"
                            hasFeedback
                        />

                        <Field
                            className={s.input}
                            component={NewInput}
                            name="password"
                            type="password"
                            placeholder="Password"
                            hasFeedback
                        />


                        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                            Зарегестрироваться
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Registration;

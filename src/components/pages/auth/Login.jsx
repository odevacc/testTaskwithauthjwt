import React from 'react'
import { Form, Button, Col, Row, Typography } from 'antd';
import { Field } from 'redux-form';
import { NewInput } from '../../CustomFormFields';
import s from './Login.module.css'
import { NavLink } from 'react-router-dom';

const { Title } = Typography

const Login = ({ error, handleSubmit }) => {
    return (
        <div className={s.auth}>
            <Col
                span={8} offset={8}
            >
                <div>
                    <Title level={3}>Авторизация</Title>
                    <span>Нет аккаунта? </span><NavLink to='/registration'>Зарегестрироваться!</NavLink>
                </div>
            </Col>
            <Row>
                <Col span={8} offset={8}>
                    <Form
                    >
                        <Col className={s.error}
                        >{error}</Col>
                        <Field className={s.input}
                            component={NewInput}
                            name="email"
                            placeholder="Email"
                            hasFeedback
                        />

                        <Field className={s.input}
                            component={NewInput}
                            name="password"
                            type="password"
                            placeholder="Password"
                            hasFeedback
                        />

                        <div className={s.auth}>
                            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                                Войти
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Login;

import React from 'react'
import { Form, Button, Col, Row} from 'antd';
import { Field } from 'redux-form';
import { NewInput } from '../../CustomFormFields';
import s from './Login.module.css'


const Login = ({error, handleSubmit}) => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Form
                    labelCol={{ span: 8, }}
                    wrapperCol={{ span: 8, }}
                >
                    <Col className={s.error} span={12} offset={8}>{error}</Col>
                    <Field
                        component={NewInput}
                        label="E-mail"
                        name="email"
                        placeholder="Email"
                        hasFeedback
                    />

                    <Field
                        component={NewInput}
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        hasFeedback
                    />

                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16, }}
                    >
                        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default Login;

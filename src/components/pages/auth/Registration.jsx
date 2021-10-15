import React from 'react'
import { Form, Button, Col, Row } from 'antd';
import { Field } from 'redux-form';
import { NewInput } from '../../CustomFormFields';


const Registration = ({handleSubmit}) => {

    return (
        <Row>
            <Col span={12} offset={6}>
                <Form
                    name="basic"
                    labelCol={{ span: 8, }}
                    wrapperCol={{ span: 8, }}
                    initialValues={{ remember: true, }}
                    autoComplete="off"
                >
                    <Field
                        component={NewInput}
                        label="User name"
                        name="username"
                        placeholder="User name"
                        hasFeedback
                    />

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
                            Зарегестрироваться
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}

export default Registration;

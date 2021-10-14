import React from 'react'
import { Form, Input, Button, Checkbox, Col, Row} from 'antd';


const Registration = () => {
    const onFinish = (values) => {
        // console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };
    return (
            <Row>
                <Col span={12} offset={6}>
                <Form
                    name="basic"
                    labelCol={{ span: 8, }}
                    wrapperCol={{ span: 8, }}
                    initialValues={{ remember: true, }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!', },]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!', },]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!',},]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{offset: 8, span: 16,}}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                </Col>
            </Row>
    )
}

export default Registration;
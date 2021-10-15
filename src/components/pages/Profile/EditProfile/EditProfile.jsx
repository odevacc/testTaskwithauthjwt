import { Form, Button, Row, Col } from 'antd'
import React from 'react'
import { useEffect } from 'react'
import { Field } from 'redux-form'
import { NewInput, NewTextArea } from '../../../CustomFormFields'

const EditProfile = ({ email, username, bio, image, initialize, handleSubmit, error }) => {
    useEffect(() => {
        initialize({
            bio: bio,
            newemail: email,
            newusername: username,
            image: image

        })
    }, [])

    return (
        <Row>
            <Col span={8} offset={8}>
                {error}
                <Form
                    name='editProfile'
                    autoComplete="off"
                >
                    <Field
                        name='image'
                        component={NewInput}
                        placeholder='Вставьте URL ссылку на ваше фото'
                    />
                    <Field
                        name='newusername'
                        component={NewInput}
                        placeholder='Имя пользователя'
                    />
                    <Field
                        name='bio'
                        component={NewTextArea}
                        placeholder='Немного о себе'
                    />
                    <Field
                        name='newemail'
                        component={NewInput}
                        placeholder='Email'
                    />
                    <Field
                        name='newpassword'
                        component={NewInput}
                        placeholder='Новый пароль'
                    />
                    <Button type='primary' htmlType="submit" onClick={handleSubmit}>Обновить профиль</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default EditProfile

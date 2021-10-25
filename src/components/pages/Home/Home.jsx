import React from 'react'
import { Typography, Col, Row } from 'antd'

const { Title } = Typography;

const Home = () => {

    return (
        <Row>
            <Col span={8}></Col>
            <Col span={8}>
                <Title>Here should be home page</Title>
            </Col>
        </Row>
    )
}

export default Home

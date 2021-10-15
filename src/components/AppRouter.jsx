import { Layout } from 'antd'
import React from 'react'
import { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import s from './AppRouter.module.css'
import HeaderComponent from './pages/Header/Header'

const { Header, Footer, Content } = Layout;

const AppRouter = ({isAuth, getUser}) => {
    useEffect(() => {
        getUser()
    })

    return (
        <Layout>
            <Header>
                <HeaderComponent />
            </Header>
            <Content className={s.wrapper}>
                <div className={s.switchdiv}>
                    <Switch>
                        {isAuth && authRoutes.map(({ path, Component }) => 
                            <Route key={path} path={path} component={Component} exact/>
                        )}
                        {publicRoutes.map(({ path, Component }) =>
                            <Route key={path} path={path} component={Component} exact />
                        )}
                        <Redirect to='/login' />
                    </Switch>
                </div>
            </Content>
            <Footer></Footer>
        </Layout>
    )
}

export default AppRouter;

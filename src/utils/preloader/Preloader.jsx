import { Image, Layout } from 'antd'
import React from 'react'
import Ghost from '../../common/img/Ghost.gif'
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <Layout className={s.layout}>
        <div className={s.wrapper}>
        <Image src={Ghost}/>
        </div>
        </Layout>
    )
}

export default Preloader;

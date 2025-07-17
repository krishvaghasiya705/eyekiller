import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../common/header'
import Footer from '../common/footer'
import Letstalk from '../common/letstalk'

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Letstalk />
            <Outlet />
            <Footer />
        </>
    )
}
import React from 'react'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

function Layout({children}) {
    return (
        <>
            <Head>
                <title>Todo List</title>
            </Head>
            <div>
                <Nav/>
                {children}
                <Footer/>
            </div>
        </>
    )
}

export default Layout

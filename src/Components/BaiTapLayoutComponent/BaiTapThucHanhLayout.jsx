import React, { Component } from 'react'
import Feature from './Feature'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Header/>
                <Feature/>
                <Footer/>
            </div>
        )
    }
}


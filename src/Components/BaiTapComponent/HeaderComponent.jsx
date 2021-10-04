import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <div id="menu-bar" className="fas fa-bars" />
                    <a href="#" className="logo">nike</a>
                    <nav className="navbar">
                        <a href="#home">home</a>
                        <a href="#products">products</a>
                        <a href="#featured">featured</a>
                        <a href="#review">review</a>
                    </nav>
                    <div className="icons">
                        <a href="#" className="fas fa-heart" />
                        <a href="#" className="fas fa-shopping-cart" />
                        <a href="#" className="fas fa-user" />
                    </div>
                </header>

            </div>
        )
    }
}

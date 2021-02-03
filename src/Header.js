import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <>
                <nav>
                    <div className="container d-flex justify-content-center">
                        <img className="logo-fit" src={require('./assets/img/logo-native.png').default} />
                    </div>
                </nav>
            </>
        )
    }
}

export default Header

import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <>
                <div className="rpi-progress-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}>
                    <div className="rpi-progress-bar__position" aria-hidden="true" />
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="index-2.html"><h1 className="text-logo">TILEUP</h1></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="burger-menu">
                                <span className="top-bar" />
                                <span className="middle-bar" />
                                <span className="bottom-bar" />
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#socialStatistics">Social Statistics</a></li>
                                <li className="nav-item"><a className="nav-link" href="#instagramAudience">Instagram Audience</a></li>
                                <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Header

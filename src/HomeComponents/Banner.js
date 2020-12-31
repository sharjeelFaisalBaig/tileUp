import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false
        }
        this.playVideo = e => {
            e.target.classList.add('d-none');
            this.setState({
                play: true
            })
        }
    }
    render() {
        return (
            <>
                <ReactPlayer className="bg-adjustBanner" url={require("../assets/video/bannerBackground2.mp4").default} playing={true} loop={true} controls={false} muted={true} />
                <div id="home" className="main-banner">
                    <div className="container-fluid p-compress">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="main-banner-content">
                                    <h1>WELCOME TO TILE UP</h1>
                                    <p>Let your walls rock with TILEUP Making your memories more beautifull  <br /><span className="text-beauty"><i><b>BEAUTIFYING_MEMORIES</b></i></span><span className="fw-inc">(SINCE 2007)</span></p>
                                    <a href="javascript:;" class="default-btn m-3" data-toggle="modal" data-target="#contactModal">Lets Rock!</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="main-banner-image">
                                    <ReactPlayer url={require("../assets/video/bannervideo.mp4").default} playing={this.state.play} className="bannerIntro" loop={true} controls={false} muted={true} />
                                    <div class="container-btn-play">
                                        <button class="btn-play" onClick={this.playVideo}>
                                            <span class="play"></span>
                                            <span class="small-box"></span>
                                        </button>
                                    </div>
                                    <div className="banner-shape" data-speed="0.02" data-revert="true">
                                        <img src={require("../assets/img/line-bg1.png").default} className="wow fadeInLeft" alt="image" />
                                        <img src={require("../assets/img/line-bg2.png").default} className="wow fadeInRight" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Banner

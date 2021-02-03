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
                <div id="home" className={`main-banner ${this.props.showMe} d-mobile-none`}>
                    {/* <ReactPlayer width="100" height="auto" url={require("../assets/video/bannervideo.mp4").default} playing={true} className="bannerOver" loop={true} controls={false} muted={true} /> */}
                    <div className="container-fluid p-compress">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="main-banner-content">
                                    <h1 style={{ color: '#049ce4', paddingLeft: '7px' }}>TileUp Your Walls <br /> With Memories that stick!</h1>
                                    <h3 style={{ fontSize: '23px', paddingLeft: '10px', marginTop: '-2px', marginBottom: '-3px' }}>4 Tiles are PKR 3500</h3><p>PKR 600 for each additional with free shipping nationwide</p><a href="javascript:;" className="default-btn br-curved m-3" data-toggle="modal" data-target="#contactModal">Lets Tileup!</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                                <div className="p-adjust">
                                    <ReactPlayer width="100" height="auto" url={require("../assets/video/bannervideo.mp4").default} playing={this.state.play} className="bannerIntro" loop={true} controls={false} muted={true} />
                                    <div class="container-btn-play">
                                        <button class="btn-play" onClick={this.playVideo}>
                                            <span class="play"></span>
                                            <span class="small-box"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="home" className={`main-banner ${this.props.showMe} d-desktop-none`}>
                    {/* <ReactPlayer width="100" height="auto" url={require("../assets/video/bannervideo.mp4").default} playing={true} className="bannerOver" loop={true} controls={false} muted={true} /> */}
                    <div className="container-fluid p-compress mt-5 pt-5">
                        <div className="row align-items-center" style={{ marginTop: '-38px' }}>
                            <div className="col-lg-6 col-md-12">
                                <div className="main-banner-content">
                                    <h3 style={{ fontWeight: '200', color: '#049ce4' }}>TileUp Your Walls <br /> With Memories that stick!</h3>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                                <div className="p-adjust">
                                    <ReactPlayer width="100" height="auto" url={require("../assets/video/bannervideo.mp4").default} playing={this.state.play} className="bannerIntro" loop={true} controls={false} muted={true} />
                                    <div class="container-btn-play">
                                        <button class="btn-play" onClick={this.playVideo}>
                                            <span class="play"></span>
                                            <span class="small-box"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="main-banner-content">
                                    <h3 className="bold" style={{ color: '#049ce4' }}>4 Tiles are PKR 3500</h3>
                                    <p style={{ marginTop: '-18px', marginBottom: '20px', color: '#000' }}>PKR 600 for each additional with free shipping nationwide</p>
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

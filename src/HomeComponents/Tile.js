import React, { Component } from 'react'

export default class Tile extends Component {
    render() {
        return (
            <>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3 p-3">
                    <div className="single-collaborations-box p-0 appBox pb-3">
                        <img src={this.props.tileImg} className="tileImg" alt={this.props.tileImgAlt} />
                        <h3><span className="odometer" data-count={275}>{this.props.tileText}</span></h3>
                        <p>{this.props.tileSubtitle}</p>
                    </div>
                </div>
            </>
        )
    }
}

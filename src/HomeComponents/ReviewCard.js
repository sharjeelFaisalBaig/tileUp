import React, { Component } from 'react'

export default class ReviewCard extends Component {
    render() {
        return (
            <>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3 p-3">
                    <div className="single-collaborations-box p-0 appBox pb-3">
                        <img src={this.props.ReviewCardImg} className="tileImg border-bottom" alt={this.props.ReviewCardImgAlt} />
                        <h3 style={{ marginTop: '5px' }}><span className="odometer" style={{ fontSize: '19px' }} data-count={275}>{this.props.ReviewCardText}</span></h3>
                        <p>{this.props.ReviewCardSubtitle}</p>
                        {this.props.ReviewText}
                    </div>
                </div>
            </>
        )
    }
}

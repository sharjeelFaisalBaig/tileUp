import React, { Component } from 'react'

export default class Plan extends Component {
    render() {
        return (
            <div className={`${this.props.planSize} sidebar-plan m-auto`}>
                <img src={this.props.planImg} />
                {/* <div className="planText">
                    <h6>{this.props.planName}</h6>
                </div> */}
            </div>
        )
    }
}
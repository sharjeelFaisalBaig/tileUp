import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class NavStep extends Component {
    constructor(props) {
        super(props);
        this.handleHome = () => {
            this.props.history.push(`/home`)
        }
        this.handleEdit = () => {
            this.props.history.push(`/editImage`)
        }
        this.backHandle = () => {
            this.props.history.goBack();
        }
    }
    render() {
        return (
            <div className="col-md-12 nav-inner">
                <div className="col-md-3 text-left  d-mobile-none"><i class="fas fa-arrow-left nav-arrows" onClick={this.backHandle}></i></div>
                <div className="col-md-6 text-center logo-inner">
                    <span onClick={this.handleHome}>
                        TILEUP
                            </span>
                </div>
                <div className="col-md-3 text-right social-icons  d-mobile-none">
                    <button className="default-btn text-center btn-block br-curved letsGo btn-bg-red" onClick={this.handleEdit}>Try Tile-up Editor</button>
                </div>
            </div>
        )
    }
}

export default withRouter(NavStep);

import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class NavStepts2 extends Component {
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
                <div className="col-md-3 text-left"><i class="fas fa-arrow-left nav-arrows" onClick={this.backHandle}></i></div>
                <div className="col-md-6 text-center logo-inner">
                    <span onClick={this.handleHome}>
                        TILEUP
                            </span>
                </div>
                <div className="col-md-3 text-right social-icons">
                </div>
            </div>
        )
    }
}

export default withRouter(NavStepts2);

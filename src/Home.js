import React, { Component } from 'react';   
import swal from 'sweetalert';
import { withRouter } from "react-router-dom";
import Banner from "./HomeComponents/Banner";
import { Link } from "react-router-dom";
import Tiles from './HomeComponents/Tiles';
import Header from './Header';
import { getLocalStorage } from './API';
const boolSession = getLocalStorage();
export class Home extends Component {
    constructor(props) {
        super(props);
        this.doSession = () => {
            if (boolSession.existance) {
                swal({
                    title: `Hello ${boolSession.nameOfUser}`,
                    text: `Welcome Again to Tile Up Continue Submitting Images`,
                    button: "Continue",
                }).then((value) => {
                    if (value) {
                        this.props.history.push(`step3/${boolSession.nameOfUser}/${boolSession.emailOfUser}`)
                    }
                });
            }

        }
        this.doSession();
    }
    componentDidMount() {
        document.querySelector('body').classList.remove('ov-hidden')
    }
    render() {
        return (
            <>
                <div className="overLap d-none-md"></div>
                <div className="container-fluid letsgo">
                    <div className="row">
                        <div className="col-md-4 m-auto d-flex justify-content-center">
                            {!boolSession.existance ?
                                <Link to="/step1" className="default-btn m-3 text-center btn-block br-curved letsGo">Lets's Tile-Up</Link>
                                :
                                <Link to={`/step3/${boolSession.nameOfUser}/${boolSession.emailOfUser}`} className="default-btn m-3 text-center btn-block br-curved letsGo">Submit Photos</Link>
                            }
                        </div>
                    </div>
                </div>
                <div className="scrollingContainer">
                    <div className="scrollEffect">
                        <Header />
                        <Banner />
                    </div>
                    <div className="scrollEffect">
                        <Tiles />
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Home);

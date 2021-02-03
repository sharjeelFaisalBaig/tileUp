import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import { withRouter } from 'react-router-dom';
import { getLocalStorage } from './API';
const boolSession = getLocalStorage();
class CheckoutSelect extends Component {
    constructor(props) {
        super(props);
        this.choose = e => {
            window.location.href = `/checkout/${e}`;
        }
    }
    componentDidMount() {

        if (!boolSession.existance) {
            this.props.history.push(`/step1`)
        }

    }
    render() {
        return (
            <>
                <section className="h-fit-bg">
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
                    <div className="col-md-12 bg-upDirect"></div>
                    <div className="col-md-12 bg-upDirect-revert"></div>
                    <div className="container-fluid h-fit">
                        <div className={`justify-content-center ${window.screen.width <= 767 ? '' : 'd-flex'} col-md-10 m-auto`}>
                            <Zoom top>
                                <div className={`${window.screen.width <= 767 ? 'col-9 m-auto' : 'col-md-4'} askCard`} onClick={() => this.choose('bank-transfer')}>
                                    <div className="col-md-12 bg-cut checkout">
                                        <img src={require('./assets/img/elements/backTrans.png').default} />
                                    </div>
                                    <div className="col-md-12 fore-cut">
                                        Direct Bank Transfer
                                    </div>
                                </div>
                            </Zoom>
                            <Zoom top>
                                <div className={`${window.screen.width <= 767 ? 'col-9 m-auto' : 'col-md-4'} askCard`} onClick={() => this.choose('easypaisa')}>
                                    <div className="col-md-12 bg-cut checkout">
                                        <img src={require('./assets/img/elements/easyfull.png').default} />
                                    </div>
                                    <div className="col-md-12 fore-cut">
                                        Easy Paisa
                                    </div>
                                </div>
                            </Zoom>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default withRouter(CheckoutSelect);

import React, { Component } from 'react';
import NavStepts2 from "./HomeComponents/NavStepts2";
import Zoom from 'react-reveal/Zoom';
import { withRouter } from 'react-router-dom';
class Step1 extends Component {
    constructor(props) {
        super(props);

        this.choose = e => {
            this.props.history.push(`/step2/${e}`);
        }
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <>
                <section className="h-fit-bg">
                    <NavStepts2 />
                    <div className="col-md-12 bg-upDirect"></div>
                    <div className="col-md-12 bg-upDirect-revert"></div>
                    <div className="container-fluid h-fit">
                        <div className="row justify-content-center">
                            <Zoom top>
                                <div className={`${window.screen.width <= 767 ? 'col-9' : 'col-md-3'} askCard`} onClick={() => this.choose('gift')}>
                                    <div className={`col-md-12 bg-cut`}>
                                        <img src={require('./assets/img/elements/gift.png').default} />
                                    </div>
                                    <div className="col-md-12 fore-cut">
                                        For someone else
                                    </div>
                                </div>
                            </Zoom>
                            <Zoom top>
                                <div className={`${window.screen.width <= 767 ? 'col-9' : 'col-md-3'} askCard`} onClick={() => this.choose('forself')}>
                                    <div className={`col-md-12 bg-cut`}>
                                        <img src={require('./assets/img/elements/me.png').default} />
                                    </div>
                                    <div className="col-md-12 fore-cut">
                                        For myself
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

export default withRouter(Step1);

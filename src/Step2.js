import React, { Component } from 'react';
import NavStepts2 from "./HomeComponents/NavStepts2";
import { withRouter } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: null,
            email: null,
            showEmail: false,
            showName: true,
            displayName: null,
            displayEmail: 'd-none'
        }
        this.checkValidate = () => {
            if (this.props.match.params.product) {
                if (!(this.props.match.params.product === 'forself' || this.props.match.params.product === 'gift')) {
                    this.props.history.push(`/step1`)
                }
            } else {
                this.props.history.push('/step1');
            }
        }
        this.checkValidate();
        this.handleStepFrom = e => {
            e.preventDefault();
            this.setState({
                showName: false,
                displayName: 'd-none',
                displayEmail: null,
                showEmail: true
            })
        }
        this.handleEmailForm = e => {
            this.props.history.push(`/step3/${this.state.fullName}/${this.state.email}`)
        }
        this.handleInput = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    render() {
        return (
            <>
                {this.props.match.params.product ?
                    <section className="h-fit-bg">
                        <NavStepts2 />
                        <div className="col-md-12 bg-upDirect"></div>
                        <div className="col-md-12 bg-upDirect-revert"></div>
                        <div className="container-fluid h-fit">
                            <div className="col-md-4 m-auto">
                                <Zoom top when={this.state.showName}>
                                    <div className={`subscribe-form m-auto applyBox-shadow ${this.state.displayName}`}>
                                        <form onSubmit={this.handleStepFrom}>
                                            <h5 className="w-100 text-center margin-port">Let Us Know You?</h5>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter Your Full Name" name="fullName" required onChange={this.handleInput} />
                                            </div>
                                            <button type="submit">Proceed</button>
                                        </form>
                                    </div>
                                </Zoom>
                                <Zoom left opposite when={this.state.showEmail}>
                                    <div className={`subscribe-form m-auto applyBox-shadow ${this.state.displayEmail}`}>
                                        <form onSubmit={this.handleEmailForm}>
                                            <h5 className="w-100 text-center margin-port">Hello {this.state.fullName}!</h5>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Enter Email & Pick Photos" name="email" required onChange={this.handleInput} />
                                            </div>
                                            <button type="submit">Choose Photos</button>
                                        </form>
                                    </div>
                                </Zoom>
                            </div>
                        </div>
                    </section>
                    :
                    this.props.history.push(`/step1`)
                }
            </>
        )
    }
}

export default withRouter(Step2)

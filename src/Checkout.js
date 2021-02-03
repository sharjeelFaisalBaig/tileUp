import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { API, getLocalStorage, getCheckoutFiles } from "./API";
import swal from 'sweetalert';
import axios from 'axios';
const boolSess = getLocalStorage();
const finalFiles = getCheckoutFiles();
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameOfUser: boolSess.nameOfUser,
            emailOfUser: boolSess.emailOfUser,
            filesOfUser: finalFiles.filesOfUserFinal,
            phonenumberOfUser: null,
            stateOfUser: null,
            paymentMethod: this.props.match.params.payment === 'bank-transfer' ? 'Bank Transfer' : 'Easy Paisa',
            userCode: boolSess.codeOfUser,
            userMessege: null,
            datePlaced: new Date(),
            townOfUser: null,
            add1OfUser: null,
        }
        this.checkValidity = () => {
            if (!boolSess.existance) {
                this.props.history.push('/payment-method');
            } else if (!(this.props.match.params.payment === 'bank-transfer' || this.props.match.params.payment === 'easypaisa')) {
                this.props.history.push('/payment-method');
            }
        }
        this.handleFormInput = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        this.handleForm = (e) => {
            e.preventDefault();
            if (this.state.userMessege === null || this.state.userMessege === '') {
                this.setState({
                    userMessege: 'No Message'
                })
            }
            let finalPush = this.state;
            console.log(this.state);
            axios.post(API.EMAIL_SYSTEM, finalPush).then(resp => {
                if (resp.data.status === 'success') {
                    swal({
                        title: "Order Placed Successfully",
                        text: `Please Copy your order code: ${this.state.userCode}`,
                        icon: "success",
                        button: "Done"
                    })
                        .then((value) => {
                            if (value) {
                                setTimeout(() => {
                                    localStorage.clear();
                                    window.location.href = '/home'
                                }, 3000)
                            }
                        });
                } else {
                    swal("Cannot Place Order", `Cannot Place Order due some problem in system Try Later`, "error");
                    console.log('FAILED OF API EMAIL =>', resp);
                }
            }).catch(err => {
                swal("Cannot Place Order", `Cannot Place Order due some problem in system Try Later`, "error");
                console.log('FAILED OF API EMAIL =>', err);
            })
        }
        this.checkValidity();
        this.backHandle = () => {
            this.props.history.goBack();
        }
        this.handleHome = () => {
            this.props.history.push(`/home`)
        }
    }
    componentDidMount() {
        document.querySelector('body').classList.remove('ov-hidden')
    }
    render() {
        return (
            <>
                <section className="h-fit-bg h-vh bg-white">
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
                    <div className="container-fluid mt-3">
                        <div className="row">
                            {
                                this.props.match.params.payment === 'easypaisa' ?
                                    <div className="col-md-12 checkoutHeading">
                                        <h4><span className="text-theme"><img src={require('./assets/img/elements/easyfull.png').default} /></span> Easy Paisa Checkout</h4>
                                    </div>
                                    :
                                    <div className="col-md-12 checkoutHeading">
                                        <h4><span className="text-theme"><img src={require('./assets/img/elements/backTrans.png').default} /></span> Direct Bank Transfer</h4>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="container-fluid h-fit h-auto d-revert p-adjust-check">
                        <div className="row">
                            <div className="col-md-5 d-flex">
                                <img src={require('./assets/img/elements/checkout.svg').default} className="checkoutTrust" alt="" />
                            </div>
                            <div className={`col-md-7 ${window.screen.width <= 767 ? '' : 'pr-5'}`}>
                                <h3 className="text-greet-checkout">Secure Checkout</h3>
                                <p className="text-greet-checkout-p">Hey, {boolSess.nameOfUser} Simply Checkout by filling out details</p>
                                <form onSubmit={this.handleForm}>
                                    <div className="row form-group mt-4">
                                        <div className="col-md-6">
                                            <label>Name <span class="fa-1x text-danger">*</span></label>
                                            <input name="nameOfUser" type="name" value={boolSess.nameOfUser} className="form-control" placeholder="Enter your Phone Number Here" readOnly />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Email <span class="fa-1x text-danger">*</span></label>
                                            <input name="emailOfUser" type="email" value={boolSess.emailOfUser} className="form-control" placeholder="Enter your Phone Number Here" readOnly />
                                        </div>
                                    </div>
                                    <div className="row mt-1">
                                        <div className="col-md-6">
                                            <label>Phone Number <span class="fa-1x text-danger">*</span></label>
                                            <input onChange={this.handleFormInput} name="phonenumberOfUser" type="number" className="form-control" placeholder="Enter your Phone Number Here" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label>State <span class="fa-1x text-danger">*</span></label>
                                            <select onChange={this.handleFormInput} name="stateOfUser" className="form-control">
                                                <option disabled selected value="">Select an option…</option>
                                                <option value="Azad Kashmir">Azad Kashmir</option>
                                                <option value="Balochistan">Balochistan</option>
                                                <option value="FATA">FATA</option>
                                                <option value="Gilgit Baltistan">Gilgit Baltistan</option>
                                                <option value="Islamabad Capital Territory">Islamabad Capital Territory</option>
                                                <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                                                <option value="Punjab">Punjab</option>
                                                <option value="Sindh">Sindh</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label>Town / City <span class="fa-1x text-danger">*</span></label>
                                            <input onChange={this.handleFormInput} type="text" className="form-control" name="townOfUser" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Street Address <span class="fa-1x text-danger">*</span></label>
                                            <input onChange={this.handleFormInput} type="text" className="form-control" name="add1OfUser" required />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-12">
                                            <label>Speacial Instructions</label>
                                            <textarea onChange={this.handleFormInput} name="userMessege" className="form-control" cols="30" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className={`col-md-4 m-auto ${window.screen.width <= 767 ? 'd-flex justify-content-center' : ''}`}>
                                            <button type="submit" className="default-btn m-3 text-center btn-block letsGo">Place Order</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default withRouter(Checkout);
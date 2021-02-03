import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getLocalStorage, setCheckoutData } from "./API";
import swal from 'sweetalert';
let boolSess = getLocalStorage();
class Step4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            selectedImg: null,
            framesDone: []
        }
        let filesToPush = [];
        this.checkValidity = () => {
            if (boolSess.existance) {
                this.setState({
                    images: boolSess.filesOfUser
                })
            } else {
                this.props.history.push('/step1');
            }
        }
        this.setvalfile = (fileSet) => {
            fileSet.map((item) => (
                filesToPush.push({ fileName: item.fileName, filestyle: 'black' })
            ))
        }
        this.handleImgFrame = e => {
            let fileGet = e.target.getAttribute('data-file');
            let fileGetStyle = e.target.value;
            let booleanFind = filesToPush.find(obj => obj.fileName === fileGet);
            if (booleanFind == undefined) {
                filesToPush.push({ fileName: fileGet, filestyle: fileGetStyle });
            } else {
                let inof = filesToPush.indexOf(booleanFind);
                filesToPush[inof] = { fileName: fileGet, filestyle: fileGetStyle };
            }
            if (fileGetStyle === 'black') {
                e.target.parentElement.classList.remove('white')
                e.target.parentElement.classList.add('black')
            } else {
                e.target.parentElement.classList.add('white')
                e.target.parentElement.classList.remove('black')
            }
        }
        this.handleHome = () => {
            this.props.history.push(`/home`)
        }
        this.handleEdit = () => {
            let dataset = {
                status: true,
                name: boolSess.nameOfUser,
                email: boolSess.emailOfUser,
                imgs: filesToPush,
            }
            if (setCheckoutData(dataset)) {
                console.log(dataset);
                this.props.history.push(`/payment-method`)
            } else {
                swal("Internal Error", `Session Error`, "error");
            }
        }
        this.backHandle = () => {
            this.props.history.goBack();
        }
    }
    componentDidMount() {
        this.checkValidity();
        let boolSessRefresh = getLocalStorage();
        this.setState({
            images: boolSessRefresh.filesOfUser
        })
        this.setvalfile(boolSessRefresh.filesOfUser);
    }
    render() {
        return (
            <>
                <section className="h-fit-bg h-vh bg-varient">
                    <div className="container-fluid letsgo d-desktop-none">
                        <div className="row">
                            <div className="col-md-4 m-auto d-flex justify-content-center">
                                <button className="default-btn m-3 text-center btn-block br-curved letsGo" onClick={this.handleEdit}>CheckOut</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 nav-inner">
                        <div className="col-md-3 text-left d-mobile-none"><i class="fas fa-arrow-left nav-arrows" onClick={this.backHandle}></i></div>
                        <div className="col-md-6 text-center logo-inner">
                            <span onClick={this.handleHome}>
                                TILEUP
                            </span>
                        </div>
                        <div className="col-md-3 text-right social-icons d-mobile-none">
                            <button className="default-btn text-center btn-block br-curved letsGo btn-bg-red" onClick={this.handleEdit}>CheckOut</button>
                        </div>
                    </div>
                    <div className="container-fluid h-fit h-auto d-revert">
                        <div className="row">
                            <div className="col-md-10 p-5">
                                <div className="row mt-3">
                                    {
                                        this.state.images.map((item, i) => (
                                            <>
                                                <div className="fetchedImagesPanel col-md-2 ml-2 black">
                                                    <select onChange={this.handleImgFrame} data-file={item.fileName}>
                                                        <option value="black">Square Black Frame</option>
                                                        <option value="white">Square White Frame</option>
                                                    </select>
                                                    <img src={item.fileLink[0]} onClick={this.handleChild} />
                                                </div>
                                                <div className="col-md-1 d-mobile-none"></div>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-2 bg-sidebar pl-0 pr-0">
                                <div className="col-md-12 text-center tileHeading p-0">
                                    <h4>Availble Frames</h4>
                                </div>
                                <div className="col-md-11 m-auto plan-bar" data-frame="white">
                                    <div className="planImg">
                                        <img src={require('./assets/img/elements/plan1.png').default} className="white" alt="" />
                                    </div>
                                    <div className="planHeading">White Frame</div>
                                </div>
                                <div className="col-md-11 m-auto plan-bar" data-frame="black">
                                    <div className="planImg">
                                        <img src={require('./assets/img/elements/plan1.png').default} className="black" alt="" />
                                    </div>
                                    <div className="planHeading">Black Frame</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </>
        )
    }
}
export default withRouter(Step4);
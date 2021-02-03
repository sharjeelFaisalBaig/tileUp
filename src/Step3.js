import React, { Component } from 'react';
import 'tui-image-editor/dist/tui-image-editor.css';
import Plan from "./HomeComponents/Plan";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';
import NavStep from "./HomeComponents/NavStep";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { API, setLocalStorage, getLocalStorage, setImageLocalStorage } from './API';
const boolSession = getLocalStorage();
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
class Step3 extends Component {
    constructor(props) {
        super(props);
        const FILE_UPLOAD_API = API.UPLOAD_IMAGE;
        const FILE_PROCESS_API = API.PROCESS_IMAGE;
        this.state = {
            name: this.props.match.params.name,
            respOfUploads: 'Minimum 4 Photos',
            respOfUploadsCl: 'text-primary',
            email: this.props.match.params.email,
            imagesLoaded: [],
            processCode: this.props.processCode,
        }
        this.checkValidate = () => {
            if (!(this.props.match.params.email || this.props.match.params.name)) {
                this.props.history.push(`/step1`)
            }
        }
        this.checkValidate();
        this.handleFile = e => {
            if (e.target.files.length >= 4) {
                let GettyImages = e.target.files;
                let sentReady = new FormData();
                for (let i = 0; i < GettyImages.length; i++) {
                    if (GettyImages[i].type == 'image/jpeg' || GettyImages[i].type == 'image/png' || GettyImages[i].type == 'image/jpg') {
                        sentReady.append(`attachment${i}`, GettyImages[i]);
                    } else {
                        swal("Image Not Supported", `Image Type Not Supported, Try with "JPG", "JPEG" Or "PNG"`, "error");
                        return false;
                    }
                }
                sentReady.append('name', this.state.name);
                sentReady.append('email', this.state.email);
                swal("Loading ...");
                let alterthis = this;
                axios({
                    method: 'post',
                    url: FILE_PROCESS_API,
                    data: sentReady,
                    headers: { 'Content-Type': 'multipart/form-data' }
                })
                    .then(function (response) {
                        let resp = response.data;
                        console.log(resp);
                        if (resp.status == 'success') {
                            alterthis.setState({
                                processCode: resp.uNDER_SESSION_CODE,
                                imagesLoaded: JSON.parse(resp.fILES),
                                respOfUploads: 'Minimum 4 Photos',
                                respOfUploadsCl: 'text-primary'
                            })
                            setLocalStorage(resp);
                            swal("Images Uploaded!", "Selected Images Loaded  Succesfully!", "success");
                        } else {
                            console.log(resp);
                            swal("Cant Load Images", `${resp.message}`, "error");
                        }
                    })
                    .catch(function (error) {
                        swal("Cant Load Images", `${error}`, "error");
                    });
            } else {
                this.setState({
                    respOfUploads: 'Select at Least 4 Photos',
                    respOfUploadsCl: 'text-danger'
                })
            }
        }
        this.GetFile = () => {
            document.querySelector('.selectPhotos').click();
        }
        this.handleEdit = (e) => {
        }
        this.handleDel = (e) => {
            let deldata = e.target.getAttribute('data-deleteImg');
            let deldataIndex = e.target.getAttribute('data-index');
            console.log(deldataIndex);
            let nwfromtoSubmit = new FormData();
            nwfromtoSubmit.append('imgDelName', deldata);
            axios.post(API.DELETE_IMAGE, nwfromtoSubmit).then(resp => {
                swal("Uploading ...");
                if (resp.data.status == 'success') {
                    let imgReduce = this.state.imagesLoaded;
                    deldataIndex == 0 ?
                        imgReduce.splice(deldataIndex, 1)
                        :
                        imgReduce.splice(deldataIndex, deldataIndex);
                    this.setState({
                        imagesLoaded: imgReduce
                    })
                    setImageLocalStorage(this.state.imagesLoaded)
                    swal("Image removed!");
                } else {
                    swal("Image not deleted!", " Please try to refresh the page ", "error");
                }
            }).catch(err => {
                swal("Can't Delete the image", "try next time!", "error");
                console.log(err);
            })
        }
    }
    componentDidMount() {
        if (boolSession.existance) {
            this.setState({
                imagesLoaded: boolSession.filesOfUser
            })
        }
    }
    render() {
        return (
            <>
                <section className="h-fit-bg h-vh bg-varient">
                    <NavStep />
                    <div className="container-fluid h-fit h-auto d-revert">
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-center align-items-center pick-photos">
                                {!boolSession.existance ?
                                    this.state.imagesLoaded.length > 0 ?
                                        <div className={`col-md-6 m-auto text-center justify-content-center ${window.screen.width <= 767 ? '' : 'd-flex'}`}>
                                            <div className="col-md-5 text-center pickCustoms">
                                                <i className="fa fa-recycle" onClick={this.GetFile}></i>
                                                <h6>Reselect Photos</h6>
                                                <p className={this.state.respOfUploadsCl}>{this.state.respOfUploads}</p>
                                                <input type="file" className="selectPhotos" onChange={this.handleFile} accept="image/png,image/jpg,image/jpeg" multiple />
                                            </div>
                                            <div className={`col-md-1 d-flex justify-content-center align-items-center ${window.screen.width <= 767 ? 'pl-1 pt-3' : 'pl-5'}`}> <h4>OR</h4> </div>
                                            <div className={`col-md-5 d-flex justify-content-center align-items-center ${window.screen.width <= 767 ? 'pl-1 pt-3' : 'pl-5'}`}>
                                                <a href="/step4" className="default-btn text-center btn-block br-curved letsGo btn-bg-red">Submit Photos</a>
                                            </div>
                                        </div>
                                        :
                                        <div className="col-md-3 m-auto text-center justify-content-center d-flex">
                                            <div className="col-md-12 text-center pickCustoms">
                                                <i className="fas fa-plus" onClick={this.GetFile}></i>
                                                <h6>Select Photos</h6>
                                                <p className={this.state.respOfUploadsCl}>{this.state.respOfUploads}</p>
                                                <input type="file" className="selectPhotos" onChange={this.handleFile} accept="image/png,image/jpg,image/jpeg" multiple />
                                            </div>
                                        </div>
                                    :
                                    this.state.imagesLoaded.length > 0 ?
                                        <div className={`col-md-6 m-auto text-center justify-content-center ${window.screen.width <= 767 ? '' : 'd-flex'}`}>
                                            <div className="col-md-5 text-center pickCustoms">
                                                <i className="fa fa-recycle" onClick={this.GetFile}></i>
                                                <h6>Reselect Photos</h6>
                                                <p className={this.state.respOfUploadsCl}>{this.state.respOfUploads}</p>
                                                <input type="file" className="selectPhotos" onChange={this.handleFile} accept="image/png,image/jpg,image/jpeg" multiple />
                                            </div>
                                            <div className={`col-md-1 d-flex justify-content-center align-items-center ${window.screen.width <= 767 ? 'pl-1 pt-3' : 'pl-5'}`}> <h4>OR</h4> </div>
                                            <div className={`col-md-5 d-flex justify-content-center align-items-center ${window.screen.width <= 767 ? 'pl-1 pt-3' : 'pl-5'}`}>
                                                <a href="/step4" className="default-btn text-center btn-block br-curved letsGo btn-bg-red">Submit Photos</a>
                                            </div>
                                        </div>
                                        :
                                        <div className="col-md-3 m-auto text-center justify-content-center d-flex">
                                            <div className="col-md-12 text-center pickCustoms">
                                                <i className="fas fa-plus" onClick={this.GetFile}></i>
                                                <h6>Select Photos</h6>
                                                <p className={this.state.respOfUploadsCl}>{this.state.respOfUploads}</p>
                                                <input type="file" className="selectPhotos" onChange={this.handleFile} accept="image/png,image/jpg,image/jpeg" multiple />
                                            </div>
                                        </div>
                                }

                            </div>
                            <div className="sidebar-plans padjustaftupload">
                                {
                                    !this.state.imagesLoaded.length > 0 ?
                                        <>
                                            <div className="col-md-3">
                                                <h3>Best Tiles <br /> Showcase</h3>
                                            </div>
                                            <div className="col-md-9">
                                                <Swiper
                                                    spaceBetween={10}
                                                    slidesPerView={3}
                                                    loop
                                                    navigation={false}
                                                    pagination={false}
                                                    Autoplay={{
                                                        delay: 1000,
                                                        disableOnInteraction: false
                                                    }}
                                                >
                                                    <SwiperSlide>
                                                        <Plan
                                                            planSize="col-md-9"
                                                            planImg={require('./assets/img/elements/plan1.png').default}
                                                        />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <Plan
                                                            planSize="col-md-9"
                                                            planImg={require('./assets/img/elements/plan1.png').default}
                                                        />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <Plan
                                                            planSize="col-md-9"
                                                            planImg={require('./assets/img/elements/plan1.png').default}
                                                        />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <Plan
                                                            planSize="col-md-9"
                                                            planImg={require('./assets/img/elements/plan1.png').default}
                                                        />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <Plan
                                                            planSize="col-md-9"
                                                            planImg={require('./assets/img/elements/plan1.png').default}
                                                        />
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div className="col-md-12 padjustaftupload">
                                                <Swiper
                                                    spaceBetween={window.screen.width <= 767 ? 9 : 10}
                                                    slidesPerView={window.screen.width <= 767 ? 1 : 4}
                                                    navigation={false}
                                                    scrollbar={false}
                                                    pagination={false}
                                                    Autoplay={{
                                                        delay: 500,
                                                        disableOnInteraction: false
                                                    }}
                                                >
                                                    <>
                                                        {
                                                            this.state.imagesLoaded.map((item, indx) => (
                                                                <SwiperSlide>
                                                                    <div className={`fetchedImagesPanel m-auto ${window.screen.width <= 767 ? 'col-10' : 'col-md-10'}`}>
                                                                        <i className="fa fa-times" onClick={this.handleDel} data-deleteImg={item.fileName} data-index={indx} aria-hidden="true"></i>
                                                                        <img src={item.fileLink[0]} onClick={this.handleEdit} />
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))
                                                        }
                                                    </>
                                                </Swiper>
                                            </div>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default withRouter(Step3);

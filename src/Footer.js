import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright <i className="flaticon-copyright" /> 2020 Kreton. Designed by <a target="_blank" href="https://envytheme.com/">EnvyTheme</a></p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li><a href="#" target="_blank"><i className="flaticon-facebook" /></a></li>
                                    <li><a href="#" target="_blank"><i className="flaticon-twitter" /></a></li>
                                    <li><a href="#" target="_blank"><i className="flaticon-linkedin" /></a></li>
                                    <li><a href="#" target="_blank"><i className="flaticon-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="modal fade contactModal" id="contactModal" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="modal-body">
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Enter your name" />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Enter your email" />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form-control" id="message" cols={30} rows={5} required data-error="Write your message" placeholder="Enter your message" defaultValue={""} />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="default-btn">Send Message</button>
                                            <div id="msgSubmit" className="h3 text-center hidden" />
                                            <div className="clearfix" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer

import React, { Component } from 'react'
import Banner from "./HomeComponents/Banner";
export class Home extends Component {
    render() {
        return (
            <>
                <Banner />
                <section className="followers-area bg-f9f9f9 pt-100 pb-70">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">What Do I Love</span>
                            <h2>I'm a Instagram Influencer Designer Running My Own Design Studio</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-followers-box">
                                    <h3><span className="odometer" data-count={275}>00</span>K</h3>
                                    <span className="sub-title d-block">Instagram followers</span>
                                    <a href="#" className="link" target="_blank"><i className="flaticon-instagram" /> @alikamaya</a>
                                    <div className="line" />
                                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididun.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-followers-box">
                                    <h3><span className="odometer" data-count={125}>00</span>K</h3>
                                    <span className="sub-title d-block">Twitter followers</span>
                                    <a href="#" className="link" target="_blank"><i className="flaticon-twitter" /> @alikamaya</a>
                                    <div className="line" />
                                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididun.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-followers-box">
                                    <h3><span className="odometer" data-count={178}>00</span>K</h3>
                                    <span className="sub-title d-block">YouTube subscribers</span>
                                    <a href="#" className="link" target="_blank"><i className="flaticon-youtube" /> @alikamaya</a>
                                    <div className="line" />
                                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididun.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape1"><img src={require("./assets/img/shape1.png").default} alt="image" /></div>
                </section>
                <section id="about" className="about-area pb-100">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="about-image">
                                    <img src={require("./assets/img/about-img.png").default} className="main-image" alt="image" />
                                    <div className="shape">
                                        <img src={require("./assets/img/about-shape1.png").default} alt="image" />
                                        <img src={require("./assets/img/about-shape2.png").default} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="about-content">
                                    <span className="sub-title">About Me</span>
                                    <h2>I'm a Instagram Influencer Designer Running My Own Design</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <div className="btn-box">
                                        <a href="#" className="default-btn" data-toggle="modal" data-target="#contactModal">Contact Me</a>
                                        <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#5e363b3232311e3f3237353f333f273f703d3133" className="email"><span className="__cf_email__" data-cfemail="d7bfb2bbbbb897b6bbbebcb6bab6aeb6f9b4b8ba">[email&nbsp;protected]</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="socialStatistics" className="social-statistics-area pb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2>Social Statistics</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-social-statistics-box">
                                    <h3>8M</h3>
                                    <span className="sub-title d-block">Facebook followers</span>
                                    <a href="#" className="link" target="_blank"><i className="flaticon-facebook" /> @alikamaya</a>
                                    <div className="line" />
                                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididun.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6">
                                <div className="single-social-statistics-box">
                                    <h3>1.2M</h3>
                                    <span className="sub-title d-block">Pinterest followers</span>
                                    <a href="#" className="link" target="_blank"><i className="flaticon-pinterest" /> @alikamaya</a>
                                    <div className="line" />
                                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididun.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-social-statistics-box">
                                    <h3>58K</h3>
                                    <span className="sub-title d-block">Linkedin followers</span>
                                    <a href="#" className="link" target="_blank"><i className="flaticon-linkedin" /> @alikamaya</a>
                                    <div className="line" />
                                    <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididun.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape1"><img src={require("./assets/img/shape1.png").default} alt="image" /></div>
                </section>
                <section id="instagramAudience" className="audience-area pb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="audience-content">
                                    <span className="sub-title"><a href="#">@Alikamaya</a></span>
                                    <h2>Instagram + Audience</h2>
                                    <div className="audience-content-inner instagram-audience-content">
                                        <h5>Instagram Audience</h5>
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 col-md-5">
                                                <div className="audience-text">
                                                    <h4>78% <span>female</span></h4>
                                                    <h4>25-35 <span>years old</span></h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-7">
                                                <div className="audience-item">
                                                    <div className="audience-header">
                                                        <div className="count-box"><span className="count-text" data-speed={2000} data-stop="95.5">0</span>%</div>
                            US
                          </div>
                                                    <div className="audience-bar">
                                                        <div className="bar-inner"><div className="bar progress-line" data-width="95.5" /></div>
                                                    </div>
                                                </div>
                                                <div className="audience-item">
                                                    <div className="audience-header">
                                                        <div className="count-box"><span className="count-text" data-speed={2000} data-stop="80.2">0</span>%</div>
                            UK
                          </div>
                                                    <div className="audience-bar">
                                                        <div className="bar-inner"><div className="bar progress-line" data-width="80.2" /></div>
                                                    </div>
                                                </div>
                                                <div className="audience-item">
                                                    <div className="audience-header">
                                                        <div className="count-box"><span className="count-text" data-speed={2000} data-stop="70.6">0</span>%</div>
                            Canada
                          </div>
                                                    <div className="audience-bar">
                                                        <div className="bar-inner"><div className="bar progress-line" data-width="70.6" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="audience-content-inner instagram-collaborations-content">
                                        <h5>Instagram Collaborations</h5>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                <div className="single-collaborations-box">
                                                    <img src={require("./assets/img/collaborations-img1.jpg").default} alt="image" />
                                                    <h3><span className="odometer" data-count={275}>00</span>K</h3>
                                                    <p>Followers</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                                <div className="single-collaborations-box">
                                                    <img src={require("./assets/img/collaborations-img2.jpg").default} alt="image" />
                                                    <h3><span className="odometer" data-count={13}>00</span>%</h3>
                                                    <p>Engagement Rate</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="audience-image">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="image">
                                                <img src={require("./assets/img/audience-img1.jpg").default} alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="image">
                                                <img src={require("./assets/img/audience-img2.jpg").default} alt="image" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="image">
                                                <img src={require("./assets/img/audience-img3.jpg").default} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="partners-area bg-f9f9f9 pt-100 pb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2>Trusted Partners</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                                <div className="single-partners-box">
                                    <a href="#" target="_blank">
                                        <img src={require("./assets/img/partner/img1.png").default} alt="image" />
                                    </a>
                                    <div className="overlay" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                                <div className="single-partners-box">
                                    <a href="#" target="_blank">
                                        <img src={require("./assets/img/partner/img2.png").default} alt="image" />
                                    </a>
                                    <div className="overlay" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                                <div className="single-partners-box">
                                    <a href="#" target="_blank">
                                        <img src={require("./assets/img/partner/img3.png").default} alt="image" />
                                    </a>
                                    <div className="overlay" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                                <div className="single-partners-box">
                                    <a href="#" target="_blank">
                                        <img src={require("./assets/img/partner/img4.png").default} alt="image" />
                                    </a>
                                    <div className="overlay" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                                <div className="single-partners-box">
                                    <a href="#" target="_blank">
                                        <img src={require("./assets/img/partner/img5.png").default} alt="image" />
                                    </a>
                                    <div className="overlay" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                                <div className="single-partners-box">
                                    <a href="#" target="_blank">
                                        <img src={require("./assets/img/partner/img6.png").default} alt="image" />
                                    </a>
                                    <div className="overlay" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                                <div className="single-partners-box">
                                    <a href="#" target="_blank">
                                        <img src={require("./assets/img/partner/img7.png").default} alt="image" />
                                    </a>
                                    <div className="overlay" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                                <div className="single-partners-box">
                                    <a href="#" target="_blank">
                                        <img src={require("./assets/img/partner/img8.png").default} alt="image" />
                                    </a>
                                    <div className="overlay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="video-area">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="video-content">
                                    <span className="sub-title">Showreel</span>
                                    <h2>Want To Stick Out In A Saturated Market?</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                                    <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" className="popup-youtube video-btn"><i className="flaticon-play" /> Watch Video</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="video-image">
                                    <img src={require("./assets/img/video-img.jpg").default} alt="image" />
                                    <div className="overlay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="podcast-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Build The Business Of Your Dreams With My Programs</h2>
                        </div>
                        <div className="overview-box">
                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("./assets/img/podcast-img1.jpg").default} alt="image" />
                                    <div className="overlay" />
                                </div>
                            </div>
                            <div className="overview-content">
                                <div className="content">
                                    <h3>Social Creator</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Qu ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content">
                                    <h3>The Podcast</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Qu ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>
                                </div>
                            </div>
                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("./assets/img/podcast-img2.jpg").default} alt="image" />
                                    <div className="overlay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="blog" className="blog-area pb-70">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">From The Blog</span>
                            <h2>Latest Insights Are On Top All Times</h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <a href="single-blog.html">
                                            <img src={require("./assets/img/blog/img1.jpg").default} alt="image" />
                                        </a>
                                        <div className="overlay" />
                                    </div>
                                    <div className="post-content">
                                        <ul className="post-meta">
                                            <li>
                                                <a href="single-blog.html">Fashion</a>
                                                <a href="single-blog.html">Lifestyle</a>
                                            </li>
                                            <li>4 min read</li>
                                        </ul>
                                        <h3><a href="single-blog.html">How to Successfully Negotiate with Influencers</a></h3>
                                        <div className="overlay" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <a href="single-blog.html">
                                            <img src={require("./assets/img/blog/img2.jpg").default} alt="image" />
                                        </a>
                                        <div className="overlay" />
                                    </div>
                                    <div className="post-content">
                                        <ul className="post-meta">
                                            <li>
                                                <a href="single-blog.html">Travel</a>
                                                <a href="single-blog.html">Style</a>
                                            </li>
                                            <li>3 min read</li>
                                        </ul>
                                        <h3><a href="single-blog.html">How to Find the Perfect Influencers for Your Niche</a></h3>
                                        <div className="overlay" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post">
                                    <div className="post-image">
                                        <a href="single-blog.html">
                                            <img src={require("./assets/img/blog/img3.jpg").default} alt="image" />
                                        </a>
                                        <div className="overlay" />
                                    </div>
                                    <div className="post-content">
                                        <ul className="post-meta">
                                            <li>
                                                <a href="single-blog.html">Fashion</a>
                                                <a href="single-blog.html">Travel</a>
                                            </li>
                                            <li>6 min read</li>
                                        </ul>
                                        <h3><a href="single-blog.html">How Micro-Influencers Can Transform Your Business</a></h3>
                                        <div className="overlay" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="subscribe-area pt-100 jarallax" data-jarallax="{&quot;speed&quot;: 0.3}">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12">
                                <div className="subscribe-content">
                                    <h2>Join With Me</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    <div className="btn-box">
                                        <a href="#" className="default-btn" data-toggle="modal" data-target="#contactModal">Contact Me</a>
                                        <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#0b636e6767644b6a6762606a666a726a25686466" className="email"><span className="__cf_email__" data-cfemail="771f121b1b1837161b1e1c161a160e165914181a">[email&nbsp;protected]</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="subscribe-form">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="First Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email Address" />
                                        </div>
                                        <button type="submit">Join With Me Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Home

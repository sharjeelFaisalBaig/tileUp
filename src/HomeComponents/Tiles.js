import React, { Component } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Tile from './Tile';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default class Tiles extends Component {
    render() {
        return (
            <>
                <section id="instagramAudience" className={`audience-area pb-100 pt-65`}>
                    <div className="container-fluid bg-set">
                        <img src={require('../assets/img/about-shape1.png').default} style={{ top: '2%', left: '2%' }} className="bg-it" />
                        <img src={require('../assets/img/about-shape1.png').default} style={{ top: '15%', right: '0' }} className="bg-it" />
                        <div className="row align-items-center">
                            <div className="section-title">
                                <span className="sub-title">#TILEUP</span>
                                <h2>DECORATE YOUR WALL WITH TILEUP</h2>
                            </div>
                            <div className="col-lg-12 col-md-12 margin-top-exceed">
                                <div className="audience-content">
                                    <div className="audience-content-inner instagram-collaborations-content">
                                        <div className="row d-mobile-none">
                                            <Swiper
                                                spaceBetween={10}
                                                slidesPerView={4}
                                                navigation
                                                pagination={{ clickable: true }}
                                            >
                                                <SwiperSlide>
                                                    <Tile
                                                        tileImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        tileImgAlt="tile1"
                                                        tileText="ROCK"
                                                        tileSubtitle="Lets Rock with tileup"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Tile
                                                        tileImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        tileImgAlt="tile1"
                                                        tileText="ROCK"
                                                        tileSubtitle="Lets Rock with tileup"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Tile
                                                        tileImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        tileImgAlt="tile1"
                                                        tileText="ROCK"
                                                        tileSubtitle="Lets Rock with tileup"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Tile
                                                        tileImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        tileImgAlt="tile1"
                                                        tileText="ROCK"
                                                        tileSubtitle="Lets Rock with tileup"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Tile
                                                        tileImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        tileImgAlt="tile1"
                                                        tileText="ROCK"
                                                        tileSubtitle="Lets Rock with tileup"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Tile
                                                        tileImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        tileImgAlt="tile1"
                                                        tileText="ROCK"
                                                        tileSubtitle="Lets Rock with tileup"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Tile
                                                        tileImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        tileImgAlt="tile1"
                                                        tileText="ROCK"
                                                        tileSubtitle="Lets Rock with tileup"
                                                    />
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <div className="row d-desktop-none">
                                            <Swiper
                                                spaceBetween={2}
                                                slidesPerView={1}
                                                navigation
                                                pagination={{ clickable: true }}
                                            >
                                                <SwiperSlide>
                                                    <Tile
                                                        tileImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        tileImgAlt="tile1"
                                                        tileText="ROCK"
                                                        tileSubtitle="Lets Rock with tileup"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Tile
                                                        tileImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        tileImgAlt="tile1"
                                                        tileText="ROCK"
                                                        tileSubtitle="Lets Rock with tileup"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Tile
                                                        tileImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        tileImgAlt="tile1"
                                                        tileText="ROCK"
                                                        tileSubtitle="Lets Rock with tileup"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Tile
                                                        tileImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        tileImgAlt="tile1"
                                                        tileText="ROCK"
                                                        tileSubtitle="Lets Rock with tileup"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Tile
                                                        tileImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        tileImgAlt="tile1"
                                                        tileText="ROCK"
                                                        tileSubtitle="Lets Rock with tileup"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Tile
                                                        tileImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        tileImgAlt="tile1"
                                                        tileText="ROCK"
                                                        tileSubtitle="Lets Rock with tileup"
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <Tile
                                                        tileImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        tileImgAlt="tile1"
                                                        tileText="ROCK"
                                                        tileSubtitle="Lets Rock with tileup"
                                                    />
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
import React, { Component } from 'react';
import ReviewCard from './ReviewCard';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default class Review extends Component {
    render() {
        return (
            <>
                <section id="instagramAudience" className={`audience-area pb-100 pt-65 bg-white`}>
                    <div className="container-fluid bg-white">
                        <div className="row align-items-center">
                            <div className="section-title">
                                <span className="sub-title">#SATISFACTION</span>
                                <h2>OUR SATISFIED CLIENTS 😃 </h2>
                            </div>
                            <div className="col-lg-12 col-md-12 margin-top-exceed">
                                <div className="audience-content">
                                    <div className="audience-content-inner reviewSlider instagram-collaborations-content">
                                        <div className="d-mobile-none">
                                            <Swiper
                                                spaceBetween={10}
                                                slidesPerView={4}
                                                navigation
                                                pagination={{ clickable: true }}
                                            >
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <div className="d-desktop-none">
                                            <Swiper
                                                spaceBetween={10}
                                                slidesPerView={1}
                                                navigation
                                                pagination={{ clickable: true }}
                                            >
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
                                                    />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <ReviewCard
                                                        ReviewCardImg={require('../assets/img/collaborations-img1.jpg').default}
                                                        ReviewCardImgAlt='Coolest Tile Service'
                                                        ReviewCardText='St.Pauls Jhonson'
                                                        ReviewCardSubtitle={<span style={{ fontStyle: 'normal', color: '#ff8200', fontSize: '21px' }}> 🌟 🌟 🌟 🌟 🌟 </span>}
                                                        ReviewText={<>
                                                            <p style={{ color: 'black', fontWeight: 600, fontStyle: 'normal', fontSize: '15px', padding: '14px' }}>You guys our living room wall is now complete! This photo wall was so easy to create!</p>
                                                        </>}
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
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '../css/CarComp.css';

export default class CarComp extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1.5,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        dots: true,
                        infinite: false,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1.5,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true,
                    },
                },
            ],
        };
        return (
            <div className='featured-Car bg-light p-60'>
                {/* Featured tite  */}
                <div className='featured-title text-center'>
                    <h1 className='title'>Xe Dành Cho Bạn</h1>
                </div>

                <div className='container car-slide space pt-48'>
                    <div className='featured-container row row-cols-xl-3 row-cols-xs-1 g-3'>
                        <div className='featured-item col-xxl-3 col-xs col-md-6 col-lg-4'>
                            <a class='item-car card'>
                                <div class='item-box'>
                                    <div class='img-car'>
                                        <img
                                            class='card-img-top fix-img'
                                            src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2022/p/g/2024/00/02/17/jXWHJH0JJpBNFZMwdfWyXw.jpg'
                                            alt=''
                                        />

                                        <span class='label-pos'>
                                            <span class='rent'>
                                                Đặt xe nhanh
                                            </span>
                                            <span class='rent'>
                                                Miễn thế chấp
                                            </span>
                                        </span>
                                    </div>
                                    <div class='desc-car'>
                                        <div class='desc-tag'>
                                            <span class='tag-item'>
                                                Số tự động
                                            </span>
                                            <span class='tag-item'>
                                                Giao xe tận nơi
                                            </span>
                                        </div>
                                        <div class='desc-name'>
                                            <p>Kia Morning 2022</p>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-shield-halved'></i>
                                            </div>
                                        </div>
                                        <div class='desc-address'>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-location-dot'></i>
                                            </div>
                                            <p>Quận Hoàn Kiếm, Hà Nội</p>
                                        </div>
                                        <div class='hr'></div>
                                        <div class='desc-info-price'>
                                            <div class='info'>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-star'></i>
                                                </div>
                                                <span class='info'>5.0</span>
                                                <span class='dot'>
                                                    <i class='fa-solid fa-circle'></i>
                                                </span>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-suitcase-rolling'></i>
                                                </div>
                                                <span class='info'>
                                                    50 chuyến
                                                </span>
                                            </div>
                                            <div class='wrap-price'>
                                                <div class='price'>
                                                    <span class='price-special'>
                                                        746K
                                                    </span>
                                                </div>
                                                <div class='total-price'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='featured-item col-xxl-3 col-xs col-md-6 col-lg-4'>
                            <a class='item-car card'>
                                <div class='item-box'>
                                    <div class='img-car'>
                                        <img
                                            class='card-img-top fix-img'
                                            src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2022/p/g/2024/00/02/17/jXWHJH0JJpBNFZMwdfWyXw.jpg'
                                            alt=''
                                        />

                                        <span class='label-pos'>
                                            <span class='rent'>
                                                Đặt xe nhanh
                                            </span>
                                            <span class='rent'>
                                                Miễn thế chấp
                                            </span>
                                        </span>
                                    </div>
                                    <div class='desc-car'>
                                        <div class='desc-tag'>
                                            <span class='tag-item'>
                                                Số tự động
                                            </span>
                                            <span class='tag-item'>
                                                Giao xe tận nơi
                                            </span>
                                        </div>
                                        <div class='desc-name'>
                                            <p>Kia Morning 2022</p>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-shield-halved'></i>
                                            </div>
                                        </div>
                                        <div class='desc-address'>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-location-dot'></i>
                                            </div>
                                            <p>Quận Hoàn Kiếm, Hà Nội</p>
                                        </div>
                                        <div class='hr'></div>
                                        <div class='desc-info-price'>
                                            <div class='info'>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-star'></i>
                                                </div>
                                                <span class='info'>5.0</span>
                                                <span class='dot'>
                                                    <i class='fa-solid fa-circle'></i>
                                                </span>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-suitcase-rolling'></i>
                                                </div>
                                                <span class='info'>
                                                    50 chuyến
                                                </span>
                                            </div>
                                            <div class='wrap-price'>
                                                <div class='price'>
                                                    <span class='price-special'>
                                                        746K
                                                    </span>
                                                </div>
                                                <div class='total-price'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='featured-item col-xxl-3 col-xs col-md-6 col-lg-4'>
                            <a class='item-car card'>
                                <div class='item-box'>
                                    <div class='img-car'>
                                        <img
                                            class='card-img-top fix-img'
                                            src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2022/p/g/2024/00/02/17/jXWHJH0JJpBNFZMwdfWyXw.jpg'
                                            alt=''
                                        />

                                        <span class='label-pos'>
                                            <span class='rent'>Đặt xe nhanh</span>
                                            <span class='rent'>Miễn thế chấp</span>
                                        </span>
                                    </div>
                                    <div class='desc-car'>
                                        <div class='desc-tag'>
                                            <span class='tag-item'>Số tự động</span>
                                            <span class='tag-item'>
                                                Giao xe tận nơi
                                            </span>
                                        </div>
                                        <div class='desc-name'>
                                            <p>Kia Morning 2022</p>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-shield-halved'></i>
                                            </div>
                                        </div>
                                        <div class='desc-address'>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-location-dot'></i>
                                            </div>
                                            <p>Quận Hoàn Kiếm, Hà Nội</p>
                                        </div>
                                        <div class='hr'></div>
                                        <div class='desc-info-price'>
                                            <div class='info'>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-star'></i>
                                                </div>
                                                <span class='info'>5.0</span>
                                                <span class='dot'>
                                                    <i class='fa-solid fa-circle'></i>
                                                </span>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-suitcase-rolling'></i>
                                                </div>
                                                <span class='info'>50 chuyến</span>
                                            </div>
                                            <div class='wrap-price'>
                                                <div class='price'>
                                                    <span class='price-special'>
                                                        746K
                                                    </span>
                                                </div>
                                                <div class='total-price'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='featured-item col-xxl-3 col-xs col-md-6 col-lg-4'>
                            <a class='item-car card'>
                                <div class='item-box'>
                                    <div class='img-car'>
                                        <img
                                            class='card-img-top fix-img'
                                            src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2022/p/g/2024/00/02/17/jXWHJH0JJpBNFZMwdfWyXw.jpg'
                                            alt=''
                                        />

                                        <span class='label-pos'>
                                            <span class='rent'>Đặt xe nhanh</span>
                                            <span class='rent'>Miễn thế chấp</span>
                                        </span>
                                    </div>
                                    <div class='desc-car'>
                                        <div class='desc-tag'>
                                            <span class='tag-item'>Số tự động</span>
                                            <span class='tag-item'>
                                                Giao xe tận nơi
                                            </span>
                                        </div>
                                        <div class='desc-name'>
                                            <p>Kia Morning 2022</p>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-shield-halved'></i>
                                            </div>
                                        </div>
                                        <div class='desc-address'>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-location-dot'></i>
                                            </div>
                                            <p>Quận Hoàn Kiếm, Hà Nội</p>
                                        </div>
                                        <div class='hr'></div>
                                        <div class='desc-info-price'>
                                            <div class='info'>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-star'></i>
                                                </div>
                                                <span class='info'>5.0</span>
                                                <span class='dot'>
                                                    <i class='fa-solid fa-circle'></i>
                                                </span>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-suitcase-rolling'></i>
                                                </div>
                                                <span class='info'>50 chuyến</span>
                                            </div>
                                            <div class='wrap-price'>
                                                <div class='price'>
                                                    <span class='price-special'>
                                                        746K
                                                    </span>
                                                </div>
                                                <div class='total-price'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <Slider {...settings}>
                        <div className='featured-item col-xxl-3 col-xs col-md-6 col-lg-4'>
                            <a class='item-car card'>
                                <div class='item-box'>
                                    <div class='img-car'>
                                        <img
                                            class='card-img-top fix-img'
                                            src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2022/p/g/2024/00/02/17/jXWHJH0JJpBNFZMwdfWyXw.jpg'
                                            alt=''
                                        />

                                        <span class='label-pos'>
                                            <span class='rent'>
                                                Đặt xe nhanh
                                            </span>
                                            <span class='rent'>
                                                Miễn thế chấp
                                            </span>
                                        </span>
                                    </div>
                                    <div class='desc-car'>
                                        <div class='desc-tag'>
                                            <span class='tag-item'>
                                                Số tự động
                                            </span>
                                            <span class='tag-item'>
                                                Giao xe tận nơi
                                            </span>
                                        </div>
                                        <div class='desc-name'>
                                            <p>Kia Morning 2022</p>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-shield-halved'></i>
                                            </div>
                                        </div>
                                        <div class='desc-address'>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-location-dot'></i>
                                            </div>
                                            <p>Quận Hoàn Kiếm, Hà Nội</p>
                                        </div>
                                        <div class='hr'></div>
                                        <div class='desc-info-price'>
                                            <div class='info'>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-star'></i>
                                                </div>
                                                <span class='info'>5.0</span>
                                                <span class='dot'>
                                                    <i class='fa-solid fa-circle'></i>
                                                </span>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-suitcase-rolling'></i>
                                                </div>
                                                <span class='info'>
                                                    50 chuyến
                                                </span>
                                            </div>
                                            <div class='wrap-price'>
                                                <div class='price'>
                                                    <span class='price-special'>
                                                        746K
                                                    </span>
                                                </div>
                                                <div class='total-price'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='featured-item col-xxl-3 col-xs col-md-6 col-lg-4'>
                            <a class='item-car card'>
                                <div class='item-box'>
                                    <div class='img-car'>
                                        <img
                                            class='card-img-top fix-img'
                                            src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2022/p/g/2024/00/02/17/jXWHJH0JJpBNFZMwdfWyXw.jpg'
                                            alt=''
                                        />

                                        <span class='label-pos'>
                                            <span class='rent'>
                                                Đặt xe nhanh
                                            </span>
                                            <span class='rent'>
                                                Miễn thế chấp
                                            </span>
                                        </span>
                                    </div>
                                    <div class='desc-car'>
                                        <div class='desc-tag'>
                                            <span class='tag-item'>
                                                Số tự động
                                            </span>
                                            <span class='tag-item'>
                                                Giao xe tận nơi
                                            </span>
                                        </div>
                                        <div class='desc-name'>
                                            <p>Kia Morning 2022</p>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-shield-halved'></i>
                                            </div>
                                        </div>
                                        <div class='desc-address'>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-location-dot'></i>
                                            </div>
                                            <p>Quận Hoàn Kiếm, Hà Nội</p>
                                        </div>
                                        <div class='hr'></div>
                                        <div class='desc-info-price'>
                                            <div class='info'>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-star'></i>
                                                </div>
                                                <span class='info'>5.0</span>
                                                <span class='dot'>
                                                    <i class='fa-solid fa-circle'></i>
                                                </span>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-suitcase-rolling'></i>
                                                </div>
                                                <span class='info'>
                                                    50 chuyến
                                                </span>
                                            </div>
                                            <div class='wrap-price'>
                                                <div class='price'>
                                                    <span class='price-special'>
                                                        746K
                                                    </span>
                                                </div>
                                                <div class='total-price'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='featured-item col-xxl-3 col-xs col-md-6 col-lg-4'>
                            <a class='item-car card'>
                                <div class='item-box'>
                                    <div class='img-car'>
                                        <img
                                            class='card-img-top fix-img'
                                            src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2022/p/g/2024/00/02/17/jXWHJH0JJpBNFZMwdfWyXw.jpg'
                                            alt=''
                                        />

                                        <span class='label-pos'>
                                            <span class='rent'>
                                                Đặt xe nhanh
                                            </span>
                                            <span class='rent'>
                                                Miễn thế chấp
                                            </span>
                                        </span>
                                    </div>
                                    <div class='desc-car'>
                                        <div class='desc-tag'>
                                            <span class='tag-item'>
                                                Số tự động
                                            </span>
                                            <span class='tag-item'>
                                                Giao xe tận nơi
                                            </span>
                                        </div>
                                        <div class='desc-name'>
                                            <p>Kia Morning 2022</p>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-shield-halved'></i>
                                            </div>
                                        </div>
                                        <div class='desc-address'>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-location-dot'></i>
                                            </div>
                                            <p>Quận Hoàn Kiếm, Hà Nội</p>
                                        </div>
                                        <div class='hr'></div>
                                        <div class='desc-info-price'>
                                            <div class='info'>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-star'></i>
                                                </div>
                                                <span class='info'>5.0</span>
                                                <span class='dot'>
                                                    <i class='fa-solid fa-circle'></i>
                                                </span>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-suitcase-rolling'></i>
                                                </div>
                                                <span class='info'>
                                                    50 chuyến
                                                </span>
                                            </div>
                                            <div class='wrap-price'>
                                                <div class='price'>
                                                    <span class='price-special'>
                                                        746K
                                                    </span>
                                                </div>
                                                <div class='total-price'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='featured-item col-xxl-3 col-xs col-md-6 col-lg-4'>
                            <a class='item-car card'>
                                <div class='item-box'>
                                    <div class='img-car'>
                                        <img
                                            class='card-img-top fix-img'
                                            src='https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2022/p/g/2024/00/02/17/jXWHJH0JJpBNFZMwdfWyXw.jpg'
                                            alt=''
                                        />

                                        <span class='label-pos'>
                                            <span class='rent'>
                                                Đặt xe nhanh
                                            </span>
                                            <span class='rent'>
                                                Miễn thế chấp
                                            </span>
                                        </span>
                                    </div>
                                    <div class='desc-car'>
                                        <div class='desc-tag'>
                                            <span class='tag-item'>
                                                Số tự động
                                            </span>
                                            <span class='tag-item'>
                                                Giao xe tận nơi
                                            </span>
                                        </div>
                                        <div class='desc-name'>
                                            <p>Kia Morning 2022</p>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-shield-halved'></i>
                                            </div>
                                        </div>
                                        <div class='desc-address'>
                                            <div class='wrap-icon'>
                                                <i class='fa-solid fa-location-dot'></i>
                                            </div>
                                            <p>Quận Hoàn Kiếm, Hà Nội</p>
                                        </div>
                                        <div class='hr'></div>
                                        <div class='desc-info-price'>
                                            <div class='info'>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-star'></i>
                                                </div>
                                                <span class='info'>5.0</span>
                                                <span class='dot'>
                                                    <i class='fa-solid fa-circle'></i>
                                                </span>
                                                <div class='wrap-icon'>
                                                    <i class='fa-solid fa-suitcase-rolling'></i>
                                                </div>
                                                <span class='info'>
                                                    50 chuyến
                                                </span>
                                            </div>
                                            <div class='wrap-price'>
                                                <div class='price'>
                                                    <span class='price-special'>
                                                        746K
                                                    </span>
                                                </div>
                                                <div class='total-price'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

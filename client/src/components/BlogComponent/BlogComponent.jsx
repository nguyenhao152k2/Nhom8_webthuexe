import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Blog.css';

export default class BlogComp extends Component {
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
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        dots: true,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                    },
                },
            ],
        };
        return (
            <div className='blog-section'>
                <div className='container blog-slide p-60 bg-warning'>
                    <h1 className='title text-center'>T4B.vn Blog</h1>
                    <div className='blog-container row row-cols-xl-2 row-cols-xs-1 pt-48'>
                        <div className='blog-item col-xl-4 col-lg-4 col-xs-12'>
                            <div className='blog-content'>
                                <a
                                    href=''
                                    className='item-blog card blog-content__sm  rounded-4 border-0 mb-4'
                                >
                                    <img
                                        src='https://n1-cstg.mioto.vn/g/2023/07/12/09/6L6M2ZNX.jpg'
                                        alt=''
                                        className='fix-img blog-content__img rounded-4'
                                    />
                                    <div className='blog-content__text'>
                                        <p className='time-text'>12-8-2023</p>
                                        <p className='name-text h5'>
                                            Khám phá Hà Nội vào Lễ Quốc Khánh
                                            2/9 bằng việc thuê xe tự lái
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href=''
                                    className='item-blog card blog-item__sm rounded-4 border-0'
                                >
                                    <img
                                        src='https://n1-cstg.mioto.vn/g/2023/07/10/00/CVEJCQII.jpg'
                                        alt=''
                                        className='fix-img blog-content__img rounded-4'
                                    />
                                    <div className='blog-content__text'>
                                        <p className='time-text'>10-8-2023</p>
                                        <p className='name-text h5'>
                                            Thuê Xe Ô Tô Tự Lái tại Hà Nội: Sự
                                            Thuận Tiện Trong Việc Khám Phá Thủ
                                            Đô Hà Nội
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='blog-item col-xl-8 col-lg-8 col-xs-12'>
                            <div className='blog-content t-24'>
                                <a
                                    href=''
                                    className='item-blog card blog-content__lg right rounded-4 border-0'
                                >
                                    <img
                                        src='https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg'
                                        alt=''
                                        className='fix-img blog-content__img rounded-4'
                                    />
                                    <div className='blog-content__text'>
                                        <p className='time-text'>10-8-2023</p>
                                        <p className='name-text h2'>
                                            {' '}
                                            Xe Ô Tô Điện - Sự Lựa Chọn Hoàn Hảo
                                            Cho Lái Mới
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div className='blog-item'>
                            {/* <div className='blog-content'> */}
                            <a
                                href=''
                                className='item-blog card blog-content rounded-4 border-0 mb-4'
                            >
                                <img
                                    src='https://n1-cstg.mioto.vn/g/2023/07/12/09/6L6M2ZNX.jpg'
                                    alt=''
                                    className='fix-img blog-content__img rounded-4'
                                />
                                <div className='blog-content__text'>
                                    <p className='time-text'>12-8-2023</p>
                                    <p className='name-text h5'>
                                        Khám phá Hà Nội vào Lễ Quốc Khánh 2/9
                                        bằng việc thuê xe tự lái
                                    </p>
                                </div>
                            </a>

                            {/* </div> */}
                        </div>
                        <div className='blog-item'>
                            {/* <div className='blog-content'> */}
                            <a
                                href=''
                                className='item-blog card blog-content rounded-4 border-0'
                            >
                                <img
                                    src='https://n1-cstg.mioto.vn/g/2023/07/10/00/CVEJCQII.jpg'
                                    alt=''
                                    className='fix-img blog-content__img rounded-4'
                                />
                                <div className='blog-content__text'>
                                    <p className='time-text'>10-8-2023</p>
                                    <p className='name-text h5'>
                                        Thuê Xe Ô Tô Tự Lái tại Hà Nội: Sự Thuận
                                        Tiện Trong Việc Khám Phá Thủ Đô Hà Nội
                                    </p>
                                </div>
                            </a>

                            {/* </div> */}
                        </div>
                        <div className='blog-item'>
                            {/* <div className='blog-content t-24'> */}
                            <a
                                href=''
                                className='item-blog card blog-content right rounded-4 border-0'
                            >
                                <img
                                    src='https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg'
                                    alt=''
                                    className='fix-img blog-content__img rounded-4'
                                />
                                <div className='blog-content__text'>
                                    <p className='time-text'>10-8-2023</p>
                                    <p className='name-text h2'>
                                        {' '}
                                        Xe Ô Tô Điện - Sự Lựa Chọn Hoàn Hảo Cho
                                        Lái Mới
                                    </p>
                                </div>
                            </a>
                            {/* </div> */}
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

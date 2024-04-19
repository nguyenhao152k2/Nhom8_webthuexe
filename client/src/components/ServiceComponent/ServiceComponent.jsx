import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Row from 'react-bootstrap/Row';
// import '../css/Service.css';

export default class ServiceComp extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 0,
            autoplay: false,
            autoplaySpeed: 3000,
            responsive: [
                // {
                //     breakpoint: 1200,
                //     settings: {
                //         slidesToShow: 2,
                //         slidesToScroll: 1,
                //         infinite: true,
                //         dots: true,
                //     },
                // },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        // initialSlide: 2,
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
                // {
                //     breakpoint: 480,
                //     settings: {
                //         slidesToShow: 1,
                //         slidesToScroll: 1,
                //         dots: true,
                //     },
                // },
            ],
        };
        return (
            <div class='service-section'>
                <div class='container sv-slide p-60 bg-primary'>
                    <h1 class='title text-center'>Dịch Vụ Của T4B.vn</h1>
                    {/* d-flex justify-content-between */}
                    <div class='service-container d-flex justify-content-between pt-48 '>
                        <div class='service-item '>
                            <div class='service-item__img pb-5'>
                                <img
                                    src='https://www.mioto.vn/static/media/service1.e6ebc385.png'
                                    alt=''
                                />
                                <div class='service-item__content'>
                                    <h1 class=''>
                                        Xe đã sẵn sàng.
                                        <br />
                                        Bắt đầu hành trình ngay!
                                    </h1>
                                    <p class=''>
                                        Tự tay cầm lái chiếc xe mà bạn yêu thích{' '}
                                        <br /> cho hành trình thêm hứng khởi.
                                    </p>
                                    <a
                                        href=''
                                        class='btn-service btn btn-success '
                                    >
                                        Thuê xe tự lái
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class='service-item right float-end '>
                            <div class='service-item__img pt-5'>
                                <img
                                    src='https://www.mioto.vn/static/media/service2.9df79c9f.png'
                                    alt=''
                                />
                                <div class='service-item__content text-end'>
                                    <h1 class=''>Tài xế của bạn đã đến!</h1>
                                    <p class=''>
                                        Chuyến đi thêm thú vị
                                        <br />
                                        cùng các bác tài 5* trên T4B.vn
                                    </p>
                                    <a
                                        href=''
                                        class='btn-service btn btn-success '
                                    >
                                        Thuê xe có tài xế
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings}>
                        {/* <div class='service-item'>
                            <div class='service-item__img pb-5'>
                                <img
                                    src='https://www.mioto.vn/static/media/service1.e6ebc385.png'
                                    alt=''
                                />
                                <div class='service-item__content'>
                                    <h1 class=''>
                                        Xe đã sẵn sàng.
                                        <br />
                                        Bắt đầu hành trình ngay!
                                    </h1>
                                    <p class=''>
                                        Tự tay cầm lái chiếc xe mà bạn yêu thích{' '}
                                        <br /> cho hành trình thêm hứng khởi.
                                    </p>
                                    <a
                                        href=''
                                        class='btn-service btn btn-success '
                                    >
                                        Thuê xe tự lái
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class='service-item right'>
                            <div class='service-item__img'>
                                <img
                                    src='https://www.mioto.vn/static/media/service2.9df79c9f.png'
                                    alt=''
                                />
                                <div class='service-item__content text-end'>
                                    <h1 class=''>Tài xế của bạn đã đến!</h1>
                                    <p class=''>
                                        Chuyến đi thêm thú vị
                                        <br />
                                        cùng các bác tài 5* trên T4B.vn
                                    </p>
                                    <a
                                        href=''
                                        class='btn-service btn btn-success '
                                    >
                                        Thuê xe có tài xế
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        <div class='service-item '>
                            <div class='service-item__img'>
                                <img
                                    src='https://www.mioto.vn/static/media/service1.e6ebc385.png'
                                    alt=''
                                />
                                <div class='service-item__content'>
                                    <h1 class=''>
                                        Xe đã sẵn sàng.
                                        <br />
                                        Bắt đầu hành trình ngay!
                                    </h1>
                                    <p class=''>
                                        Tự tay cầm lái chiếc xe mà bạn yêu thích{' '}
                                        <br /> cho hành trình thêm hứng khởi.
                                    </p>
                                    <a
                                        href=''
                                        class='btn-service btn btn-success '
                                    >
                                        Thuê xe tự lái
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class='service-item right float-end '>
                            <div class='service-item__img'>
                                <img
                                    src='https://www.mioto.vn/static/media/service2.9df79c9f.png'
                                    alt=''
                                />
                                <div class='service-item__content text-end'>
                                    <h1 class=''>Tài xế của bạn đã đến!</h1>
                                    <p class=''>
                                        Chuyến đi thêm thú vị
                                        <br />
                                        cùng các bác tài 5* trên T4B.vn
                                    </p>
                                    <a
                                        href=''
                                        class='btn-service btn btn-success '
                                    >
                                        Thuê xe có tài xế
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

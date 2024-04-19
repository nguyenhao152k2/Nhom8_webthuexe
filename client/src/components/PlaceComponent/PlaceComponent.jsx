import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import '../css/Place.css';

function PlaceComp() {
    //   render() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: false,
                },
            },
        ],
    };
    return (
        <div class='prominent-place'>
            <div class='container p-60 bg-primary'>
                <div class='prominent-title text-center '>
                    <h1 class='title'>Địa Điểm Nổi Bật</h1>
                </div>

                {/* <div class="prominent-container"> */}
                {/* Address slide */}
                {/* <div class="address-slide pt-48"> */}
                {/* <div id="address-carousel" class="carousel slide" > */}
                {/* <div class="carousel-inner"> */}
                <Slider
                    ref={(slider) => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    <div class='carousel-item active'>
                        <div class='item-place card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/06/19/10/1IYDW45W.jpg'
                                class='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>

                    <div class='carousel-item'>
                        <div class='item-place card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/06/05/10/GIEL2NWG.jpg'
                                class='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>

                    <div class='carousel-item'>
                        <div class='item-place card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/05/20/13/FM9PZCVS.jpg'
                                class='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>

                    <div class='carousel-item'>
                        <div class='item-place card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/05/20/13/FM9PZCVS.jpg'
                                class='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>
                    <div class='carousel-item'>
                        <div class='item-place card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/07/01/13/D7HKIAHK.jpg'
                                class='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>
                </Slider>

                <button
                    class='carousel-prev'
                    type='button'
                    data-bs-target='#address-carousel'
                    data-bs-slide='prev'
                    onClick={previous}
                >
                    <span class='carousel-icon' aria-hidden='true'>
                        <FaChevronLeft />
                    </span>
                    {/* <span class='visually-hidden'>Previous</span> */}
                </button>
                <button
                    class='carousel-next'
                    type='button'
                    data-bs-target='#address-carousel'
                    data-bs-slide='next'
                    onClick={next}
                >
                    <span class='carousel-icon' aria-hidden='true'>
                        <FaChevronRight />
                    </span>
                    {/* <span class='visually-hidden'>Next</span> */}
                </button>
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
                {/* Airport slide */}
                <div class='airport-slide row row-cols-xl-2 row-cols-xs-1 m-0 pt-48'>
                    <div class='airport-header col-xl-2 col-sm-3 col-xs-12 bg-primary'>
                        <h2 class='airport-title'>Giao xe tại sân bay</h2>
                        <div class='airport-btn'>
                            <button
                                class='airport-prev me-3'
                                type='button'
                                data-bs-target='#airport-carousel'
                                data-bs-slide='prev'
                                onClick={previous}
                            >
                                <span class='airport-icon'>
                                    <FaChevronLeft />
                                </span>
                            </button>
                            <button
                                class='airport-next'
                                type='button'
                                data-bs-target='#airport-carousel'
                                data-bs-slide='next'
                                onClick={next}
                            >
                                <span class='airport-icon'>
                                    <FaChevronRight />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class='airport-slide__item col-xl-10 col-sm-9 col-xs-12 p-0'>
                        {/* <div id='airport-carousel' class='carousel slide'> */}
                        {/* <div class='carousel-inner'> */}
                        <Slider
                            ref={(slider) => {
                                sliderRef = slider;
                            }}
                            {...settings}
                        >
                            <div class='carousel-item'>
                                <a href='' class='airport-item'>
                                    <div class='card item-airport'>
                                        <img
                                            src='https://n1-cstg.mioto.vn/g/2023/06/19/10/1IYDW45W.jpg'
                                            class='airport-img mx-auto img-fluid rounded-circle'
                                            alt='...'
                                        />
                                        <h5 class='airport-address text-center mt-3'>
                                            Nội Bài
                                        </h5>
                                        <p class='airport-car__number text-center mt-2'>
                                            200+ xe
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div class='carousel-item'>
                                <a href='' class='airport-item'>
                                    <div class='card item-airport'>
                                        <img
                                            src='https://n1-cstg.mioto.vn/g/2023/06/05/10/GIEL2NWG.jpg'
                                            class='airport-img mx-auto img-fluid rounded-circle'
                                            alt='...'
                                        />
                                    </div>
                                </a>
                            </div>

                            <div class='carousel-item'>
                                <a href='' class='airport-item'>
                                    <div class='card item-airport'>
                                        <img
                                            src='https://n1-cstg.mioto.vn/g/2023/05/20/13/FM9PZCVS.jpg'
                                            class='airport-img mx-auto img-fluid rounded-circle'
                                            alt='...'
                                        />
                                    </div>
                                </a>
                            </div>

                            <div class='carousel-item '>
                                <a href='' class='airport-item'>
                                    <div class='card item-airport'>
                                        <img
                                            src='https://n1-cstg.mioto.vn/g/2023/05/20/13/FM9PZCVS.jpg'
                                            class='airport-img mx-auto img-fluid rounded-circle'
                                            alt='...'
                                        />
                                    </div>
                                </a>
                            </div>
                            <div class='carousel-item'>
                                <a href='' class='airport-item'>
                                    <div class='card item-airport'>
                                        <img
                                            src='https://n1-cstg.mioto.vn/g/2023/07/01/13/D7HKIAHK.jpg'
                                            class='airport-img mx-auto img-fluid rounded-circle'
                                            alt='...'
                                        />
                                    </div>
                                </a>
                            </div>
                        </Slider>
                        {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
    //   }
}

export default PlaceComp;

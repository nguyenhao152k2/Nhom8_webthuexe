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
        <div className='prominent-place'>
            <div className='container p-60 bg-primary'>
                <div className='prominent-title text-center '>
                    <h1 className='title'>Địa Điểm Nổi Bật</h1>
                </div>

                {/* <div className="prominent-container"> */}
                {/* Address slide */}
                {/* <div className="address-slide pt-48"> */}
                {/* <div id="address-carousel" className="carousel slide" > */}
                {/* <div className="carousel-inner"> */}
                <Slider
                    ref={(slider) => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    <div className='carousel-item active'>
                        <div className='item-place card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/06/19/10/1IYDW45W.jpg'
                                className='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='item-place card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/06/05/10/GIEL2NWG.jpg'
                                className='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='item-place card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/05/20/13/FM9PZCVS.jpg'
                                className='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='item-place card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/05/20/13/FM9PZCVS.jpg'
                                className='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <div className='item-place card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/07/01/13/D7HKIAHK.jpg'
                                className='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>
                </Slider>

                <button
                    className='carousel-prev'
                    type='button'
                    data-bs-target='#address-carousel'
                    data-bs-slide='prev'
                    onClick={previous}
                >
                    <span className='carousel-icon' aria-hidden='true'>
                        <FaChevronLeft />
                    </span>
                    {/* <span className='visually-hidden'>Previous</span> */}
                </button>
                <button
                    className='carousel-next'
                    type='button'
                    data-bs-target='#address-carousel'
                    data-bs-slide='next'
                    onClick={next}
                >
                    <span className='carousel-icon' aria-hidden='true'>
                        <FaChevronRight />
                    </span>
                    {/* <span className='visually-hidden'>Next</span> */}
                </button>
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
                {/* Airport slide */}
                <div className='airport-slide row row-cols-xl-2 row-cols-xs-1 m-0 pt-48'>
                    <div className='airport-header col-xl-2 col-sm-3 col-xs-12 bg-primary'>
                        <h2 className='airport-title'>Giao xe tại sân bay</h2>
                        <div className='airport-btn'>
                            <button
                                className='airport-prev me-3'
                                type='button'
                                data-bs-target='#airport-carousel'
                                data-bs-slide='prev'
                                onClick={previous}
                            >
                                <span className='airport-icon'>
                                    <FaChevronLeft />
                                </span>
                            </button>
                            <button
                                className='airport-next'
                                type='button'
                                data-bs-target='#airport-carousel'
                                data-bs-slide='next'
                                onClick={next}
                            >
                                <span className='airport-icon'>
                                    <FaChevronRight />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='airport-slide__item col-xl-10 col-sm-9 col-xs-12 p-0'>
                        {/* <div id='airport-carousel' className='carousel slide'> */}
                        {/* <div className='carousel-inner'> */}
                        <Slider
                            ref={(slider) => {
                                sliderRef = slider;
                            }}
                            {...settings}
                        >
                            <div className='carousel-item'>
                                <a href='' className='airport-item'>
                                    <div className='card item-airport'>
                                        <img
                                            src='https://n1-cstg.mioto.vn/g/2023/06/19/10/1IYDW45W.jpg'
                                            className='airport-img mx-auto img-fluid rounded-circle'
                                            alt='...'
                                        />
                                        <h5 className='airport-address text-center mt-3'>
                                            Nội Bài
                                        </h5>
                                        <p className='airport-car__number text-center mt-2'>
                                            200+ xe
                                        </p>
                                    </div>
                                </a>
                            </div>

                            <div className='carousel-item'>
                                <a href='' className='airport-item'>
                                    <div className='card item-airport'>
                                        <img
                                            src='https://n1-cstg.mioto.vn/g/2023/06/05/10/GIEL2NWG.jpg'
                                            className='airport-img mx-auto img-fluid rounded-circle'
                                            alt='...'
                                        />
                                    </div>
                                </a>
                            </div>

                            <div className='carousel-item'>
                                <a href='' className='airport-item'>
                                    <div className='card item-airport'>
                                        <img
                                            src='https://n1-cstg.mioto.vn/g/2023/05/20/13/FM9PZCVS.jpg'
                                            className='airport-img mx-auto img-fluid rounded-circle'
                                            alt='...'
                                        />
                                    </div>
                                </a>
                            </div>

                            <div className='carousel-item '>
                                <a href='' className='airport-item'>
                                    <div className='card item-airport'>
                                        <img
                                            src='https://n1-cstg.mioto.vn/g/2023/05/20/13/FM9PZCVS.jpg'
                                            className='airport-img mx-auto img-fluid rounded-circle'
                                            alt='...'
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className='carousel-item'>
                                <a href='' className='airport-item'>
                                    <div className='card item-airport'>
                                        <img
                                            src='https://n1-cstg.mioto.vn/g/2023/07/01/13/D7HKIAHK.jpg'
                                            className='airport-img mx-auto img-fluid rounded-circle'
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

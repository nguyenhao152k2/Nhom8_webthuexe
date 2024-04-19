import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
// import '../css/Promo.css';

function PromoComp() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
        ],
    };
    return (
        <div className='promo'>
            {/* <div className='bg-light'> */}
                <div className='promo-title text-center'>
                    <h1 className='title'>Chương Trình Khuyến Mãi</h1>
                    <h5 className='sub-title pt-16'>
                        Nhận nhiều ưu đãi hấp dẫn từ T4B.vn
                    </h5>
                </div>
                <Slider
                    ref={(slider) => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    <div className='carousel-item'>
                        <div className='item-promo card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/06/19/10/1IYDW45W.jpg'
                                className='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='item-promo card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/06/05/10/GIEL2NWG.jpg'
                                className='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='item-promo card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/07/03/10/1YL6LLAX.jpg'
                                className='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='item-promo card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/05/20/13/FM9PZCVS.jpg'
                                className='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='item-promo card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/07/10/11/6QC4IFAF.jpg'
                                className='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='item-promo card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/05/20/13/FM9PZCVS.jpg'
                                className='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='item-promo card'>
                            <img
                                src='https://n1-cstg.mioto.vn/g/2023/07/01/13/D7HKIAHK.jpg'
                                className='card-img-top fix-img'
                                alt='...'
                            />
                        </div>
                    </div>
                </Slider>

                {/* <div className='promo-btn'> */}
                <button
                    className='promo-prev'
                    type='button'
                    data-bs-target='#airport-carousel'
                    data-bs-slide='prev'
                    onClick={previous}
                >
                    {/* <i
                            className='fa-solid fa-chevron-left'
                            // aria-hidden='true'
                        ></i> */}
                    <span className='promo-icon'>
                        <FaChevronLeft />
                    </span>
                    {/* <span className='visually-hidden'>Previous</span> */}
                </button>
                <button
                    className='promo-next'
                    type='button'
                    data-bs-target='#airport-carousel'
                    data-bs-slide='next'
                    onClick={next}
                >
                    <span
                        className='promo-icon'
                        // aria-hidden='true'
                    >
                        <FaChevronRight />
                    </span>
                    {/* <span className='visually-hidden'>Next</span> */}
                </button>
                {/* </div> */}

                {/* </div> */}
                {/* </div>
                    </div> */}
            {/* </div> */}
        </div>
    );
}

export default PromoComp;

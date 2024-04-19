import React from 'react';
import {Link} from 'react-router-dom'
// import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage';


const CardComponent = () => {
    return (
        <Link to='/product-details'>
            {/* <div className='featured-item  col-xs col-md-6 col-lg-4'> */}
                <div class='item-car card col-xxl-12'>
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
                                <span class='tag-item'>Giao xe tận nơi</span>
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
                                        <span class='price-special'>746K</span>
                                    </div>
                                    <div class='total-price'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </Link>
    );
};

export default CardComponent;

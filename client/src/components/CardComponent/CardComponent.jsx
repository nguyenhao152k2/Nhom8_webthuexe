import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productApi from '../../api/productApi';
import './CarComp.css';

const CardComponent = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchProductList = async () => {
            try {
                const response = await productApi.getAll();
                console.log(response);
                setProductList(response.data);
            } catch (err) {
                console.log('Lấy danh sách dữ liệu sản phẩm thất bại:', err);
            }
        };
        fetchProductList();
    }, []);

    return (
        <>
            {productList?.map((product, index) => (
                <Link
                    key={product.id}
                    to={`/product/${product.id_xe}`}
                    className='item-car'
                >
                    <div key={product.id_xe} className='card col-xxl-12'>
                        <div className='item-box'>
                            <div className='img-car'>
                                <img
                                    className='card-img-top fix-img'
                                    src={product.hinhanh}
                                    alt=''
                                />

                                <span className='label-pos'>
                                    <span className='rent'>Đặt xe nhanh</span>
                                    <span className='rent'>Miễn thế chấp</span>
                                </span>
                            </div>
                            <div className='desc-car'>
                                <div className='desc-tag'>
                                    <span className='tag-item'>
                                        {product.hopso}
                                    </span>
                                    <span className='tag-item'>
                                        {product.hinhthucchothue}
                                    </span>
                                </div>
                                <div className='desc-name'>
                                    <p>{product.tenxe}</p>
                                    <div className='wrap-icon'>
                                        <i className='fa-solid fa-shield-halved'></i>
                                    </div>
                                </div>
                                <div className='desc-address'>
                                    <div className='wrap-icon'>
                                        <i className='fa-solid fa-location-dot'></i>
                                    </div>
                                    <p>{product.diachi}</p>
                                </div>
                                <div className='hr'></div>
                                <div className='desc-info-price'>
                                    <div className='info'>
                                        <div className='wrap-icon'>
                                            <i className='fa-solid fa-star'></i>
                                        </div>
                                        <span className='info'>5.0</span>
                                        <span className='dot'>
                                            <i className='fa-solid fa-circle'></i>
                                        </span>
                                        <div className='wrap-icon'>
                                            <i className='fa-solid fa-suitcase-rolling'></i>
                                        </div>
                                        <span className='info'>
                                            {product.sochuyen} chuyến
                                        </span>
                                    </div>
                                    <div className='wrap-price'>
                                        <div className='price'>
                                            <span className='price-special'>
                                                {product.giaxe}K / ngày
                                            </span>
                                        </div>
                                        <div className='total-price'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default CardComponent;

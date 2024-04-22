import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import productApi from '../../api/productApi';
import orderCar from '../../api/orderCar';

// class ProductDetailsComponent extends React.Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div></div>
//         )
//     }
// }

const ProductDetailsComponent = () => {
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState([]);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await productApi.getById(id);
                console.log(response);
                setProductDetail(response._result);
            } catch (err) {
                console.log('Lấy dữ liệu sản phẩm thất bại:',err)
            }
        }
        fetchProductDetail();
    }, [id]);

    const [value, setValues] = useState({
        hinhthucnhanxe: '',
        ngaynhanxe: '',
        ngaytraxe: '',
        dongia: '',
        baohiem: '',
        thanhtien: '',
    });

    const navigate = useNavigate();

    const getValueP = document.getElementsByClassName('cost');
    for (let i = 0; i < getValueP.length; i++) {
        console.log(getValueP[i].textContent);
    }

    const handleChange = (e) => {
        const getValue = { ...value };
        getValue[e.target.name] = e.target.value;
        setValues(getValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        orderCar.potsOrderCar(value)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }
    return (
        <div
            key={productDetail.id_xe}
            className='detail-car row-col-xxl-2  d-flex '
        >
            <div className='content-detail col-xxl-8'>
                <div className='content-detail__box'>
                    <div className='info-car'>
                        <div className='car-img col-12'>
                            <img src={productDetail.hinhanh} alt='' />
                        </div>
                    </div>
                    <div className='name-car'>
                        <h3>{productDetail.tenxe}</h3>
                        <div className='outstanding-features'>
                            <p>Nhiên liệu: {productDetail.nhienlieu}</p>
                            <p>Hộp số: {productDetail.hopso}</p>
                            <p>Dung tích: {productDetail.dungtich}L</p>
                            <p>Số chỗ: {productDetail.socho} chỗ</p>
                            <p>
                                Nhiên liệu tiêu hao:{' '}
                                {productDetail.nhienlieutieuhao}L/100km
                            </p>
                        </div>
                    </div>

                    <div className='info-car-desc'>
                        <h6>Chủ xe</h6>
                        <h5>{productDetail.tenkhachhang}</h5>
                        <p>Số điện thoại: {productDetail.sodienthoai}</p>
                        <p>Địa chỉ: {productDetail.diachi}</p>
                    </div>

                    <div className='info-car-desc'>
                        <h6>Mô tả</h6>
                        <p>{productDetail.mota}</p>
                    </div>

                    <div className='info-car-desc'>
                        <h6>Giấy tờ thuê xe</h6>
                        <div className='required-papers'>
                            <div className='required-papers__item'>
                                <div className='type__item'>
                                    <p>Chọn 1 trong 2 hình thức</p>
                                </div>
                                <div className='type-content'>
                                    <img
                                        src='https://n1-cstg.mioto.vn/v4/p/m/icons/papers/gplx_cccd.png'
                                        alt=''
                                    />
                                    <div className='type-name'>
                                        <p>GPLX & CCSD gắn chip (đối chiếu)</p>
                                    </div>
                                </div>
                                <div className='type-content'>
                                    <img
                                        src='https://n1-cstg.mioto.vn/v4/p/m/icons/papers/gplx_passport.png'
                                        alt=''
                                    />
                                    <div className='type-name'>
                                        <p>GPLX & CCSD gắn chip (đối chiếu)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='info-car-desc'>
                        <h6>Tài sản thế chấp</h6>
                        <div className='required-papers'>
                            <p>
                                15 triệu (tiền mặt/chuyển khoản cho chủ xe khi
                                nhận xe) hoặc Xe máy (kèm cà vẹt gốc) giá trị 15
                                triệu
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='order-car col-xxl-4'>
                <div className='order-car__box'>
                    <h3 className='text-center'>Thuê xe và thủ tục</h3>

                    <form className='post'>
                        <div>
                            <h6>HÌNH THỨC NHẬN XE</h6>
                            <select
                                className='form-select'
                                id='floatingSelect'
                                aria-label='Floating label select example'
                                name='hinhthucnhanxe'
                                onChange={handleChange}
                            >
                                <option selected>Open this select menu</option>
                                <option value='1'>One</option>
                                <option value='2'>Two</option>
                                <option value='3'>Three</option>
                            </select>
                        </div>

                        <div>
                            <h6>NGÀY NHẬN XE</h6>
                            <input
                                type='date'
                                id='start'
                                className='w-100 p-1'
                                name='ngaynhanxe'
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <h6>NGÀY TRẢ XE</h6>
                            <input
                                type='date'
                                id='start'
                                className='w-100 p-1'
                                name='ngaytraxe'
                                onChange={handleChange}
                            />
                        </div>

                        <div className='price-container'>
                            <div className='price-item'>
                                <p>Đơn giá thuê: </p>
                                <p
                                    className='cost'
                                    name = 'dongia'
                                    onChange={handleChange}
                                >
                                    <span>{productDetail.giaxe}000/ngày</span>
                                </p>
                            </div>
                            <div className='price-item'>
                                <p>Bảo hiểm thuê xe: </p>
                                <p
                                    className='cost'
                                    name = 'baohiem'
                                    onChange={handleChange}
                                >
                                    <span>150000/ngày</span>
                                </p>
                            </div>
                            <div className='price-item'>
                                <p>Tổng cộng: </p>
                                <p className='cost'>
                                    <span>
                                        {productDetail.giaxe}000đ x 2ngày
                                    </span>
                                </p>
                            </div>
                            <div className='price-item total'>
                                <p>Thành tiền: </p>
                                <p
                                    className='cost'
                                    name='thanhtien'
                                    value={handleChange}
                                    onChange={ handleChange}
                                >
                                    <span>1500000đ</span>
                                </p>
                            </div>
                        </div>

                        <button
                            type='button'
                            className='btn btn-primary w-100 p-2 btn-order'
                            onClick={handleSubmit}
                        >
                            Thuê xe
                        </button>

                        <div className='surcharge'>
                            <p className='title text-primary'>
                                Phụ phí có thể phát sinh
                            </p>
                            <div className='surcharge-container'>
                                <div className='surcharge-item'>
                                    <div className='wrap-svg'>
                                        <i className='fas fa-info-circle'></i>
                                    </div>
                                    <div className='content'>
                                        <div className='content-item'>
                                            <p className='title'>
                                                Phí vượt giới hạn
                                            </p>
                                            <p className='cost'>4 000đ/km</p>
                                        </div>
                                        <div className='content-item'>
                                            <p>
                                                Phụ phí phát sinh nếu lộ trình
                                                di chuyển vượt quá
                                                <span>600 km</span> khi thuê xe{' '}
                                                <span>2 ngày</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='surcharge-item'>
                                    <div className='wrap-svg'>
                                        <i className='fas fa-info-circle'></i>
                                    </div>
                                    <div className='content'>
                                        <div className='content-item'>
                                            <p className='title'>Phí quá giờ</p>
                                            <p className='cost'>50 000đ/h</p>
                                        </div>
                                        <div className='content-item'>
                                            <p>
                                                Phụ phí phát sinh nếu hoàn trả
                                                xe trễ giờ. Trường hợp trễ quá
                                                <span>5 tiếng</span>, phụ phí
                                                thêm <span>1 ngày</span> thuê
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='surcharge-item'>
                                    <div className='wrap-svg'>
                                        <i className='fas fa-info-circle'></i>
                                    </div>
                                    <div className='content'>
                                        <div className='content-item'>
                                            <p className='title'>Phí vệ sinh</p>
                                            <p className='cost'>100 000đ</p>
                                        </div>
                                        <div className='content-item'>
                                            <p>
                                                Phụ phí phát sinh khi xe hoàn
                                                trả không đảm bảo vệ sinh (nhiều
                                                vết bẩn, bùn cát, sình lầy...)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='surcharge-item'>
                                    <div className='wrap-svg'>
                                        <i className='fas fa-info-circle'></i>
                                    </div>
                                    <div className='content'>
                                        <div className='content-item'>
                                            <p className='title'>Phí khử mùi</p>
                                            <p className='cost'>300 000đ</p>
                                        </div>
                                        <div className='content-item'>
                                            <p>
                                                Phụ phí phát sinh khi xe hoàn
                                                trả bị ám mùi khó chịu (mùi
                                                thuốc lá, thực phẩm nặng mùi...)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsComponent; 

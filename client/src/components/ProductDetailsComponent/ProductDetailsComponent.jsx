import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import productApi from '../../api/productApi';
import orderCar from '../../api/orderCar';

import DatePicker from 'react-datepicker';
import { addDays, nextDay, format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

// class ProductDetailsComponent extends React.Component {
//     render() {
//         console.log(this.props)
//         return (
//             <div></div>
//         )
//     }
// }
function CustomInput({ value, onClick }) {
    return (
        <div className='input-group'>
            <input type='text' className='form-control' value={value} onClick={onClick} readOnly/>
            <div className='input-group-append'>
                <span className='input-group-text'>
                    <FaCalendarAlt/>
                </span>
            </div>
        </div>
    )
}

const ProductDetailsComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [value, setValues] = useState({
        id_xe: id,
        hinhthucnhanxe: '',
        ngaynhanxe: '',
        ngaytraxe: '',
        dongia: '',
        baohiem: '',
        thanhtien: '',
        trangthai: 1,
    });

    const [productDetail, setProductDetail] = useState([]);
    const [checkCarBooked, setCheckCarBooked] = useState([]);
    const [isCarBooked, setIsCarBooked] = useState(false);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await productApi.getById(id);
                console.log(response._result);
                
                setProductDetail(response._result);
            } catch (err) {
                console.log('Lấy dữ liệu sản phẩm thất bại:', err);
            }
        };

        fetchProductDetail();
        // checkCarBookingStatus();
        // isCheckCarBooked();
    }, [id]);

    



    

    const minusDate = () => {
        const strDate = value.ngaynhanxe;
        // console.log(strDate);
        const endDate = value.ngaytraxe;
        // console.log(endDate);

        // Chuyển đổi chuỗi thành đối tượng Date
        const receiveDate = new Date(strDate);
        const returnDate = new Date(endDate);

        // Tính số mili giây giữa hai thời điểm
        const timeDiff = returnDate.getTime() - receiveDate.getTime();

        // Chuyển đổi số mili giây thành số ngày
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

        // console.log(daysDiff);
        return daysDiff;
    };

    const handleChange = (e) => {
        const getValue = { ...value };
        getValue[e.target.name] = e.target.value;
        console.log(getValue);
        setValues(getValue);
        // const aa = value.ngaynhanxe;
        // console.log('aaaaa', checkBookerCar);
    };

    // const isCheckCarBooked = () => {
    //     const checkBookerCar = checkCarBooked.find((item) => {
    //         return item === value;
    //     });
    //     console.log(checkBookerCar);
    //     setIsCarBooked(checkBookerCar);
    // };

    const handleDateChange = (date) => {
        const today = new Date();
        const getToDay = today.toDateString();
        const getNextDay = nextDay(getToDay, 1);

        setNgay(date);
        console.log(value.ngaynhanxe)
        console.log(value.ngaytraxe)
    };
    
    // const [ngay, setNgay] = useState({
    //     ngaynhanxe: '',
    //     ngaytraxe: '',
    // }); 
    const [ngay, setNgay] = useState(new Date()); 
    //Lấy giá trị ngày hiện tại và ngày kế tiếp
    // const getNextDay = () => {
    //     const today = new Date();
        
        
    //     // nextDay.setDate(ngay.getDate() + day);

    //     return nextDay;

    //     // const dd = String(today.getDate()).padStart(2, '0');
    //     // const mm = String(today.getMonth() + 1).padStart(2, '0');
    //     // const yyyy = today.getFullYear();
    //     // console.log(mm);

    //     // const fmStrDate =
    //     //     today.getMonth() +
    //     //     '/' +
    //     //     today.getDate() +
    //     //     '/' +
    //     //     today.getFullYear(); //format(currentDate, 'mm/dd/yyyy');
    //     //return `${dd}/${mm}/${yyyy}`; // fmStrDate;
    // };
    // const checkBookerCar = isCarBooked.find((item, index) => {
    //     return item && item.id_xe === id;
    // })
    // const checkDuplicateBooking = () => {
    //     // Gửi yêu cầu kiểm tra thông tin trước khi đặt xe
    //     orderCar
    //         .checkBookerCar(value)
    //         .then((response) => {
    //             const isDuplicate = response.data.isDuplicate;
    //             if (isDuplicate) {
    //                 alert('Thông tin đặt xe trùng lặp. Không thể đặt xe.');
    //             } else {
    //                 // Nếu không có thông tin trùng lặp, tiến hành đặt xe
    //                 bookCar();
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Lỗi khi kiểm tra trùng lặp:', error);
    //             alert('Đã có lỗi xảy ra. Vui lòng thử lại sau!');
    //         });
    // };

    const bookCar = () => {
        
    }

    const checkCarBookingStatus = async () => {
        // Gọi API để kiểm tra trạng thái đặt xe
        try {
            const response = await orderCar.getAll();
            const apiDataArray = response._data;
            console.log(apiDataArray);

            const { id_xe, ngaynhanxe, ngaytraxe, trangthai } = value;

            console.log(ngaytraxe)
            const matchedRecord = apiDataArray.some(
                (item) => {
                    const idxe = id;
                    const dateStart = format(new Date(item.ngaynhanxe), 'yyyy-MM-dd');
                    const dateEnd = format(new Date(item.ngaytraxe), 'yyyy-MM-dd');
                    console.log(dateStart);
                    console.log(dateEnd);
                    console.log(idxe);

                    // return item.id_xe === id_xe &&
                    //  === ngaynhanxe &&
                    // format(new Date(item.ngaytraxe), 'yyyy-MM-dd') === ngaytraxe
                    return idxe === id_xe && dateStart === ngaynhanxe && dateEnd === ngaytraxe
                    
                });
            console.log(matchedRecord);

            if (matchedRecord ) {
                setIsCarBooked(true);
                console.log('Xe đã được đặt!');
            } else {
                setIsCarBooked(false);
                console.log('Xe có thể đặt')
            }
            // setCheckCarBooked(response._result);

            // console.log(checkCarBooked);
        } catch (error) {
            // Xử lý lỗi nếu có
            console.error('Lỗi khi kiểm tra trạng thái đặt xe:', error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        checkCarBookingStatus();
        if (isCarBooked == true) {
            alert("Xe đã được đặt, bạn vui lòng chọn một chiếc xe khác nhé!");
        } else {
            orderCar
                .potsOrderCar(value)
                .then((res) => {
                    console.log('res', res);
                    navigate('/');
                    minusDate();
                    // setIsCarBooked(true);
                    alert('Chúc mừng bạn đã đặt xe thành công!');
                })
                .catch((err) => console.log(err));
        }
            // isCheckCarBooked();
            // alert("Chúc mừng bạn đặt xe thành công");
        // // checkDuplicateBooking();
        // // if (isCheckCarBooked) {
        // //     alert('Xe đã được đặt!')
        // // } else {
        
        // // }
        // console.log(isCarBooked);
    };

    const totalPayment = () => {
        //lấy dữ liệu ngày và đơn giá thuê
        const date = minusDate(); //parseFloat(aminusDate())
        const price = parseFloat(value.dongia);
        const insurance = parseFloat(value.baohiem);

        // tính tổng thanh toán
        const total = price * date + insurance * date;
        return total;
    };

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
                            <p>
                                Dung tích:{' '}
                                {parseFloat(productDetail.dungtich).toFixed(1)}L
                            </p>
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
                                <option selected>Chọn hình thức nhận xe</option>
                                <option value='Giao xe tận nơi' >
                                    Giao xe tận nơi
                                </option>
                                <option value='Giao xe tại nhà chủ xe'>
                                    Giao xe tại nhà chủ xe
                                </option>
                            </select>
                        </div>

                        <div>
                            <h6>NGÀY NHẬN XE</h6>
                            {/* <label className='start-date'>
                                <DatePicker
                                    selected={
                                        (value.ngaynhanxe = ngay.toDateString())
                                    }
                                    dateFormat='dd/MM/yyyy'
                                    onChange={handleDateChange}
                                    customInput={<CustomInput />}
                                    minDate={new Date()}
                                />
                            </label> */}
                            <input
                            
                                type='date'
                                id='start'
                                className='w-100 p-1'
                                name='ngaynhanxe'
                                // value={value.ngaynhanxe = ngay.toDateString()}
                                onChange={handleChange}
                                placeholder=''
                                customInput = {<CustomInput/>}
                            />
                        </div>

                        <div>
                            <h6>NGÀY TRẢ XE</h6>
                            {/* <label className='end-date'>
                                <DatePicker
                                    selected={
                                        (value.ngaytraxe =
                                            nextDay(ngay.getDate(), 1))
                                    }
                                    dateFormat='dd/MM/yyyy'
                                    onChange={handleDateChange}
                                    customInput={<CustomInput />}
                                    minDate={new Date()}
                                />
                            </label> */}
                            <input
                                type='date'
                                id='start'
                                className='w-100 p-1'
                                name='ngaytraxe'
                                // value={value.ngaytraxe}
                                placeholder=''
                                onChange={handleChange}
                            />
                            {/* <input type="text" name='ngaytraxe' onFocus={this.type = 'date' } onBlur={if(!this.value) this.type = 'text'} /> */}
                        </div>

                        <div className='form-group price-container'>
                            <div className='price-item'>
                                {/* <p>Đơn giá thuê: </p>
                                <p
                                    className='cost'
                                    name = 'dongia'
                                    onChange={handleChange}
                                >
                                    <input type="text" id="fname" name="fname"></input>
                                    <span>{productDetail.giaxe}000/ngày</span>
                                </p> */}
                                <p>Đơn giá thuê:</p>
                                <input
                                    className='text-end border-0'
                                    type='text'
                                    id='dongia'
                                    name='dongia'
                                    value={
                                        (value.dongia =
                                            productDetail.giaxe + '000 / ngày')
                                    }
                                    onChange={(e) => {
                                        handleChange(e);
                                    }}
                                    readOnly
                                >
                                    {/* {`${ productDetail.giaxe }`} */}
                                </input>
                            </div>
                            <div className='price-item'>
                                {/* <p>Bảo hiểm thuê xe: </p>
                                <p
                                    className='cost'
                                    name='baohiem'
                                    onChange={handleChange}
                                >
                                    <span>150000/ngày</span>
                                </p> */}
                                <p htmlFor='baohiem'>Bảo hiểm thuê xe:</p>
                                <div>
                                    <input
                                        className='text-end border-0'
                                        type='text'
                                        id='baohiem'
                                        name='baohiem'
                                        value={(value.baohiem = 150000)}
                                        onChange={handleChange}
                                        readOnly={true}
                                    ></input>
                                    <span> / ngày</span>
                                </div>
                            </div>
                            <div className='price-item'>
                                <p>Tổng cộng: </p>
                                <p className='cost'>
                                    <span>
                                        {productDetail.giaxe}000đ x{' '}
                                        {minusDate()} ngày
                                    </span>
                                </p>
                            </div>
                            <div className='price-item total'>
                                {/* <p>Thành tiền: </p>
                                <p
                                    className='cost'
                                    name='thanhtien'
                                    value={handleChange}
                                    onChange={handleChange}
                                >
                                    <span>1500000đ</span>
                                </p> */}
                                <label htmlFor='thanhtien'>Thành tiền:</label>
                                <input
                                    className='text-end border-0'
                                    type='text'
                                    id='thanhtien'
                                    name='thanhtien'
                                    value={
                                        (value.thanhtien = totalPayment() + 'đ')
                                    }
                                    onChange={handleChange}
                                    readOnly
                                ></input>
                                {/* <input
                                    type='hidden'
                                    name='id_xe'
                                    value={(value.id_xe = id)}
                                />
                                <input
                                    type='hidden'
                                    name='trangthai'
                                    value={(value.trangthai = 1)}
                                /> */}
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

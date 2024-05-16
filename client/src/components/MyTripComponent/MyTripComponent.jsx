import React, { useEffect, useState } from 'react';
import myTripApi from '../../api/myTripApi';
import './MyTripComponent.css';

const MyTripComponent = () => {
    const [toggleState, setToggleState] = useState(1);
    const [myTrip, setMyTrip] = useState([]);
    const [historyTrip, setHistoryTrip] = useState([
        // {
        //     tenxe: 'oto',
        //     socho: 4,
        // },
    ]);

    useEffect(() => {
        const fetchMyTrip = async () => {
            try {
                const response = await myTripApi.getMyTrip();
                console.log(response);
                setMyTrip(response._data);

                const hisTrip = await myTripApi.getHistoryTrip();
                console.log(hisTrip);
                setHistoryTrip(hisTrip._data);
            } catch (error) {
                console.log('Lấy danh sách thất bại: ', error);
            }
        };
        fetchMyTrip();
    }, []);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const notMyTrip = () => {
        return (
            <>
                <img
                    className='d-flex mx-auto'
                    src='https://www.mioto.vn/static/media/empty-trip.8f191e42.svg'
                    alt=''
                />
                <p className='text-center fs-5 fw-bold'>Bạn chưa có chuyến</p>
            </>
        );
        
    };

    const crrMyTrip = (data) => {
        return data?.map((trip) => (
            <>
                <div key={trip.id_xe} class='card mb-3 w-100'>
                    {/* <p>{myTrip.id_xe}</p> */}
                    <div class='row g-0'>
                        <div class='col-md-3 h-auto'>
                            <img
                                src={trip.hinhanh}
                                class='img-fluid rounded-3 mx-auto d-block p-2'
                                alt='...'
                            />
                        </div>
                        <div class='col-md-7'>
                            <div class='card-body p-2'>
                                <h6 class='card-title'>Tên xe:{trip.tenxe}</h6>
                                <p class='card-text text-start'>
                                    Ngày nhận xe:
                                    {trip.ngaynhanxe}
                                </p>
                                <p class='card-text text-start'>
                                    Ngày trả xe:
                                    {trip.ngaytraxe}
                                </p>
                                <p class='card-text text-start'>Số ngày: </p>
                                <p class='card-text text-start'>
                                    Tổng tiền:
                                    {trip.thanhtien}
                                </p>
                                <div class='mt-2 d-flex gap-1'>
                                    <button
                                        type='button'
                                        class='btn btn-success'
                                    >
                                        Trả xe
                                    </button>
                                    <button
                                        type='button'
                                        class='btn btn-danger'
                                    >
                                        Hủy chuyến
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ));
    }

    return (
        <div class='account-section sec space'>
            <div class='container'>
                <div class='account-container'>
                    <div class='sidebar-account'>
                        <div>
                            <div></div>
                            <div class='sidebar-account-sticky'>
                                <div class='title'>
                                    <h4>Xin chào bạn</h4>
                                </div>
                                <div class='sidebar'>
                                    <a href='' class='sidebar-item'>
                                        <div class='wrap-svg'>
                                            <i class='fa-regular fa-user'></i>
                                        </div>
                                        <p>Tài khoản của tôi</p>
                                    </a>
                                    <a href='' class='sidebar-item'>
                                        <div class='wrap-svg'>
                                            <i class='fa-regular fa-heart'></i>
                                        </div>
                                        <p>Xe yêu thích</p>
                                    </a>
                                    <a href='' class='sidebar-item'>
                                        <div class='wrap-svg'>
                                            <i class='fa-solid fa-car-rear'></i>
                                        </div>
                                        <p>Xe của tôi</p>
                                    </a>
                                    <a href='' class='sidebar-item'>
                                        <div class='wrap-svg'>
                                            <i class='fa-solid fa-map'></i>
                                        </div>
                                        <p>Chuyến của tôi</p>
                                    </a>
                                    <a href='' class='sidebar-item'>
                                        <div class='wrap-svg'>
                                            <i class='fa-solid fa-file-invoice'></i>
                                        </div>
                                        <p>Đơn hàng thuê xe dài hạn</p>
                                    </a>
                                    <a href='' class='sidebar-item'>
                                        <div class='wrap-svg'>
                                            <i class='fa-solid fa-gift'></i>
                                        </div>
                                        <p>Quà tặng</p>
                                    </a>
                                    <a href='' class='sidebar-item'>
                                        <div class='wrap-svg'>
                                            <i class='fa-solid fa-building'></i>
                                        </div>
                                        <p>Địa chỉ của tôi</p>
                                    </a>
                                    <a href='' class='sidebar-item'>
                                        <div class='wrap-svg'>
                                            <i class='fa-solid fa-lock'></i>
                                        </div>
                                        <p>Đổi mật khẩu</p>
                                    </a>
                                    <div class='sidebar-item'>
                                        <div class='wrap-svg'>
                                            <i class='fa-solid fa-right-from-bracket'></i>
                                        </div>
                                        <p>Đăng xuất</p>
                                    </div>
                                    <a href='' class='sidebar-item'>
                                        <div class='wrap-svg'>
                                            <i class='fa-regular fa-trash-can'></i>
                                        </div>
                                        <p>Yêu cầu xóa tài khoản</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class='dropdown-sidebar custom-dropdown'>
                            <div class='dropdown-selected'>
                                <div class='wrap-svg'>
                                    <img src='' alt='' />
                                </div>
                                <p>Chuyến của tôi</p>
                            </div>
                        </div>
                    </div>

                    <div class='content-account'>
                        <div class='content-title'>
                            <h4>Chuyến của tôi</h4>
                        </div>
                        <div class='mytrips-mode'>
                            <div class='tab-mode'>
                                <div
                                    class={
                                        toggleState === 1
                                            ? 'tab-mode__item active'
                                            : 'tab-mode__item'
                                    }
                                    onClick={() => toggleTab(1)}
                                >
                                    Chuyến hiện tại
                                </div>
                                <div
                                    class={
                                        toggleState === 2
                                            ? 'tab-mode__item active'
                                            : 'tab-mode__item'
                                    }
                                    onClick={() => toggleTab(2)}
                                >
                                    Lịch sử chuyến
                                </div>
                            </div>
                        </div>

                        <div class='list-car my-trips'>
                            <div
                                className={
                                    toggleState === 1
                                        ? 'trip-content active'
                                        : 'trip-content'
                                }
                            >
                                {myTrip?.length === 0 ? notMyTrip() : crrMyTrip(myTrip)}
                                
                                
                            </div>

                            <div
                                className={
                                    toggleState === 2
                                        ? 'trip-content active'
                                        : 'trip-content'
                                }
                            >
                                {historyTrip?.length === 0
                                    ? notMyTrip()
                                    : crrMyTrip(historyTrip)}
                            </div>
                            <div class='empty-container'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
// style={{padding-bottom: 0px;}} style="transform: translateZ(0px);"
export default MyTripComponent;

import React from 'react';
// import '../css/Banner.css';


function BannerComponent() {
    return (
        // Banner 
        <div className="banner ">
            <div className="banner-background rounded-4">
                <h1 className="banner-text text-center ">T4B.vn - Cùng Bạn Trên Mọi Nẻo Đường</h1>
            </div>

            <div className="search-option ">
                <div className="option bg-primary rounded-top-4 p-3 text-center">
                        <div className="option-item me-1">
                            <i className="fa-solid fa-car mx-1"></i>
                            <span className="">
                                Xe tự lái

                            </span>
                        </div>
                        <div className="vr vr-0 vr-search"></div>
                        <div className="option-item ms-1">
                            <i className="fa-brands fa-redhat mx-1"></i>
                            <span className="">
                                Xe có tài xế

                            </span>
                        </div>
                </div>
                <div className="search bg-white border border-warning">
                    <div className="search-form row m-0 container py-4">
                        <div className="search-form__item address col-xl ">
                            <p className="search-text ">
                                <i className="fa-solid fa-location-dot me-3 car-option__icon"></i>
                                Địa điểm
                            </p>
                            <input type="text" className="search-value p-2" placeholder="Nhập địa chỉ thuê xe"/>
                        </div>
                        <div className="vr vr-1 p-0"></div>
                        <div className="search-form__item start-day col-xl col-md">
                            <p className="search-text ">
                                <i className="fa-regular fa-calendar-days me-3 car-option__icon"></i>
                                Ngày bắt đầu
                            </p>
                            <input type="datetime-local" className="search-time py-2" name="" id="" />
                            
                        </div>
                        <div className="vr vr-2 p-0"></div>
                        <div className="search-form__item end-day col-xl col-md">
                            <p className="search-text">
                                <i className="fa-regular fa-calendar-days me-3 car-option__icon"></i>
                                Ngày kết thúc
                            </p>
                            <input type="datetime-local" className="search-time py-2" name="" id=""/>
                        </div>
                        <div className="btn-search col-xl-1 col-lg-2 d-flex align-items-center ">
                            <button type="button" className="btn btn-success  f-start">Tìm xe</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerComponent;
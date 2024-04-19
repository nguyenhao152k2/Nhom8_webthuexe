import React from 'react';
// import '../css/Banner.css';


function BannerComponent() {
    return (
        // Banner 
        <div class="banner ">
            <div class="banner-background rounded-4">
                <h1 class="banner-text text-center ">T4B.vn - Cùng Bạn Trên Mọi Nẻo Đường</h1>
            </div>

            <div class="search-option ">
                <div class="option bg-primary rounded-top-4 p-3 text-center">
                        <div class="option-item me-1">
                            <i class="fa-solid fa-car mx-1"></i>
                            <span class="">
                                Xe tự lái

                            </span>
                        </div>
                        <div class="vr vr-0 vr-search"></div>
                        <div class="option-item ms-1">
                            <i class="fa-brands fa-redhat mx-1"></i>
                            <span class="">
                                Xe có tài xế

                            </span>
                        </div>
                </div>
                <div class="search bg-white border border-warning">
                    <div class="search-form row m-0 container py-4">
                        <div class="search-form__item address col-xl ">
                            <p class="search-text ">
                                <i class="fa-solid fa-location-dot me-3 car-option__icon"></i>
                                Địa điểm
                            </p>
                            <input type="text" class="search-value p-2" placeholder="Nhập địa chỉ thuê xe"/>
                        </div>
                        <div class="vr vr-1 p-0"></div>
                        <div class="search-form__item start-day col-xl col-md">
                            <p class="search-text ">
                                <i class="fa-regular fa-calendar-days me-3 car-option__icon"></i>
                                Ngày bắt đầu
                            </p>
                            <input type="datetime-local" class="search-time py-2" name="" id="" />
                            
                        </div>
                        <div class="vr vr-2 p-0"></div>
                        <div class="search-form__item end-day col-xl col-md">
                            <p class="search-text">
                                <i class="fa-regular fa-calendar-days me-3 car-option__icon"></i>
                                Ngày kết thúc
                            </p>
                            <input type="datetime-local" class="search-time py-2" name="" id=""/>
                        </div>
                        <div class="btn-search col-xl-1 col-lg-2 d-flex align-items-center ">
                            <button type="button" class="btn btn-success  f-start">Tìm xe</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerComponent;
import React from 'react';
import './ProductDetails.css';

const ProductDetailsComponent = () => {
  return (
    <div class="detail-car row-col-xxl-2  d-flex ">
                <div class="content-detail col-xxl-8">
                    <div class="content-detail__box">
                        <div class="info-car">
                            <div class="car-img col-12">
                                <img
                                    src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2013/p/g/2024/00/02/10/CuvpbCMBtk-rfCTtRIt1PQ.jpg"
                                    alt=""
                                />
                            </div>
    
                        </div>
                        <div class="name-car">
                            <h3>MAZDA CX-5 2020</h3>
                            <div class="outstanding-features">
                                <p>Nhiên liệu: Xăng</p>
                                <p>Hộp số: Số tự động</p>
                                <p>Dung tích: 2.0L</p>
                                <p>Số chỗ: 5 chỗ</p>
                                <p>Nhiên liệu tiêu hao: 8L/100km</p>
                            </div>
                        </div>
    
                        <div class="info-car-desc">
                            <h6>Chủ xe</h6>
                                <h5>Nguyễn Văn A</h5>
                                <p>Số điện thoại: 0987783246</p>
                                <p>Địa chỉ: Hà Nội</p>
                        </div>
    
                        <div class="info-car-desc">
                            <h6>Mô tả</h6>
                            <p>
                                Xe dòng cao cấp Mazda CX9 AWD (grand touring), 7
                                chỗ, rộng ngồi thoải mái không say xe. Số tự động 6
                                cấp, V3.7. Xe thưởng xuyên bảo dưỡng, thay khung gầm
                                đi êm ái như xe sang. Các tính năng cao cấp như: gạt
                                mưa tự động, điều hòa 2 vùng, đèn xe tự động, cửa sổ
                                trời, lùi xe kính hậu tự động, camera lùi, cam cập
                                lề, cảm biến trước sau, cruise control, cảm biến
                                lốp,... Trang bị đầu android: Camera hành trình,
                                vietmap, android auto, apple carplay, google map,...
                                Tiêu thụ: 11l/100km đường trường.
                            </p>
                        </div>
    
                        <div class="info-car-desc">
                            <h6>Giấy tờ thuê xe</h6>
                            <div class="required-papers">
                                <div class="required-papers__item">
                                    <div class="type__item">
                                        <p>Chọn 1 trong 2 hình thức</p>
                                    </div>
                                    <div class="type-content">
                                        <img
                                            src="https://n1-cstg.mioto.vn/v4/p/m/icons/papers/gplx_cccd.png"
                                            alt=""
                                        />
                                        <div class="type-name">
                                            <p>GPLX & CCSD gắn chip (đối chiếu)</p>
                                        </div>
                                    </div>
                                    <div class="type-content">
                                        <img
                                            src="https://n1-cstg.mioto.vn/v4/p/m/icons/papers/gplx_passport.png"
                                            alt=""
                                        />
                                        <div class="type-name">
                                            <p>GPLX & CCSD gắn chip (đối chiếu)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="info-car-desc">
                            <h6>Tài sản thế chấp</h6>
                            <div class="required-papers">
                                <p>
                                    15 triệu (tiền mặt/chuyển khoản cho chủ xe khi
                                    nhận xe) hoặc Xe máy (kèm cà vẹt gốc) giá trị 15
                                    triệu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="order-car col-xxl-4">
                    <div class="order-car__box">
                        <h3 class="text-center">Thuê xe và thủ tục</h3>
    
                        <h6>HÌNH THỨC NHẬN XE</h6>
                        <select
                            class="form-select"
                            id="floatingSelect"
                            aria-label="Floating label select example"
                        >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <h6>THỜI GIAN NHẬN</h6>
                        <input type="date" id="start" class="w-100 p-1" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31"/>
    
                        <h6>THỜI GIAN TRẢ</h6>
                        <input type="date" id="start" class="w-100 p-1" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31"/>
                        <div class="price-container">
                            <div class="price-item">
                                <p>Đơn giá thuê: </p>
                                <p class="cost"><span>1500000/ngày</span></p>
                            </div>
                            <div class="price-item">
                                <p>Bảo hiểm thuê xe: </p>
                                <p class="cost"><span>150000/ngày</span></p>
                            </div>
                            <div class="price-item">
                                <p>Tổng cộng: </p>
                                <p class="cost"><span>1500000đ x 2ngày</span></p>
                            </div>
                            <div class="price-item total">
                                <p>Thành tiền: </p>
                                <p class="cost"><span>1500000đ</span></p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary w-100 p-2 btn-order">Thuê xe</button>
                        <div class="surcharge">
                            <p class="title text-primary">Phụ phí có thể phát sinh</p>
                            <div class="surcharge-container">
                                <div class="surcharge-item">
                                    <div class="wrap-svg">
                                        <i class="fas fa-info-circle"></i>
                                    </div>
                                    <div class="content">
                                        <div class="content-item">
                                            <p class="title">Phí vượt giới hạn</p>
                                            <p class="cost">4 000đ/km</p>
                                        </div>
                                        <div class="content-item">
                                            <p>Phụ phí phát sinh nếu lộ trình di chuyển vượt quá
                                                <span>600 km</span> khi thuê xe <span>2 ngày</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
    
                                <div class="surcharge-item">
                                    <div class="wrap-svg">
                                        <i class="fas fa-info-circle"></i>
                                    </div>
                                    <div class="content">
                                        <div class="content-item">
                                            <p class="title">Phí quá giờ</p>
                                            <p class="cost">50 000đ/h</p>
                                        </div>
                                        <div class="content-item">
                                            <p>Phụ phí phát sinh nếu hoàn trả xe trễ giờ. Trường hợp trễ quá
                                                <span>5 tiếng</span>, phụ phí thêm <span>1 ngày</span> thuê
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="surcharge-item">
                                    <div class="wrap-svg">
                                        <i class="fas fa-info-circle"></i>
                                    </div>
                                    <div class="content">
                                        <div class="content-item">
                                            <p class="title">Phí vệ sinh</p>
                                            <p class="cost">100 000đ</p>
                                        </div>
                                        <div class="content-item">
                                            <p>Phụ phí phát sinh khi xe hoàn trả không đảm bảo vệ sinh (nhiều vết bẩn, bùn cát, sình lầy...)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="surcharge-item">
                                    <div class="wrap-svg">
                                        <i class="fas fa-info-circle"></i>
                                    </div>
                                    <div class="content">
                                        <div class="content-item">
                                            <p class="title">Phí khử mùi</p>
                                            <p class="cost">300 000đ</p>
                                        </div>
                                        <div class="content-item">
                                            <p>Phụ phí phát sinh khi xe hoàn trả bị ám mùi khó chịu (mùi thuốc lá, thực phẩm nặng mùi...)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ProductDetailsComponent

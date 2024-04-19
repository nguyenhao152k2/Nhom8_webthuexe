// import React from 'react'

// export const OrdercarComponent = () => {
//   return (
//     //   <div className='container'>
//           <div className="detail-car row-col-xxl-2  d-flex ">
//                 <div className="content-detail col-xxl-8">
//                     <div className="content-detail__box">
//                         <div className="info-car">
//                             <div className="car-img col-12">
//                                 <img
//                                     src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_t…2013/p/g/2024/00/02/10/CuvpbCMBtk-rfCTtRIt1PQ.jpg"
//                                     alt=""
//                                 />
//                             </div>
    
//                         </div>
//                         <div className="name-car">
//                             <h3>MAZDA CX-5 2020</h3>
//                             <div className="outstanding-features">
                                
//                             </div>
//                         </div>
    
//                         <div className="info-car-desc">
//                             <h6>Chủ xe</h6>
                            
//                         </div>
    
//                         <div className="info-car-desc">
//                             <h6>Mô tả</h6>
//                             <p>
//                                 Xe dòng cao cấp Mazda CX9 AWD (grand touring), 7
//                                 chỗ, rộng ngồi thoải mái không say xe. Số tự động 6
//                                 cấp, V3.7. Xe thưởng xuyên bảo dưỡng, thay khung gầm
//                                 đi êm ái như xe sang. Các tính năng cao cấp như: gạt
//                                 mưa tự động, điều hòa 2 vùng, đèn xe tự động, cửa sổ
//                                 trời, lùi xe kính hậu tự động, camera lùi, cam cập
//                                 lề, cảm biến trước sau, cruise control, cảm biến
//                                 lốp,... Trang bị đầu android: Camera hành trình,
//                                 vietmap, android auto, apple carplay, google map,...
//                                 Tiêu thụ: 11l/100km đường trường.
//                             </p>
//                         </div>
    
//                         <div className="info-car-desc">
//                             <h6>Giấy tờ thuê xe</h6>
//                             <div className="required-papers">
//                                 <div className="required-papers__item">
//                                     <div className="type__item">
//                                         <p>Chọn 1 trong 2 hình thức</p>
//                                     </div>
//                                     <div className="type-content">
//                                         <img
//                                             src="https://n1-cstg.mioto.vn/v4/p/m/icons/papers/gplx_cccd.png"
//                                             alt=""
//                                         />
//                                         <div className="type-name">
//                                             <p>GPLX & CCSD gắn chip (đối chiếu)</p>
//                                         </div>
//                                     </div>
//                                     <div className="type-content">
//                                         <img
//                                             src="https://n1-cstg.mioto.vn/v4/p/m/icons/papers/gplx_passport.png"
//                                             alt=""
//                                         />
//                                         <div className="type-name">
//                                             <p>GPLX & CCSD gắn chip (đối chiếu)</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
    
//                         <div className="info-car-desc">
//                             <h6>Tài sản thế chấp</h6>
//                             <div className="required-papers">
//                                 <p>
//                                     15 triệu (tiền mặt/chuyển khoản cho chủ xe khi
//                                     nhận xe) hoặc Xe máy (kèm cà vẹt gốc) giá trị 15
//                                     triệu
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="order-car col-xxl-4">
//                     <div className="order-car__box">
//                         <h3 className="text-center">Thuê xe và thủ tục</h3>
    
//                         <h6>HÌNH THỨC NHẬN XE</h6>
//                         <select
//                             className="form-select"
//                             id="floatingSelect"
//                             aria-label="Floating label select example"
//                         >
//                             <option selected>Open this select menu</option>
//                             <option value="1">One</option>
//                             <option value="2">Two</option>
//                             <option value="3">Three</option>
//                         </select>
//                         <h6>THỜI GIAN NHẬN</h6>
//                         <input type="date" id="start" className="w-100 p-1" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31"/>
    
//                         <h6>THỜI GIAN TRẢ</h6>
//                         <input type="date" id="start" className="w-100 p-1" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31"/>
//                         <div className="price-container">
//                             <div className="price-item">
//                                 <p>Đơn giá thuê: </p>
//                                 <p className="cost"><span>1500000/ngày</span></p>
//                             </div>
//                             <div className="price-item">
//                                 <p>Bảo hiểm thuê xe: </p>
//                                 <p className="cost"><span>150000/ngày</span></p>
//                             </div>
//                             <div className="price-item">
//                                 <p>Tổng cộng: </p>
//                                 <p className="cost"><span>1500000đ x 2ngày</span></p>
//                             </div>
//                             <div className="price-item total">
//                                 <p>Thành tiền: </p>
//                                 <p className="cost"><span>1500000đ</span></p>
//                             </div>
//                         </div>
//                         <button type="button" className="btn btn-primary w-100 p-2 btn-order">Thuê xe</button>
//                         <div className="surcharge">
//                             <p className="title text-primary">Phụ phí có thể phát sinh</p>
//                             <div className="surcharge-container">
//                                 <div className="surcharge-item">
//                                     <div className="wrap-svg">
//                                         <i className="fas fa-info-circle"></i>
//                                     </div>
//                                     <div className="content">
//                                         <div className="content-item">
//                                             <p className="title">Phí vượt giới hạn</p>
//                                             <p className="cost">4 000đ/km</p>
//                                         </div>
//                                         <div className="content-item">
//                                             <p>Phụ phí phát sinh nếu lộ trình di chuyển vượt quá
//                                                 <span>600 km</span> khi thuê xe <span>2 ngày</span>
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
    
//                                 <div className="surcharge-item">
//                                     <div className="wrap-svg">
//                                         <i className="fas fa-info-circle"></i>
//                                     </div>
//                                     <div className="content">
//                                         <div className="content-item">
//                                             <p className="title">Phí quá giờ</p>
//                                             <p className="cost">50 000đ/h</p>
//                                         </div>
//                                         <div className="content-item">
//                                             <p>Phụ phí phát sinh nếu hoàn trả xe trễ giờ. Trường hợp trễ quá
//                                                 <span>5 tiếng</span>, phụ phí thêm <span>1 ngày</span> thuê
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
                            
//                                 <div className="surcharge-item">
//                                     <div className="wrap-svg">
//                                         <i className="fas fa-info-circle"></i>
//                                     </div>
//                                     <div className="content">
//                                         <div className="content-item">
//                                             <p className="title">Phí vệ sinh</p>
//                                             <p className="cost">100 000đ</p>
//                                         </div>
//                                         <div className="content-item">
//                                             <p>Phụ phí phát sinh khi xe hoàn trả không đảm bảo vệ sinh (nhiều vết bẩn, bùn cát, sình lầy...)
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
                            
//                                 <div className="surcharge-item">
//                                     <div className="wrap-svg">
//                                         <i className="fas fa-info-circle"></i>
//                                     </div>
//                                     <div className="content">
//                                         <div className="content-item">
//                                             <p className="title">Phí khử mùi</p>
//                                             <p className="cost">300 000đ</p>
//                                         </div>
//                                         <div className="content-item">
//                                             <p>Phụ phí phát sinh khi xe hoàn trả bị ám mùi khó chịu (mùi thuốc lá, thực phẩm nặng mùi...)
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div> 
//                         </div>
//                     </div>
//                 </div>
//             </div>
          
//     //</div> 
//   )
// }

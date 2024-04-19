import React, { Component } from 'react';
// import './css/Footer.css';
import logo from '../../image/logo/logo2.png';

export default class FooterComp extends Component {
  render() {
    return (
      <div class="footer">
            <div class="container p-0">
                <div class="footer-container row row-cols-xl-5 row-cols-xs-2 mt-5 m-0">
                    <div class="footer-info col-lg-4 col-xs col-sm-12">
                        <a href="">
                            <img src={logo} alt="" class="footer-info__logo d-flex mx-auto"/>
                        </a>
                        <div class="phone-mail">
                            <a href="tel:19009696" class="item">
                                <p>1900 9696</p>
                                <p>Tổng đài hỗ trợ: 7AM - 10PM</p>
                            </a>
                            <a href="mailto:T4Bcontact@.gmail.com" class="item">
                                <p>T4Bcontact@.gmail.com</p>
                                <p>Gửi mail cho T4B.vn</p>
                            </a>
                        </div>
                        <div class="footer-social">
                            <a href="#" class="social-icon" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#" class="social-icon" title="Tiktok"><i class="fa-brands fa-tiktok"></i></a>
                            <a href="#" class="social-icon" title="Zalo"><i class="fa-solid fa-z"></i></a>
                            <a href="#" class="social-icon" title="Instagram"><i class="fa-solid fa-info"></i></a>
                        </div>
                    </div>

                    <div class="footer-contact col-lg-2 col-xs col-sm-3">
                        <h6 class="footer-title">Về chúng tôi</h6>
                        <ul class="footer-list">
                            <li class="footer-item"><a href="#" class="footer-link">Về T4B.vn</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">T4B.vn Blog</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">Hướng dẫn chung</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">Hướng dẫn đặt xe</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">Hướng dẫn thanh toán</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">Hỏi và trả lời</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">Tuyển dụng</a></li>
                        </ul>
                    </div>

                    <div class="footer-contact col-lg-2 col-xs col-sm-3">
                        <h6 class="footer-title">Chính sách</h6>
                        <ul class="footer-list">
                            <li class="footer-item"><a href="#" class="footer-link">Chính sách và quy định</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">Quy chế hoạt động</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">Bảo mật thông tin</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">Giải quyết tranh chấp</a></li>
                        </ul>
                    </div>

                    <div class="footer-contact col-lg-2 col-xs col-sm-3">
                        <h6 class="footer-title">Phương thức thanh toán</h6>
                        <ul class="footer-list">
                            <li class="footer-item"><a href="#" class="footer-link">Về T4B.vn</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">T4B.vn Blog</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">Hướng dẫn chung</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">Hướng dẫn đặt xe</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">Hướng dẫn thanh toán</a></li>
                        </ul>
                    </div>

                    <div class="footer-contact col-lg-2 col-xs col-sm-3">
                        <h6 class="footer-title">Đối tác</h6>
                        <ul class="footer-list">
                            <li class="footer-item"><a href="#" class="footer-link">Đăng ký chủ xe T4B.vn</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">Đăng ký GPS</a></li>
                            <li class="footer-item"><a href="#" class="footer-link">Đơn vị bảo hiểm</a></li>
                        </ul>
                    </div>
                </div>
                <div class="container-fluid border-top mt-3"></div>
                <div class="company-address container text-center">
                    <p class="name">© Công ty Cổ phần T4B.vn</p>
                    <p class="address">Địa chỉ: Tầng 15, Tòa nhà T4B, số 1 Trịnh Văn Bô, phường Phương Canh, Quận Nam Từ Liêm, Hà Nội.</p>
                </div>
            </div>
        </div>
    )
  }
}

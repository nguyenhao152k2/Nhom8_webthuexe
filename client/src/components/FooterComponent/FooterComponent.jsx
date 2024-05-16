import React, { Component } from 'react';
import './Footer.css';
import logo from '../../image/logo/logo2.png';

export default class FooterComp extends Component {
  render() {
    return (
      <div className="footer">
            <div className="container p-0">
                <div className="footer-container row row-cols-xl-5 row-cols-xs-2 mt-5 m-0">
                    <div className="footer-info col-lg-4 col-xs col-sm-12">
                        <a href="">
                            <img src={logo} alt="" className="footer-info__logo d-flex mx-auto"/>
                        </a>
                        <div className="phone-mail">
                            <a href="tel:19009696" className="item">
                                <p>1900 9696</p>
                                <p>Tổng đài hỗ trợ: 7AM - 10PM</p>
                            </a>
                            <a href="mailto:T4Bcontact@.gmail.com" className="item">
                                <p>T4Bcontact@.gmail.com</p>
                                <p>Gửi mail cho T4B.vn</p>
                            </a>
                        </div>
                        <div className="footer-social">
                            <a href="#" className="social-icon" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="social-icon" title="Tiktok"><i className="fa-brands fa-tiktok"></i></a>
                            <a href="#" className="social-icon" title="Zalo"><i className="fa-solid fa-z"></i></a>
                            <a href="#" className="social-icon" title="Instagram"><i className="fa-solid fa-info"></i></a>
                        </div>
                    </div>

                    <div className="footer-contact col-lg-2 col-xs col-sm-3">
                        <h6 className="footer-title">Về chúng tôi</h6>
                        <ul className="footer-list">
                            <li className="footer-item"><a href="#" className="footer-link">Về T4B.vn</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">T4B.vn Blog</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Hướng dẫn chung</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Hướng dẫn đặt xe</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Hướng dẫn thanh toán</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Hỏi và trả lời</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Tuyển dụng</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact col-lg-2 col-xs col-sm-3">
                        <h6 className="footer-title">Chính sách</h6>
                        <ul className="footer-list">
                            <li className="footer-item"><a href="#" className="footer-link">Chính sách và quy định</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Quy chế hoạt động</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Bảo mật thông tin</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Giải quyết tranh chấp</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact col-lg-2 col-xs col-sm-3">
                        <h6 className="footer-title">Phương thức thanh toán</h6>
                        <ul className="footer-list">
                            <li className="footer-item"><a href="#" className="footer-link">Về T4B.vn</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">T4B.vn Blog</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Hướng dẫn chung</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Hướng dẫn đặt xe</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Hướng dẫn thanh toán</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact col-lg-2 col-xs col-sm-3">
                        <h6 className="footer-title">Đối tác</h6>
                        <ul className="footer-list">
                            <li className="footer-item"><a href="#" className="footer-link">Đăng ký chủ xe T4B.vn</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Đăng ký GPS</a></li>
                            <li className="footer-item"><a href="#" className="footer-link">Đơn vị bảo hiểm</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container-fluid border-top mt-3"></div>
                <div className="company-address container text-center">
                    <p className="name">© Công ty Cổ phần T4B.vn</p>
                    <p className="address">Địa chỉ: Tầng 15, Tòa nhà T4B, số 1 Trịnh Văn Bô, phường Phương Canh, Quận Nam Từ Liêm, Hà Nội.</p>
                </div>
            </div>
        </div>
    )
  }
}

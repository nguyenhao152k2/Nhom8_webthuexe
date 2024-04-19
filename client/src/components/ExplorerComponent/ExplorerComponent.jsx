import React, { Component } from 'react';
import '../css/Explorer.css';
import android from '../image/logo/google.png';
import iphone from '../image/logo/apple.png';

export default class ExplorerComp extends Component {
    render() {
        return (
            <div class='explorer-section'>
                <div class='container'>
                    <div class='explorer-container p-60 rounded-4 row m-0 text-center'>
                        <div class='explorer-item col-lg-6 col-xs'>
                            <img
                                src='https://www.mioto.vn/static/media/explorer1.b6cd9996.png'
                                alt=''
                                class='explorer-img img-fluid'
                            />
                        </div>

                        <div class='explorer-item col-lg-6 col-xs'>
                            <div class='explorer-content text-center'>
                                <img
                                    src='./assets/img/T4b. (1).png'
                                    alt=''
                                    class='explorer-logo'
                                />
                                <h1 class='explorer-title '>
                                    Bạn muốn biết thêm về T4B.vn
                                </h1>
                                <p class='explorer-text'>
                                    T4B.vn kết nối khách hàng có nhu cầu thuê xe
                                    với hàng ngàn chủ xe ô tô ở TPHCM, Hà Nội &
                                    các tỉnh thành khác. T4B.vn hướng đến việc
                                    xây dựng cộng đồng người dùng ô tô văn minh
                                    & uy tín tại Việt Nam.
                                </p>
                                <div class='explorer-btn'>
                                    <a
                                        href=''
                                        class='btn btn-success mt-4 rounded-4'
                                    >
                                        Tìm hiểu thêm
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='explorer-container rounded-4 p-60 row m-0 text-center'>
                        <div class='explorer-item col-lg-6 col-xs'>
                            <div class='explorer-content text-center'>
                                <img
                                    src='./assets/img/drive5.png'
                                    alt=''
                                    class='explorer-logo'
                                />
                                <h1 class='explorer-title '>
                                    Bạn muốn cho
                                    <br />
                                    thuê xe?
                                </h1>
                                <p class='explorer-text'>
                                    Hơn 5,000 chủ xe đang cho thuê hiệu quả trên
                                    Mioto Đăng kí trở thành đối tác của chúng
                                    tôi ngay hôm nay để gia tăng thu nhập hàng
                                    tháng.
                                </p>
                                <div class='explorer-btn'>
                                    <a
                                        href=''
                                        class='explorer-btn__item btn btn-outline-dark mt-4'
                                    >
                                        Tìm hiểu ngay
                                    </a>
                                    <a
                                        href=''
                                        class='explorer-btn__item btn btn-success mt-4'
                                    >
                                        Tìm hiểu thêm
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class='explorer-item col-lg-6 col-xs '>
                            <img
                                src='https://www.mioto.vn/static/media/explorer2.fde3ac82.png'
                                alt=''
                                class='explorer-img img-fluid'
                            />
                        </div>
                    </div>
                    <div class='explorer-container rounded-4 row m-0'>
                        <div class='explorer-item col-lg-6 col-xs '>
                            <img
                                src='https://www.mioto.vn/static/media/explorer3.38588237.png'
                                alt=''
                                class='explorer-img img-fluid'
                            />
                        </div>

                        <div class='explorer-item col-lg-6 col-xs'>
                            <div class='explorer-content text-center'>
                                <img
                                    src='./assets/img/phone.png'
                                    alt=''
                                    class='explorer-logo'
                                />
                                <h1 class='explorer-title '>
                                    Trải nghiệm trọn vẹn cùng ứng dụng T4B.vn
                                </h1>
                                <div class='explorer-btn'>
                                    <a
                                        href=''
                                        class='explorer-download__item mt-4'
                                    >
                                        <img
                                            src={android}
                                            alt=''
                                            class='explorer-download__img'
                                        />
                                    </a>
                                    <a
                                        href=''
                                        class='explorer-download__item mt-4'
                                    >
                                        <img
                                            src={iphone}
                                            alt=''
                                            class='explorer-download__img'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Advantage.css';

export default class AdvantageComp extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                    },
                },
            ],
        };
        return (
            <div class='advantage'>
                <div class='container adv-slide p-60'>
                    <div class='advantage-title text-center'>
                        <h1 class='title'>Ưu Điểm Của T4B</h1>
                        <h5 class='sub-title pt-16'>
                            Những tính năng giúp bạn dễ dàng hơn khi thuê xe
                            trên Mioto
                        </h5>
                    </div>
                    <div class='advantage-container row  g-5'>
                        <div class='advantage-item col-lg-4 col-sm-6 '>
                            <div class='item-adv card border-0'>
                                <img
                                    src='https://www.mioto.vn/static/media/features1.f177339e.svg'
                                    alt=''
                                    class='adv-img img-fluid mx-auto'
                                />
                                <h4 class='adv-title text-center'>
                                    An tâm đặt xe
                                </h4>
                                <p class='adv-text text-center'>
                                    Không tính phí huỷ chuyến trong vòng 1h sau
                                    khi đặt cọc.
                                    <br/>
                                    Hoàn cọc và bồi thường 100% nếu chủ xe huỷ
                                    chuyến trong vòng 7 ngày trước chuyến đi.
                                </p>
                            </div>
                        </div>
                        <div class='advantage-item col-lg-4 col-sm-6 '>
                            <div class='item-adv card border-0'>
                                <img
                                    src='https://www.mioto.vn/static/media/features2.1e7cb1c7.svg'
                                    alt=''
                                    class='adv-img img-fluid mx-auto'
                                />
                                <h4 class='adv-title text-center'>
                                    Thủ tục đơn giản
                                </h4>
                                <p class='adv-text text-center'>
                                    Chỉ cần có CCCD gắn chip (Hoặc Passport) &
                                    Giấy phép lái xe là bạn đã đủ điều kiện thuê
                                    xe trên Mioto.
                                </p>
                            </div>
                        </div>
                        <div class='advantage-item col-lg-4 col-sm-6 '>
                            <div class='item-adv card border-0'>
                                <img
                                    src='https://www.mioto.vn/static/media/features3.735438af.svg'
                                    alt=''
                                    class='adv-img img-fluid mx-auto'
                                />
                                <h4 class='adv-title text-center'>
                                    Thanh toán dễ dàng
                                </h4>
                                <p class='adv-text text-center'>
                                    Đa dạng hình thức thanh toán: ATM, thẻ Visa
                                    & Ví điện tử (Momo, VnPay, ZaloPay).
                                </p>
                            </div>
                        </div>
                        <div class='advantage-item col-lg-4 col-sm-6 '>
                            <div class='item-adv card border-0'>
                                <img
                                    src='https://www.mioto.vn/static/media/features4.ffd1319e.svg'
                                    alt=''
                                    class='adv-img img-fluid mx-auto'
                                />
                                <h4 class='adv-title text-center'>
                                    Giao xe tận nơi
                                </h4>
                                <p class='adv-text text-center'>
                                    Bạn có thể lựa chọn giao xe tận nhà/sân
                                    bay... Phí tiết kiệm chỉ từ 15k/km.
                                </p>
                            </div>
                        </div>
                        <div class='advantage-item col-lg-4 col-sm-6 '>
                            <div class='item-adv card border-0'>
                                <img
                                    src='https://www.mioto.vn/static/media/features5.4035317e.svg'
                                    alt=''
                                    class='adv-img img-fluid mx-auto'
                                />
                                <h4 class='adv-title text-center'>
                                    Dòng xe đa dạng
                                </h4>
                                <p class='adv-text text-center'>
                                    Hơn 100 dòng xe cho bạn tuỳ ý lựa chọn:
                                    Mini, Sedan, CUV, SUV, MPV, Bán tải.
                                </p>
                            </div>
                        </div>
                        <div class='advantage-item col-lg-4 col-sm-6 '>
                            <div class='item-adv card border-0'>
                                <img
                                    src='https://www.mioto.vn/static/media/features6.a6f7dc54.svg'
                                    alt=''
                                    class='adv-img img-fluid mx-auto'
                                />
                                <h4 class='adv-title text-center'>
                                    Lái xe an toàn
                                </h4>
                                <p class='adv-text text-center'>
                                    Vững tay lái với gói bảo hiểm thuê xe từ nhà
                                    bảo hiểm MIC & VNI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div class='advantage-item col-lg-4 col-sm-6 '>
                            <div class='item-adv card border-0'>
                                <img
                                    src='https://www.mioto.vn/static/media/features1.f177339e.svg'
                                    alt=''
                                    class='adv-img img-fluid mx-auto'
                                />
                                <h4 class='adv-title text-center'>
                                    An tâm đặt xe
                                </h4>
                                <p class='adv-text text-center'>
                                    Không tính phí huỷ chuyến trong vòng 1h sau
                                    khi đặt cọc. Hoàn cọc và bồi thường 100% nếu
                                    chủ xe huỷ chuyến trong vòng 7 ngày trước
                                    chuyến đi.
                                </p>
                            </div>
                        </div>
                        <div class='advantage-item col-lg-4 col-sm-6 '>
                            <div class='item-adv card border-0'>
                                <img
                                    src='https://www.mioto.vn/static/media/features2.1e7cb1c7.svg'
                                    alt=''
                                    class='adv-img img-fluid mx-auto'
                                />
                                <h4 class='adv-title text-center'>
                                    Thủ tục đơn giản
                                </h4>
                                <p class='adv-text text-center'>
                                    Chỉ cần có CCCD gắn chip (Hoặc Passport) &
                                    Giấy phép lái xe là bạn đã đủ điều kiện thuê
                                    xe trên Mioto.
                                </p>
                            </div>
                        </div>
                        <div class='advantage-item col-lg-4 col-sm-6 '>
                            <div class='item-adv card border-0'>
                                <img
                                    src='https://www.mioto.vn/static/media/features3.735438af.svg'
                                    alt=''
                                    class='adv-img img-fluid mx-auto'
                                />
                                <h4 class='adv-title text-center'>
                                    Thanh toán dễ dàng
                                </h4>
                                <p class='adv-text text-center'>
                                    Đa dạng hình thức thanh toán: ATM, thẻ Visa
                                    & Ví điện tử (Momo, VnPay, ZaloPay).
                                </p>
                            </div>
                        </div>
                        <div class='advantage-item col-lg-4 col-sm-6 '>
                            <div class='item-adv card border-0'>
                                <img
                                    src='https://www.mioto.vn/static/media/features4.ffd1319e.svg'
                                    alt=''
                                    class='adv-img img-fluid mx-auto'
                                />
                                <h4 class='adv-title text-center'>
                                    Giao xe tận nơi
                                </h4>
                                <p class='adv-text text-center'>
                                    Bạn có thể lựa chọn giao xe tận nhà/sân
                                    bay... Phí tiết kiệm chỉ từ 15k/km.
                                </p>
                            </div>
                        </div>
                        <div class='advantage-item col-lg-4 col-sm-6 '>
                            <div class='item-adv card border-0'>
                                <img
                                    src='https://www.mioto.vn/static/media/features5.4035317e.svg'
                                    alt=''
                                    class='adv-img img-fluid mx-auto'
                                />
                                <h4 class='adv-title text-center'>
                                    Dòng xe đa dạng
                                </h4>
                                <p class='adv-text text-center'>
                                    Hơn 100 dòng xe cho bạn tuỳ ý lựa chọn:
                                    Mini, Sedan, CUV, SUV, MPV, Bán tải.
                                </p>
                            </div>
                        </div>
                        <div class='advantage-item col-lg-4 col-sm-6 '>
                            <div class='item-adv card border-0'>
                                <img
                                    src='https://www.mioto.vn/static/media/features6.a6f7dc54.svg'
                                    alt=''
                                    class='adv-img img-fluid mx-auto'
                                />
                                <h4 class='adv-title text-center'>
                                    Lái xe an toàn
                                </h4>
                                <p class='adv-text text-center'>
                                    Vững tay lái với gói bảo hiểm thuê xe từ nhà
                                    bảo hiểm MIC & VNI.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

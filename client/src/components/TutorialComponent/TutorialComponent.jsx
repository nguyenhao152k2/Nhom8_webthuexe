import React, { Component } from 'react';
import '../css/Tutorial.css';

export default class TutorialComp extends Component {
  render() {
    return (
      <div class="tutorial-section">
                <div class="container p-60 bg-success">
                    <div class="tutorial-title text-center">
                        <h1 class="title">Hướng Dẫn Thuê Xe</h1>
                        <h5 class="sub-title pt-16">Chỉ với 4 bước đơn giản để trải nghiệm thuê xe T4B.vn một cách nhanh chóng</h5>
                    </div>

                    <div class="tutorial-container row row-cols-lg-4 row-cols-sm-2 g-4">
                        <div class="tutorial-item col-lg col-sm-6">
                            <div class=" card border-0">
                                <img src="https://www.mioto.vn/static/media/tutorial1.12455eba.svg" alt="" class="tutorial-item__img img-fluid "/>
                                <div class="tutorial-item__title text-center d-flex">
                                    <h4 class="ttr-number px-2">01</h4>
                                    <h4 class="ttr-primary text-start">Đặt xe trên<br/>app/web T4B.vn</h4>
                                </div>
                            </div>
                        </div>
                        <div class="tutorial-item col-lg col-sm-6">
                            <div class=" card border-0">
                                <img src="https://www.mioto.vn/static/media/tutorial2.55d48bd8.svg" alt="" class="tutorial-item__img img-fluid "/>
                                <div class="tutorial-item__title text-center d-flex">
                                    <h4 class="ttr-number px-2">02</h4>
                                    <h4 class="ttr-primary text-start">Nhận xe</h4>
                                </div>
                            </div>
                        </div>
                        <div class="tutorial-item col-lg col-sm-6">
                            <div class=" card border-0">
                                <img src="https://www.mioto.vn/static/media/tutorial3.0834bed8.svg" alt="" class="tutorial-item__img img-fluid "/>
                                <div class="tutorial-item__title text-center d-flex">
                                    <h4 class="ttr-number px-2">03</h4>
                                    <h4 class="ttr-primary text-start">Bắt đầu hành trình</h4>
                                </div>
                            </div>
                        </div>
                        <div class="tutorial-item col-lg col-sm-6">
                            <div class=" card border-0">
                                <img src="https://www.mioto.vn/static/media/tutorial4.9dcd3930.svg" alt="" class="tutorial-item__img img-fluid "/>
                                <div class="tutorial-item__title text-center d-flex">
                                    <h4 class="ttr-number px-2">04</h4>
                                    <h4 class="ttr-primary text-start">Trả xe & kết thúc chuyến đi</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}

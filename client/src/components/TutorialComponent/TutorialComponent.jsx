import React, { Component } from 'react';
import '../css/Tutorial.css';

export default class TutorialComp extends Component {
  render() {
    return (
      <div className="tutorial-section">
                <div className="container p-60 bg-success">
                    <div className="tutorial-title text-center">
                        <h1 className="title">Hướng Dẫn Thuê Xe</h1>
                        <h5 className="sub-title pt-16">Chỉ với 4 bước đơn giản để trải nghiệm thuê xe T4B.vn một cách nhanh chóng</h5>
                    </div>

                    <div className="tutorial-container row row-cols-lg-4 row-cols-sm-2 g-4">
                        <div className="tutorial-item col-lg col-sm-6">
                            <div className=" card border-0">
                                <img src="https://www.mioto.vn/static/media/tutorial1.12455eba.svg" alt="" className="tutorial-item__img img-fluid "/>
                                <div className="tutorial-item__title text-center d-flex">
                                    <h4 className="ttr-number px-2">01</h4>
                                    <h4 className="ttr-primary text-start">Đặt xe trên<br/>app/web T4B.vn</h4>
                                </div>
                            </div>
                        </div>
                        <div className="tutorial-item col-lg col-sm-6">
                            <div className=" card border-0">
                                <img src="https://www.mioto.vn/static/media/tutorial2.55d48bd8.svg" alt="" className="tutorial-item__img img-fluid "/>
                                <div className="tutorial-item__title text-center d-flex">
                                    <h4 className="ttr-number px-2">02</h4>
                                    <h4 className="ttr-primary text-start">Nhận xe</h4>
                                </div>
                            </div>
                        </div>
                        <div className="tutorial-item col-lg col-sm-6">
                            <div className=" card border-0">
                                <img src="https://www.mioto.vn/static/media/tutorial3.0834bed8.svg" alt="" className="tutorial-item__img img-fluid "/>
                                <div className="tutorial-item__title text-center d-flex">
                                    <h4 className="ttr-number px-2">03</h4>
                                    <h4 className="ttr-primary text-start">Bắt đầu hành trình</h4>
                                </div>
                            </div>
                        </div>
                        <div className="tutorial-item col-lg col-sm-6">
                            <div className=" card border-0">
                                <img src="https://www.mioto.vn/static/media/tutorial4.9dcd3930.svg" alt="" className="tutorial-item__img img-fluid "/>
                                <div className="tutorial-item__title text-center d-flex">
                                    <h4 className="ttr-number px-2">04</h4>
                                    <h4 className="ttr-primary text-start">Trả xe & kết thúc chuyến đi</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}

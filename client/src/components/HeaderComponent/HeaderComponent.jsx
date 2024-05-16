import React, { Component } from 'react';
import logo1 from '../../image/logo/logo1.png';
import logo2 from '../../image/logo/logo2.png';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import '../css/Navbar.css';

export default class HeaderComponent extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
        };
    }
    render() {
        return (
            <div className='header'>
                {/* Tạo độ rộng phần header  */}
                <nav className='navbar navbar-expand-lg navbar-light bg-white '>
                    <div className='container '>
                        {/* Logo  */}
                        <div className='navbar-brand'>
                            <Link to={'/'} className='logo-img d-none d-lg-block'>
                                <img
                                    src={logo1}
                                    alt='Logo'
                                    className='logo-lg'
                                />
                            </Link>
                            <Link to={'/'} className='logo-img d-lg-none d-block'>
                                <img
                                    src={logo2}
                                    alt='Logo con'
                                    className='logo-sm'
                                />
                            </Link>
                        </div>

                        {/* Nút bar thu nhỏ  */}
                        <button
                            className='navbar-toggler border-0'
                            onClick={() => {
                                this.setState({ show: !this.state.show });
                            }}
                        >
                            {this.state.show ? <FaBars /> : <FaTimes />}
                        </button>

                        <div
                            className={
                                this.state.show
                                    ? 'collapse navbar-collapse menu-nav'
                                    : 'collapse navbar-collapse menu-nav active'
                            }
                        >
                            <ul className='navbar-nav ms-auto'>
                                <li className='nav-item'>
                                    <a
                                        href='#'
                                        className='nav-link active d-block'
                                    >
                                        Về thuebonbanh.vn
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        Trở thành chủ xe
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <Link to={'/mytrip'} className='nav-link'>
                                        Chuyến của tôi
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link '>
                                        <i className='fa-regular fa-bell'></i>
                                    </a>
                                </li>
                                <li className='nav-item vr d-none d-md-block'></li>
                                <div className='hr nav-hr d-sm-block d-md-none'></div>
                                {/* <li className='nav-item hr d-sm-block d-md-none'></li> */}
                                <div className='account-btn'>
                                    <a href='#' className='nav-link'>
                                        Đăng ký
                                    </a>
                                    <a href='#' className='nav-link'>
                                        Đăng nhập
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    {/* <h1>{this.state.show}</h1> */}
                </nav>
            </div>
        );
    }
}

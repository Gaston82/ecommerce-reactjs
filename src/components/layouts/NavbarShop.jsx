import React from 'react'
import { useContext } from 'react';
import { userCont } from '../../context/UserContext';

export const NavbarShop = () => {

    const { logged } = useContext(userCont);

    return (
        
        <div>
            {
                logged?<>

                    <div className="container-menu-desktop">
                        <div className="wrap-menu-desktop">
                            <nav className="limiter-menu-desktop container">
                                    <a href="/#" className="logo">
                                    <img src="images/icons/logo-01.png" alt="IMG-LOGO"></img>
                                    </a>

                                    <div className="wrap-icon-header flex-w flex-r-m">

                                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify="2">
                                        <i className="zmdi zmdi-shopping-cart"></i>
                                    </div>

                                    <a href="/#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
                                        <i className="zmdi zmdi-favorite-outline"></i>
                                    </a>
                                    </div>
                                </nav>
                        </div>	
                    </div>

                    <div className="wrap-header-mobile">
                        <div className="logo-mobile">
                            <a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO"></img></a>
                        </div>

                        <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify="2">
                                <i className="zmdi zmdi-shopping-cart"></i>
                            </div>

                            <a href="/#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
                                <i className="zmdi zmdi-favorite-outline"></i>
                            </a>
                        </div>

                        <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                                </span>
                        </div>
                    </div>
                
                </>:
                <>
                </>
            }

        </div>
        
  )
}

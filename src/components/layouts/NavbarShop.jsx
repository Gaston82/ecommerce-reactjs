import React from 'react'
import { useContext } from 'react';
import { userCont } from '../../context/UserContext';
import { SelectedProductsModal } from '../store/SelectedProductsModal';
import { useSelector } from 'react-redux';
import { initialState } from "../../redux/reducers/productReducer";



export const NavbarShop = () => {

    const { logged } = useContext(userCont);
    const quantity = useSelector( state => initialState.quantity)
    
    return (
        
        <div>
            {
                logged?<>

                    <div className="container-menu-desktop">
                        <div className="wrap-menu-desktop">
                            <nav className="limiter-menu-desktop container">
                                <a href="/#" className="logo">
                                    <strong>Ecommerce</strong>
                                </a>

                                    <div className="wrap-icon-header flex-w flex-r-m">
                                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify={quantity}  data-toggle="modal" data-target="#exampleModal" >
                                            <i className="zmdi zmdi-shopping-cart"></i>
                                        </div>
                                    </div>
                            </nav>
                        </div>	
                    </div>
                   

                    <div className="wrap-header-mobile">
                        <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify={quantity}>
                                <i className="zmdi zmdi-shopping-cart"></i>
                            </div>
                        </div>
                    </div>

                    
                   
                    {/* Modal  */}
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <SelectedProductsModal />
                                </div>
                                
                            </div>
                        </div>
                    </div> 

                </>:
                <>
                </>
            }

        </div>
        
  )
  
}

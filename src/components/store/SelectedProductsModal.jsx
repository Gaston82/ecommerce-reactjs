import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'

export const SelectedProductsModal = () => {

    const {items} = useContext(cartContext)

    return (
    <>
          
        <div className="wrap-header-cart js-panel-cart show-header-cart">
		    <div className="s-full js-hide-cart"></div>

            <div className="header-cart flex-col-l p-l-65 p-r-25">
                <div className="header-cart-title flex-w flex-sb-m p-b-8">
                    <span className="mtext-103 cl2">
                        Mis compras
                    </span>

                    {/* <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                        <i className="zmdi zmdi-close"></i>
                    </div> */}
                </div>
                
                {
                    items.map(item=>(
                        <div key={item.index}>
                            <ul className="header-cart-wrapitem ">
                                <li className="header-cart-item flex-w flex-t m-b-12">
                                    <div className="header-cart-item-img">
                                        <img className='w-10 h-10' src={item.images[0]} alt={item.name} />
                                    </div>

                                    <div className="header-cart-item-txt p-t-8">
                                        <a href="/#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                            {item.name}
                                        </a>

                                        <span className="header-cart-item-info">
                                           Total: ${item.price}
                                        </span>
                                    </div>
                                </li>
                            </ul>     
                        </div>
                      )
                    )
                }
                 <div className="w-full">
                    <div className="header-cart-buttons flex-w w-full">
                        <a href="/selectedProductsDetail" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                             Ver detalle de compra
                        </a>
                    </div>
                </div>
            </div>
	    </div>  
    </>
  )
}

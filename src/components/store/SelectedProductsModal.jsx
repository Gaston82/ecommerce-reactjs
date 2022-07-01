import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'

export const SelectedProductsModal = () => {

    const {items} = useContext(cartContext)

    return (
       
    <>   
        <div className='row justify-content-center'>
            <div className='col-md-1'></div>
            <div className='col-md-10'>
                <span className="mtext-103 cl2">
                    Productos agregados al carrito
                </span>
                <br /><br />
            </div>
            <div className='col-md-7'>
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
                
                <div className="w-full text-align-center">
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

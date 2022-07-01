import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { post } from '../../api'
import { cartContext } from '../../context/CartContext'


export const Product = ({ id, title,price }) => {

  const {setItems} = useContext(cartContext)

  const addToCart = (id) =>{
    post("/api/cart/add",{
      idProduct:id,
      amount:1
    }).then(data=>{
      console.log("data", data)
      setItems({
        type:"UPDATE",
        payload:data
      })

    })
  }
  
  return (
    
    <article>
{/*       
      <Link to={`/detail/${id}`} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
        VER DETALLE
      </Link>  */}
      <button onClick={()=>{ addToCart(id)}} 
              className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
        AGREGAR AL CARRITO
      </button> 
      <div className="block2-txt flex-w flex-t p-t-14">
        <div className="block2-txt-child1 flex-col-l ">
          <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
              <strong>{title}</strong>
          </a>

          <span className="stext-105 cl3">
            {price}€
          </span>
        </div>

        <div className="block2-txt-child2 flex-r p-t-3">
          <a href="/#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
            <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"></img>
            <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"></img>
          </a>
        </div>
      </div>
    </article>

  )
}

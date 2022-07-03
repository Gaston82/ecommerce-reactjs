import React from 'react'
import { useContext } from 'react'
import { post } from '../../api'
import { cartContext } from '../../context/CartContext'


export const Product = ({ id, title,price }) => {

  const {setItems} = useContext(cartContext)
 

  const addToCart = (id) =>{
    post("/api/cart/add",{
      idProduct:id,
      amount:1
    }).then(data=>{
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
        AGREGAR
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
      </div>
    </article>

  )
}

import { useState, useEffect, useContext } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { stripePK } from '../../config/index';
import { get,del, put } from "../../api/index";
import PaymentForm from '../payment/PaymentForm';
import { cartContext } from '../../context/CartContext';
import { FaTrash } from "react-icons/fa";

const stripe = loadStripe(stripePK)

export const SelectedProductsDetail = () => {

    const {items, setItems} = useContext(cartContext)
    const [clientSecret,setClientSecret] = useState()
 
    
    useEffect(()=>{
        get("/api/cart/pay")
        .then(data=>{
            setClientSecret(data.clientSecret)
        })
        .catch(console.log)
    },[])

    const increaseQuantity = (id, amount) => {
        
        put("/api/cart/changeAmount",{
            idProduct:id,
            amount: amount + 1
          }).then(data=>{
            setItems({
              type:"UPDATE",
              payload:data
            })

          })
    }
    
    const decreaseQuantity = (id, amount) => {

          if(amount > 1){
            put("/api/cart/changeAmount",{
                idProduct:id,
                amount: amount - 1
              }).then(data=>{
                setItems({
                  type:"UPDATE",
                  payload:data
                })
              })
          }
    
    }

    const deleteProdCart = (id)=>{
        del("/api/cart/remove",{
            idProduct:id
        })
        .then(data=>{
            setItems({
                type:"UPDATE",
                payload:data
            })
        })
        .catch(console.log)
    }

    return (
        <>
            <div className="bg0 p-t-75 p-b-85">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                            <div className="m-l-25 m-r--38 m-lr-0-xl">
                                <div className="wrap-table-shopping-cart">
                                    <table className="table-shopping-cart">
                                        <thead>
                                            <tr className="table_head">
                                                <th className="column-1">Producto</th>
                                                <th className="column-2"></th>
                                                <th className="column-3">Precio</th>
                                                <th className="column-4">Cantidad</th>
                                                <th className="column-5">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                items.map(item=>(
                                                    <tr className="table_row">
                                                        <td className="column-1">
                                                            <div className="how-itemcart1">
                                                                <img src={item.images[0]} alt={item.name}></img>
                                                            </div>
                                                        </td>
                                                        <td className="column-2">{item.name}</td>
                                                        <td className="column-3">${item.price}</td>
                                                        <td className="column-4">
                                                            <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                                                <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onClick={()=>decreaseQuantity(item._id, item.amount)}>
                                                                    <i className="fs-16 zmdi zmdi-minus" ></i>
                                                                </div>

                                                                <p className="mtext-104 cl3 txt-center num-product" name="num-product1"> { item.amount }</p>

                                                                <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onClick={()=>increaseQuantity(item._id, item.amount)}>
                                                                    <i className="fs-16 zmdi zmdi-plus" ></i>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="column-5">${item.price*item.amount}</td>
                                                        <td className="column-6"> <button className='btn btn-danger btn-sm' onClick={()=>{deleteProdCart(item._id)}}><FaTrash /></button></td>
                                                
                                                    </tr>
                                                ))}
                                                {/* <div className="flex-w flex-t p-t-27 p-b-33">
                                                        <div className="size-208">
                                                            <span className="mtext-101 cl2">
                                                                Total:
                                                            </span>
                                                        </div>

                                                        <div className="size-209 p-t-1">
                                                            <span className="mtext-110 cl2">
                                                                $79.65
                                                            </span>
                                                        </div>
                                                    </div> */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                                <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                                    <h4 className="mtext-109 cl2 p-b-30">
                                        Finalizar compra
                                    </h4>

                                    {/* Provider */}
                                    {clientSecret && <Elements options={{
                                        clientSecret
                                    }} stripe={stripe}> 
                                        <PaymentForm/>
                                    </Elements>}
                                   
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        </>
    )
}

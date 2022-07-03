import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getById} from "../services/productsServices";
//import productReducer, { initialState } from '../redux/reducers/productReducer'
import { types } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productAction";


export const Detail = () => {
    
    const product = useSelector((state)=>state.product)
    let { id } = useParams();
    const dispatch=useDispatch()

    // const [state,dispatch] = useReducer(productReducer,initialState)

    
    // const [product,setProduct]=useState(null)
    const [quantity, setQuantity] = useState(1);
    

    useEffect(()=>{
     const fetchProductById = async()=>{
         const result = await getById(id)
         dispatch(selectedProduct(result))
     }
     fetchProductById()
    },[id])



    const increaseQuantity = () => {
        setQuantity( quantity + 1)
    }

    const decreaseQuantity = () => {
        if(quantity > 1){
            setQuantity( quantity - 1)
        }
        
    }

    const addToCart = () => {
        dispatch({
            type: types.addToCart,
            payload: { 
                quantity
            }
        })
       // dispatch(addToCart({product, quantity}))
    } 


    if (!product) {
        return <p>Loading...</p>
    }

    return (
        <div>
                <div className="container">
                    <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
    
                        <div className="row">
                            <div className="col-md-6 col-lg-7 p-b-30">
                                <div className="p-l-25 p-r-30 p-lr-0-lg">
                                    <div className="wrap-slick3 flex-sb flex-w">
                                        <div className="wrap-slick3-dots"></div>
                                        <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

                                        <div className="slick3 gallery-lb">
                                            <div className="item-slick3" data-thumb="images/product-detail-01.jpg">
                                                <div className="wrap-pic-w pos-relative">
                                                    <img src={product.image} alt="IMG-PRODUCT"></img>
                                                </div>
                                            </div>
      
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5 p-b-30">
                                <div className="p-r-50 p-t-5 p-lr-0-lg">
                                    <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                        {id} 
                                    </h4>

                                    <span className="mtext-106 cl2">
                                        {product.price}€
                                    </span>

                                    <p className="stext-102 cl3 p-t-23">
                                       {product.description}                                    
                                       </p>
                                                
                                    <div className="p-t-33">
                                        <div className="flex-w flex-r-m p-b-10">
                                            <div className="size-204 flex-w flex-m respon6-next">
                                                <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                    <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onClick={()=>decreaseQuantity()}>
                                                        <i className="fs-16 zmdi zmdi-minus"></i>
                                                    </div>

                                                    <p className="mtext-104 cl3 txt-center num-product" name="num-product" >{ quantity }</p>

                                                    <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onClick={()=>increaseQuantity()}>
                                                        <i className="fs-16 zmdi zmdi-plus"></i>
                                                    </div>
                                                </div>

                                                <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" onClick={()=> addToCart()}>
                                                    Agregar
                                                </button>
                                            </div>
                                        </div>	
                                    </div>				
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }

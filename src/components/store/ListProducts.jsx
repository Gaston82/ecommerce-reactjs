import { useSelector } from 'react-redux';
import { Product } from './Product';
import React, { useEffect, useState } from 'react'
import { get } from '../../api'


export const ListProducts = () => {

    const [products,setProducts] = useState([])

    //const products = useSelector((state)=>state.allProducts.products)

    useEffect(()=>{
        get("/api/products")
        .then(({data})=>{
          setProducts(data)
        })
        .catch(console.log)
      },[])
  

    if (!products) {
        return <p>Loading...</p>;
    }


    return (
            <div>
                <div className="row isotope-grid">
                    {
                        products.map((product) => (   

                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"  key={product._id}>
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                            <img style={{ maxWidth: "200px", height:"200px" }} src={product.images[0]} alt={product.name} />
    
                                            <Product
                                                title={product.name}
                                                image={product.images}
                                                id={product._id}
                                                price={product.price}
                                            />
                                    </div>          
                                </div>
                            </div>
                           
                        ))
                    }

                </div>
            </div>
        )  
    
    }

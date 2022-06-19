import React from 'react'
import { Product } from './Product';

export const ListProducts = ({ products }) => {

    console.log(products)
    if (!products) {
        return <p>Loading...</p>;
    }


    return <div>                     
                <div className="row isotope-grid">
                    {
                        products.map((product) => (   
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                            <img style={{ maxWidth: "200px", height:"200px" }} src={product.image} alt={product.title} />
        
                                            <Product
                                                key={product.id}
                                                title={product.title}
                                                image={product.image}
                                                id={product.id}
                                                price={product.price}
                                            />
                                    </div>          
                                </div>
                            </div>
                           
                            ))
                    }

                </div>
    
            </div>
    
    }

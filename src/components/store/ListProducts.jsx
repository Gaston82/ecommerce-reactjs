//import { useSelector } from 'react-redux';
import { Product } from './Product';
import React, { useEffect, useState } from 'react'
import { get } from '../../api'


export const ListProducts = () => {

    const [products,setProducts] = useState([])

    //const products = useSelector((state)=>state.allProducts.products)

    useEffect(()=>{
        get("/api/products?&page=1&limit=8")
        .then(({data})=>{
          setProducts(data)
        })
        .catch(console.log)
      },[])
  

    const nextPage = () => {
      
        get("/api/products?&page=2&limit=8")
        .then(({data})=>{
            setProducts(data)
        })
        .catch(console.log)
    }

    const prevPage = () => {

        get("/api/products?&page=1&limit=8")
        .then(({data})=>{
            setProducts(data)
        })
        .catch(console.log)
    }

    if (!products) {
        return <p>Loading...</p>;
    }


    return (
            <div>
                <div className="row justify-content-center isotope-grid">
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
                <div className='row justify-content-center'>
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item">
                            <button className="page-link"  onClick={ ()=> {prevPage()}}>Previo</button>
                            </li>
                            <li className="page-item">
                            <button className="page-link" onClick={ ()=> {nextPage()}}>Siguiente</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )  
    
    }

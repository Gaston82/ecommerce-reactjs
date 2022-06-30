import React from 'react'
import { useSelector } from 'react-redux';
import useProducts from '../../hooks/useProducts';
import { ListProducts } from './ListProducts'

export const Store = () => {

    const  {allProducts}  = useProducts();
    

    // const listProducts=useSelector((state)=>state.allProducts.products)
    if (!allProducts) {
      return <p>Loading...</p>;
    }


    return (
        <div>
            <br /><br />
	        <section className="bg0 p-t-23 p-b-140">
                <div className="container">
                    <div className="p-b-10">
                        <h3 className="ltext-103 cl5">
                            Nuestros productos
                        </h3>
                    </div>

                    <div className="flex-w flex-sb-m p-b-52">
                        <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                                Todos
                            </button>

                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
                                Mujer
                            </button>

                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">
                                Hombre
                            </button>

                            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">
                                Bolsos
                            </button>
                        </div>
                    </div>

                    <ListProducts />
                    
                </div>
            </section>
        </div>
    )
}

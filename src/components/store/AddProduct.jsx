import React from 'react'
import { useDispatch } from 'react-redux';
import { types } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { post } from '../../api'

export const AddProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const onSubmit = ( event ) => {

        event.preventDefault()
        const {name, description, price, images, stock} = event.target
    
        const newProd = {
            name: name.value,
            description: description.value,
            price: price.value,
            images:images.value,
            stock: stock.value
        }
        post("/api/products/",newProd)
        .then(data=>{
          dispatch({
            type: types.addProduct,
            payload: newProd
        })
          navigate("/store", { replace: true });
        })
        .catch(error=>{
          console.log(error.response.data)
        })
      }

    return (
        <>
            <br /><br /><br />
            <div className='row justify-content-center'>  
                <h4 class="p-b-15">
					<div  class="ltext-108 cl2 hov-cl1 trans-04">
                        Cargar producto
					</div>
			    </h4>
            </div>
            <div className='row justify-content-center'>
                <div className='p-4'>  
                    <div className="formProd">
                        <div className="row">
                            <form onSubmit={ onSubmit }>
                                <div className="row">
                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Nombre</label>
                                            <input type="text" className="form-control" placeholder="Título" name='name'  />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Descripción</label>
                                            <input type="text" className="form-control" placeholder="Descripción" name='description'  />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Precio</label>
                                            <input type="number" className="form-control" placeholder="Precio" name='price'  />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Imagen</label>
                                            <input type="text" className="form-control" name='images'  />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>stock</label>
                                            <input type="number" className="form-control" placeholder="Precio" name='stock'  />
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className='row justify-content-center'>
                                    <div className="row">
                                        <div className='col-md-12'>
                                            <button className="btn btn-dark btn-lg btn-block" >Crear </button>
                                        </div>
                                    </div>
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

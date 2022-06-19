import React from 'react'
import { useReducer } from 'react';
import useProducts from '../../hooks/useProducts';
import productReducer, { initialState } from '../../reducers/productReducer';
import { types } from '../../types/types';
import Swal from 'sweetalert2'


export const CrudProduct = () => {

    const { listProducts } = useProducts();
    const [state, dispatch] = useReducer(productReducer, initialState)


    //actions
    const removeProduct = (id) => {
    
        // Swal.fire({
        //     title:"¿Estás seguro de eliminar este producto?",
        //     text: "si la eliminas no la podrás recuperar",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //         deleteProduct(`/api/products/delete/${id}/${user.id}`)
        //         .then(({data}) => {
        //             console.log(data)
        //             if(data.success === false){
        //                 Swal.fire({
        //                     icon: 'error',
        //                     title: 'Oops...',
        //                     text: data.message
        //                 })
        //                 console.log(data.error);
        //             }else{

                        // dispatch({
                        //     type: types.removeProduct,
                        //     payload: id
                        // })

        //                 Swal.fire(
        //                     'Deleted!',
        //                     'Your file has been deleted.',
        //                     'success'
        //                 )    
        //             }

        //             navigate("/crudProducts",{
        //                 replace:true
        //             })
                    
        //         })
        //     }
        // })
    }

    const addProduct = (event) => {
        // event.preventDefault()
        // const {title, description, price} = event.target
    
        // const newProd = {
        //     title: title.value,
        //     description: description.value,
        //     price: price.value
        // }

        // postProduct("/api/product/",newProd)
        // .then(data=>{

            // dispatch({
            //     type: types.addProduct,
            //     payload: prod
            // })
        //     navigate("/crudProducts", { replace: true });
        // })
        // .catch(error=>{
        //   console.log(error.response.data)
        // })s
      
    }

 
    const editProduct = (id) => {
        dispatch({
            type: types.editProduct,
            payload: id
        })
    }

    return (
        <div>
            <h1> Crud de productos </h1>
                <div className="panel-body table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Título</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listProducts.map((prod) => (
                                    <tr key={prod.id}>
                                        <td>{prod.id}</td>
                                        <td>{prod.title}</td>
                                        <td> 
                                            <button type="button" onClick={() =>editProduct(prod.id)} className="btn btn-warning">Editar</button> 
                                            <button type="button" onClick={() =>removeProduct(prod.id)} className="btn btn-danger">Eliminar</button> 
                                        </td>
                                    </tr>
                                ))
                            }  
                                        
                        </tbody>
                    </table>
                </div>
        </div>
    )
}

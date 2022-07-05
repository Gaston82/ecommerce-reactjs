import { useState, useEffect } from 'react';
import { get, del } from "../../api/index";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { types } from '../../types/types';
import Swal from 'sweetalert2'

export const ListAllProducts = () => {

    const [products,setProducts] = useState([])
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        get("/api/products/62bce0bfc07690368cc7d2b7")
        .then(({data})=>{
          setProducts(data)
        })
        .catch(console.log)
      },[])


      const onDelete = (id) => {
        console.log("el id que llega a onDelete", id)

        Swal.fire({
            title:"¿Estás seguro de eliminar este producto?",
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                del(`/api/products/${id}`)                
                .then(data => {
                    if(data.success === false){
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: data.message
                        })
                        console.log(data.error);
                    }else{
                        Swal.fire(
                            'Eliminado correctamente!',
                            'success'
                        )
                        dispatch({
                            type: types.removeProduct,
                            payload: id
                        })
                    }

                    navigate("/store",{
                        replace:true
                    })
                    
                }).catch(console.log)
            }
        })
    }
    return (
        <>
        <div className="bg0 p-t-75 p-b-85">
                <div className="container">
                    <br /><br />
                    <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                        <div>
                            <a type="button" href='/addProduct' className='btn btn-success'>Cargar producto</a>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <h4 className="p-b-15">
                            <div className="ltext-108 cl2 hov-cl1 trans-04">
                                Productos del ecommerce
                            </div>
                        </h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-xl-7 m-lr-auto m-b-50">
                            <div className="m-l-25 m-r--38 m-lr-0-xl">
                                <div className="wrap-table-shopping-cart">
                                    <table className="table-shopping-cart">
                                        <thead>
                                            <tr className="table_head">
                                                <th className="column-1"></th>
                                                <th className="column-2">Nombre</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                products.map(prod=>(
                                                    <tr className="table_row" key={prod._id}>
                                                        <td className="column-1">
                                                            <div className="how-itemcart1">
                                                                <img src={prod.images[0]} alt={prod.name}></img>
                                                            </div>
                                                        </td>
                                                        <td className="column-2">{prod.name}</td>
                                                        <td className="column-6">
                                                            <button type="button" onClick={() =>onDelete(prod._id)} className="btn btn-danger"><FaTrash /></button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

    
        </>
    )
}

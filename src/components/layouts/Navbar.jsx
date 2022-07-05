import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userCont } from '../../context/UserContext';
import { get } from '../../api'
import { types } from '../../types/types';



export const Navbar = () => {

    const {logged, setUser} = useContext(userCont);
    const navigate = useNavigate();

    const handleLogOut = () =>{
        get("/api/auth/logout")
        .then(result=>{
            console.log(result)
            setUser({
                type: types.logout
            })
            console.log("logout correcto")
            navigate("/")
        })
    }

    return (

        <div>
            <br />
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    {!logged&&<a href="/login" type='button' className="flex-c-m trans-04 p-lr-25"><h2> LOGIN</h2> </a>}
                </li>
                <li className="nav-item">
                    {!logged&&<a href="/signup" className="flex-c-m trans-04 p-lr-25"><h2>SIGNUP</h2> </a>}
                </li>
                <li className="nav-item">
                     {logged&&<a href="/listAllProducts" className="flex-c-m trans-04 p-lr-25" > Listar productos</a>}
                </li>
                <li className="nav-item">
                     {logged&&<button className="flex-c-m trans-04 p-lr-25"  onClick={handleLogOut}> SALIR</button>}
                </li>
            </ul>
        
      </div>
  )
}

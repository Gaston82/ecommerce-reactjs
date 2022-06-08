import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userCont } from '../../context/UserContext';
import { get } from '../../api'


export const Navbar = () => {

    const {logged, setUser} = useContext(userCont);
    const navigate = useNavigate();

    const handleLogOut = () =>{
        get("/api/auth/logout")
        .then(result=>{
            console.log(result)
            setUser({
                type:'LOGOUT'
            })
            console.log("logout correcto")
            navigate("/")
        })
    }

    return (
        <div> 	           
            <header>
                <div className="container-menu-desktop">
                    <div className="top-bar">
                        <div className="content-topbar flex-sb-m h-full container">
                            <div className="left-top-bar">
                            </div>
                            <div className="right-top-bar flex-w h-full">
                                {
                                    !logged?<>
                                        <a href="/login" className="flex-c-m trans-04 p-lr-25">LOGIN </a>
                                        <a href="/signup" className="flex-c-m trans-04 p-lr-25">SIGNUP </a>
                                    
                                    </>:
                                    <>
                                        <a href="/#" className="flex-c-m trans-04 p-lr-25"  onClick={handleLogOut}> SALIR</a>
                                    
                                    </>
                                }
                            </div>
                        </div>
                    </div>     
                </div>
            </header>
        </div>
  )
}

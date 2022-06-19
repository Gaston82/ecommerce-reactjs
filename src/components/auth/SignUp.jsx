import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userCont } from '../../context/UserContext'
import { post } from '../../api'
import "../../css/auth/Login_v5/css/main.css"
import { Errors } from '../errors/Errors'
import { types } from '../../types/types'

export const SignUp = () => {

  const {setUser} = useContext(userCont)
  const navigate = useNavigate()

  const [errors,setErrors] = useState({
      isErrors:false,
      errors:[]
  })

  const handleSignup = (event)=>{
      event.preventDefault()
      const {email,password,name} = event.target

      post("/api/auth/signup",{
          email:email.value,
          password:password.value,
          name:name.value
      }).then(({user})=>{
          setUser({
            type:types.signup,
            payload:user
          })
          console.log("registro exitoso")

          navigate("/store")
      })
      .catch(error=>{
          console.log(error)
          setErrors({
              isErrors:true,
              errors:error.errors.map(e=>e.message)
          })
      })

  }


  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <form className="login100-form validate-form flex-sb flex-w" onSubmit={ handleSignup }>

            <a href='https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/facebook' className="btn-face m-b-20">
                <i className="fa fa-facebook-official"></i>
                Facebook
            </a>

            <a href='https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/google' className="btn-google m-b-20">
              <img src="/icon-google.png" alt="GOOGLE"></img>
            </a>

            <div className="p-t-31 p-b-9">
              <span className="txt1">
                Nombre
              </span>
            </div>
            <div className="wrap-input100 validate-input">
              <input className="input100" type="text" name="name" ></input>
              <span className="focus-input100"></span>
            </div>
            <div className="p-t-31 p-b-9">
              <span className="txt1">
                Correo
              </span>
            </div>
            <div className="wrap-input100 validate-input">
              <input className="input100" type="email" name="email" ></input>
              <span className="focus-input100"></span>
            </div>
            
            <div className="p-t-13 p-b-9">
              <span className="txt1">
                Contraseña
              </span>
            </div>
            <div className="wrap-input100 validate-input">
              <input className="input100" type="password" name="password" ></input>
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn m-t-17">
              <button className="login100-form-btn">
                Registrarse
              </button>
            </div>
          </form>

          <Errors errors={errors}/>
        </div>
      </div>
    </div>
  )
}

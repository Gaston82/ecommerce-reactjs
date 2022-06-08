import React from 'react'
import { createContext, useReducer } from 'react';
import authReducer, { initialState } from '../reducers/authReducer';

export const userCont = createContext();


export const UserContext = ({children}) => {


    
    const [state,dispatch] = useReducer(authReducer,initialState)

    return (
        <userCont.Provider  value={{
            user:state.user,
            logged:state.logged,
            setUser:dispatch
          }}>

          {children}
        </userCont.Provider>
    )
}

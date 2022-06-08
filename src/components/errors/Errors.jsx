import React from 'react'

export const Errors = ({errors}) => {
  return (

        <>
            {
                errors.isErrors&&
                <div >
                    <ul>
                        {errors.errors.map((error,index)=>
                            <li key={index}>{error}</li>
                        )}
                    </ul>
                </div>
            }
    
        </>
  )
}

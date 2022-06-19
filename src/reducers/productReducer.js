import { types } from "../types/types";

export const initialState = {
    products:[],
    quantity:0,
    totalProducts:0
}

//initialState.product = initialState.product + 1

/**
 * 
 * action: Object(type,payload)
 * 
 */

export default function productReducer(state = {},action){
    let newState

 
    switch (action.type) {
        case types.removeProduct: 
            return {
                products: state.products.filter((prod)  => {
                    return prod.id !== action.payload
                })
            }

        case types.addProduct:
            return {
                products: [ action.payload, ...state.products]
            }
        
        case types.editProduct:
            
            const updateProduct = action.payload;
            const updateProducts = state.products.map(prod => {
                if(prod.id === updateProduct.id ){
                    return updateProduct;
                }
                return prod;
            })

                return {
                        products: updateProducts
                    }
    
        default:
            newState = {
                product:state.product
            }
            break;
    }

    return newState
}
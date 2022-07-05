import { types } from "../types/types";

export const initialState = {
    products:[]
}

export default function productReducer(state,action){
    let newState

    switch (action.type) {
        case types.addProduct:
            newState = {
                products: [ action.payload, ...state.products]
            }
            break;
        case types.removeOffer:
            return {
                products: state.products.filter( prod => {
                    return prod.id !== action.payload
                })
            }
        default:
            newState = {
                ...state
            }
            break;
    }

    return newState
}
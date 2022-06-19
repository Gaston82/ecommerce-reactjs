import { types } from "../types/types";

export const initialState = {
    logged:false,
    user:{}
}

export default function authReducer(state,action){
    let newState

    switch (action.type) {
        case  types.login:
            newState = {
                logged:true,
                user: action.payload
            }
            break;
        case types.signup:
            newState = {
                logged:true,
                user: action.payload
            }
            break
        case types.logout:
            newState = {
                logged:false,
                user: {}
            }
            break;
        default:
            newState = {
                ...state
            }
            break;
    }

    return newState
}
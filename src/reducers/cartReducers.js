export const initialState = {
    items:[]
}

export default function cartReducer(state,action){
    let newState

    switch (action.type) {
        case 'UPDATE':
            newState = {
                items:action.payload
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
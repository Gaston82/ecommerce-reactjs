import { applyMiddleware, createStore,compose,combineReducers } from 'redux'
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import  { productReducer,selectedProductReducer } from '../reducers/productReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    allProducts: productReducer,
    product:selectedProductReducer
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
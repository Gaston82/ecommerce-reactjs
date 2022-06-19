import { applyMiddleware, createStore,compose,combineReducers } from 'redux'
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import productReducer from '../reducers/productReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    product: productReducer
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
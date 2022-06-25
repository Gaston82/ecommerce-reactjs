import { types } from "../../types/types";
import { ActionTypes } from "../constants/action-types";

export const initialState = {
  products: [],
  quantity: 0,
  totalProducts: 0,
};

//initialState.product = initialState.product + 1

/**
 *
 * action: Object(type,payload)
 *
 */

export const productReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

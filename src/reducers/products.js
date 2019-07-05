import * as products from '../action-types/products'

const initialState = {
  isLoading: false,
  products: [],
  errorResponse: '',
}

export default function (state = initialState, action) {
  switch (action.type) {

    case products.GET_PRODUCTS_INIT:
      return { ...state, isLoading: true, };

    case products.GET_PRODUCTS_SUCCESS:
      console.warn("reducer", action.payload)
      return { ...state, products: action.payload, isLoading: false };

    case products.GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, errorResponse: action.payload, };

    default:
      return state;
  }
}
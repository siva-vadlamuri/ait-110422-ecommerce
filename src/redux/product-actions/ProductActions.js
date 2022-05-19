import { ACTION_TYPE } from "../types/ActionType";

// setProducts
// fetchProducts

// Synchronous Action Creators and
// Asynchronous Actions creator

export const addToCart = (product) => {
  return { type: ACTION_TYPE.ADD_TO_CART, payload: product };
};

export const removeFromCart = (id) => {
  console.log(id);
  return {
    type: ACTION_TYPE.REMOVE_FROM_CART,
    payload: id,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fetch("http://fakestoreapi.com/products/");
    const data = await response.json();
    dispatch({ type: ACTION_TYPE.FETCH_PRODUCTS, payload: data });
  };
};

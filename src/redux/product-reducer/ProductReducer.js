const initalState = {
  products: [],
  cartData: [],
};

export const ProductReducer = (state = initalState, action) => {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
};

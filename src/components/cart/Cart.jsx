import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/product-actions/ProductActions";

function Cart() {
  // we have hook to access the redux store state

  const dispatch = useDispatch();

  //   TODO:
  // We need to show the products if avaliable else show the text
  // total price of all the product in the cart
  const cart_data = useSelector((state) => state.productsData.cartData);
  // Map, filter and reduce
  // forEach and map
  const totalPrice = cart_data.reduce((prevsValue, currentValue) => {
    return prevsValue + currentValue.price;
  }, 0);
  return (
    <div>
      {cart_data && cart_data.length > 0 && (
        <div className="products__total">
          <p className="mt-2">Total Price : {totalPrice}</p>
        </div>
      )}
      <div className="container mt-2 border border-dark">
        {cart_data && cart_data.length ? (
          cart_data.map((product) => (
            <div key={product.id} className="row mt-3">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="250px"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <div className="mt-2 p-1">
                  <div>
                    <h2>Title:{product.title}</h2>
                  </div>
                  <div>
                    <span className="mt-2">{product.category}</span>
                  </div>
                  <div>
                    <p className="mt-1 p-2">{product.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="mt-2">
                  <div className="pt-2">Price :{product.price}</div>
                  <div>
                    <button
                      className="btn btn-danger mt-2 px-3 py-2"
                      onClick={() => {
                        dispatch(removeFromCart(product.id));
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Please add some products to the cart</p>
        )}
      </div>
    </div>
  );
}

export default Cart;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addToCart } from "../../redux/product-actions/ProductActions";
import { useDispatch } from "react-redux";

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isProductedAdded, setIsProductAdded] = useState(false);

  const getProductData = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    console.log("component mounted");
    getProductData();
  }, []);
  // array.length
  // for objects how can you check the data is avaliable or not?
  return (
    <div className="container">
      {Object.keys(product).length ? (
        <div className="row border border-primary mt-2">
          <div className="col-lg-6 p-5 mt-2">
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 border-start border-primary">
            <div className="mt-2">
              <h3>{product.title}</h3>
            </div>
            <div className="product__price my-3">
              <span className="bg-info text-light p-1">
                Price : $ {product.price}
              </span>
            </div>
            <div className="product__category mt-3">
              <span className="bg-secondary text-white p-1">
                Category: {product.category}
              </span>
            </div>
            <div className="product__desc mt-2">
              <p className="p-2">{product.description}</p>
            </div>
            <div className="product__add_to_cart mt-3">
              <button
                onClick={() => {
                  dispatch(addToCart(product));
                  setIsProductAdded(true);
                }}
                className="btn btn-info px-3 py-2"
              >
                {isProductedAdded ? "Added" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img
            src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
            alt="loader"
          />
        </div>
      )}
    </div>
  );
}

export default Product;

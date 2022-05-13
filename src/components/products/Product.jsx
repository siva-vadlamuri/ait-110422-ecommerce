import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

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
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default Product;

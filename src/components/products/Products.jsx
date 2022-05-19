import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../redux/product-actions/ProductActions";
function Products() {
  const products = useSelector((state) => state.productsData.products);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchProducts());
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="col-md-3">
                <Link to={`/product/${product.id}`}>
                  <div key={product.id} className="card my-2">
                    <img
                      src={product.image}
                      alt=""
                      className="card-img-top img-fluid p-2"
                    />
                    <div className="card-body">
                      <h4 className="card-title">{product.category}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div>
              <img
                src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                alt="loader"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;

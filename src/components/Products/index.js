import "./style.css";
import { useSelector } from "react-redux";
import Product from "../Product";

const Products = () => {
  const products = useSelector((store) => store.products);

  return (
    <>
      <div className="container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;

import "./style.css";
import { useSelector } from "react-redux";
import Product from "../Product";

const Products = () => {
  const products = useSelector((store) => store.products);

  return (
    <>
      <div className="container">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Product from "../Product";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  let history = useHistory();

  return (
    <>
      <Typography component="h1" variant="h4">
        Carrinho de Compras
      </Typography>
      <div>
        {cart.map((product, index) => (
          <Product key={index} product={product} isRemovable />
        ))}
      </div>
      <button
        type="submit"
        className="btn-grad"
        onClick={() => history.push("/")}
      >
        COMPRAR MAIS PRODUTOS
      </button>
    </>
  );
};

export default Cart;

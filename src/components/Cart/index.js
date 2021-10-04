import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Product from "../Product";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  let history = useHistory();

  return (
    <>
      <Typography omponent="h1" variant="h4" color="secondary">
        Carrinho de Compras
      </Typography>
      <div>
        {cart.map((product) => (
          <Product key={product.id} product={product} isRemovable />
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

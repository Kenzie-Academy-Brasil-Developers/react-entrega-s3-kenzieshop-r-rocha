import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import Product from "../Product";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  let history = useHistory();
  let total = cart.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);

  return (
    <>
      <Grid container>
        <Typography component="h1" variant="h4" paragraph>
          Carrinho de Compras
        </Typography>
      </Grid>

      <Grid container mt={6} justifyContent="center">
        {cart.map((product, index) => (
          <Grid item key={index}>
            <Product product={product} isRemovable />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={4}>
        <Typography component="h2" variant="h4" color="primary">
          Resumo do pedido
        </Typography>
        {cart.map((product, index) => (
          <Typography key={index} component="h5" color="secondary" paragraph>
            <div item>{`${product.name} - Valor: R$ ${product.price}`}</div>
          </Typography>
        ))}
        <Typography
          component="h2"
          variant="h4"
          color="primary"
        >{`Total: R$ ${total.toFixed(2)}`}</Typography>
      </Grid>
      <Button
        sx={{ marginTop: 10 }}
        type="submit"
        className="btn-grad"
        onClick={() => history.push("/")}
      >
        COMPRAR MAIS PRODUTOS
      </Button>
    </>
  );
};

export default Cart;

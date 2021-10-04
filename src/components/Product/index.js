import React from "react";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/modules/cart/actions";
import "./style.css";

const Product = ({ product, isRemovable = false }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      // maxWidth: 325,
      width: "27vh",
      margin: theme.spacing(2),
      padding: "0.35%",
      backgroundColor: "rgba(155, 155, 155, 75%)",
      color: "rbg(127, 85, 57)",
      borderRadius: 5,
    },
    media: {
      height: 77,
      marginTop: 10,
      paddingTop: "56.25%", // 16:9
    },
    typography1: {
      fontSize: 21,
      color: "black",
    },
    typography2: {
      fontSize: 35,
      color: "black",
    },
  }));

  const classes = useStyles();

  const { id, name, price, image } = product;

  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <CardMedia className={classes.media} image={image} title={name} />
        <Typography
          className={classes.typography1}
          variant="body1"
          color="textSecondary"
          component="p"
        >
          {name}
        </Typography>
        <Typography
          className={classes.typography2}
          variant="body1"
          color="textSecondary"
          component="p"
        >
          R$ {price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardContent>
        {isRemovable ? (
          <Button
            className="btn-grad"
            onClick={() => dispatch(removeFromCart(id))}
          >
            Remover item
          </Button>
        ) : (
          <Button
            className="btn-grad"
            onClick={() => dispatch(addToCart(product))}
          >
            Comprar
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Product;

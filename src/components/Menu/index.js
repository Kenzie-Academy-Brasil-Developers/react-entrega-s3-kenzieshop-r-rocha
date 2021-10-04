import * as React from "react";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const cart = useSelector((store) => store.cart);

  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => sendTo("/")}
        >
          <MenuIcon />
        </IconButton>
        <MenuItem onClick={() => sendTo("/")}>Loja</MenuItem>
        <Badge badgeContent={cart.length} color="error">
          <MenuItem onClick={() => sendTo("/cart")}>Pedidos</MenuItem>
        </Badge>
        <Box sx={{ flexGrow: 1 }} />
        <MenuItem onClick={() => sendTo("/login")}>Entrar</MenuItem>
        <MenuItem onClick={() => sendTo("/register")}>Cadastro</MenuItem>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="small"
            aria-label="notifications"
            color="inherit"
            onClick={() => sendTo("/cart")}
          >
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon /> Carrinho
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;

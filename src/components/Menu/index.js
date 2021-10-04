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
        <MenuItem onClick={() => sendTo("/cart")}>Meus Pedidos</MenuItem>
        <MenuItem onClick={() => sendTo("/login")}>Login</MenuItem>
        <MenuItem onClick={() => sendTo("/register")}>Registro</MenuItem>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="notifications"
            color="inherit"
            onClick={() => sendTo("/cart")}
          >
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          ></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;

import React from "react";
import Cart from "../components/Cart";
import Login from "../components/Login";
import Register from "../components/Register";
import Products from "../components/Products";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default Routes;

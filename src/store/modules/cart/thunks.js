import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispacth) => {
  localStorage.setItem([...product]);
  dispacth(addToCart(product));
};

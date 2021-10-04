// Adicionamos o applyMiddleweare do próprio redux
import { createStore, combineReducers, applyMiddleware } from "redux";

// Também adicionamos o thunk
import thunk from "redux-thunk";

import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer"
import userReducer from "./modules/user/reducer.js"

const reducers = combineReducers({ products: productsReducer, cart: cartReducer, user: userReducer });

// Além do reducers, colocamos o applyMiddleware passando o thunk
const store = createStore(reducers, applyMiddleware(thunk));

export default store;

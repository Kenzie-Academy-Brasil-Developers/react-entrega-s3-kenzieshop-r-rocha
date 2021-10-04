/** import api from "../../../services/api"; */
import axios from "axios";
import { signIn, signUp } from "./action";

export const signInThunk = (userData) => (dispatch) => {
  axios
    .post("https://api-nodejs-todolist.herokuapp.com/user/login/", userData)
    .then((response) => {
      localStorage.setItem("token", response.data.access);
      dispatch(signIn(response.data.access));
      alert("Login realizado com sucesso!");
    })
    .catch((error) => {
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        alert(error.response.data.message);
      } else {
        // Something happened in setting up the request and triggered an Error
        alert("Error", error.message);
      }
    });
};

export const signUpThunk = (userData) => (dispatch) => {
  axios
    .post("https://api-nodejs-todolist.herokuapp.com/user/register/", userData)
    .then((response) => {
      dispatch(signUp(response.data));
      alert("Cadastro realizado com sucesso!");
    })
    .catch((error) => {
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        alert(error.response.data.message);
      } else {
        // Something happened in setting up the request and triggered an Error
        alert("Error", error.message);
      }
    });
};

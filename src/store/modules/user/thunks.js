/** import api from "../../../services/api"; */
import axios from "axios";
import { signIn, signUp } from "./action";

export const signInThunk = (userData) => (dispatch) => {

    axios
        .post("https://api-nodejs-todolist.herokuapp.com/user/login/", userData)
        .then((response) => {
            console.log(response.data);
            localStorage.setItem('token', response.data.access);
            dispatch(signIn(response.data.access));
        })
        .catch((err) => {
            alert("Requisição Falhou");
        })
}

export const signUpThunk = (userData) => (dispatch) => {

    axios
        .post("https://api-nodejs-todolist.herokuapp.com/user/register/", userData)
        .then((response) => {
            console.log(response.data);
            dispatch(signUp(response.data));
        })
        .catch((err) => {
            console.log(err);
            alert("Conta criada com sucesso!");
        })
}
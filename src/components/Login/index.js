import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../store/modules/user/thunks";
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";

const Login = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  let history = useHistory();

  let dispatch = useDispatch();

  const onSubmitFunction = (data) => {
    dispatch(signInThunk(data));
    history.push("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 300,
        width: 300,
        mt: 25,
      }}
    >
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Typography component="h1" variant="h4" color="secondary">
            Login
          </Typography>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Email"
              variant="outlined"
              color="secondary"
              required
              fullWidth
              id="email"
              aria-describedby="my-helper-text"
              {...register("email")}
            />
            <FormHelperText id="my-helper-text">
              {errors.email?.message}
            </FormHelperText>
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              required
              fullWidth
              id="password"
              {...register("password")}
            />
            <FormHelperText id="my-helper-text">
              {errors.password?.message}
            </FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => reset}
            >
              ENVIAR
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/")}
            >
              VOLTAR
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Login;

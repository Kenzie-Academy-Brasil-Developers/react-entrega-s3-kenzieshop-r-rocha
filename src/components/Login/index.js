import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../store/modules/user/thunks";
import {
  Button,
  Container,
  CssBaseline,
  FormHelperText,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";


const Login = () => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    form: {
      color: "rgba(255, 255, 255, 30%)",
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(4),
    },
  }));

  const classes = useStyles;

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
    console.log(data);
    dispatch(signInThunk(data));
  };

  return (
    <Container component="main" maxWidth="xs" disableGutters>
      <CssBaseline />
      
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" color="secondary">
          Login
        </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(onSubmitFunction)}
          >
          <Grid container>
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
                className={classes.field}
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
                className={classes.submit}
                type="submit"
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => reset}
              >
                ENVIAR
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                className={classes.submit}
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => history.push("/")}
              >
                VOLTAR
              </Button>
            </Grid>
        </Grid>
        </form>
        <Typography color="primary">
          <Button onClick={() => history.push("/register")}>
            Sign Up for Kenzie Coffee 
          </Button>
        </Typography>
        
      </Paper>
    </Container>
  );
};

export default Login;

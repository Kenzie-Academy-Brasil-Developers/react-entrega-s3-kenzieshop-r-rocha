import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Paper } from "@material-ui/core";

import {
  Button,
  Container,
  CssBaseline,
  FormHelperText,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

import { Save } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { signUpThunk } from "../../store/modules/user/thunks";
import { useHistory } from "react-router-dom";

const Register = () => {
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
      marginTop: theme.spacing(3),
    },
  }));

  const classes = useStyles;

  const formSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email address"),
    password: yup
      .string()
      .min(
        8,
        "The password must contain a minimum of 8 alphanumeric characters"
      ),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    name: yup
      .string()
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Only alphabets are allowed for this field"
      ),
    age: yup.number().required("Age is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const onSubmitFunction = (data) => {
    console.log(data);
    dispatch(signUpThunk(data));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" color="secondary">
            Crie uma conta
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(onSubmitFunction)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Name"
                  variant="outlined"
                  color="secondary"
                  required
                  fullWidth
                  id="name"
                  aria-describedby="my-helper-text"
                  {...register("name")}
                />
                <FormHelperText id="my-helper-text">
                  {errors.name?.message}
                </FormHelperText>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  className={classes.field}
                  label="E-mail"
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

              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.field}
                  label="Password"
                  variant="outlined"
                  color="secondary"
                  required
                  fullWidth
                  type="password"
                  id="password"
                  aria-describedby="my-helper-text"
                  {...register("password")}
                />
                <FormHelperText id="my-helper-text">
                  {errors.password?.message}
                </FormHelperText>
              </Grid>

              <Grid item xs={12} sm={6}>
              <form className={classes.field}
                  label="Password confirmation"
                  variant="outlined"
                  color="secondary"
                  required
                  fullWidth
                  type="password"
                  id="password_confirmation"
                  aria-describedby="my-helper-text"
                />
                <FormHelperText id="my-helper-text">
                  {errors.password_confirmation?.message}
                </FormHelperText>
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  className={classes.field}
                  label="Age"
                  variant="outlined"
                  color="secondary"
                  required
                  fullWidth
                  type="number"
                  id="age"
                  aria-describedby="my-helper-text"
                  {...register("age")}
                />
                <FormHelperText id="my-helper-text">
                  {errors.age?.message}
                </FormHelperText>
              </Grid>

              <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                className={classes.submit}
                variant="outlined"
                color="primary"
                fullWidth
                onClick={() => reset}
                startIcon={<Save />}
              >
                Save
              </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
              <Button
                type="submit"
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
      </Paper>
    </Container>
  );
};

export default Register;

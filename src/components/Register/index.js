import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Box,
  Button,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";

import { Save } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { signUpThunk } from "../../store/modules/user/thunks";
import { useHistory } from "react-router-dom";

const Register = () => {
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
    dispatch(signUpThunk(data));
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
            Crie uma conta
          </Typography>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Name"
              variant="outlined"
              color="secondary"
              required
              fullWidth
              aria-describedby="my-helper-text"
              {...register("name")}
            />
            <FormHelperText id="my-helper-text">
              {errors.name?.message}
            </FormHelperText>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="E-mail"
              variant="outlined"
              color="secondary"
              required
              fullWidth
              aria-describedby="my-helper-text"
              {...register("email")}
            />
            <FormHelperText id="my-helper-text">
              {errors.email?.message}
            </FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Password"
              variant="outlined"
              color="secondary"
              required
              fullWidth
              type="password"
              aria-describedby="my-helper-text"
              {...register("password")}
            />
            <FormHelperText id="my-helper-text">
              {errors.password?.message}
            </FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Password confirmation"
              variant="outlined"
              color="secondary"
              required
              fullWidth
              type="password"
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              {errors.password_confirmation?.message}
            </FormHelperText>
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              label="Age"
              variant="outlined"
              color="secondary"
              required
              fullWidth
              type="number"
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
              variant="contained"
              color="primary"
              onClick={() => reset}
              startIcon={<Save />}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              type="submit"
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

export default Register;

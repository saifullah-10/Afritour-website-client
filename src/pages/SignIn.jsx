import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FaGithub } from "react-icons/fa";
import Grid from "@mui/material/Grid";
import { FaGoogle } from "react-icons/fa";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase";
import swal from "sweetalert";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const handleGithubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        swal("Success", "Login With Github", "success");
        console.log(user);
        navigate("/");
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
      });
  };
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        swal("Success", "Login With E-mail", "success");
        navigate("/");
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("login Success");
        navigate("/");
        swal("Success", "", "success");
      })
      .catch((err) => {
        console.error(err.message);

        if (/invalid-credential/g.test(err.message)) {
          swal("Incorrect Email Or Password", "", "error");
        } else {
          swal("Something Went Wrong", "", "error");
        }
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ border: "2px solid", p: 4, borderRadius: 5, mt: 2 }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container sx={{ gap: "20px" }}>
              <Grid item xs>
                <Button
                  onClick={handleGoogleLogin}
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    gap: 1,
                  }}
                >
                  <FaGoogle className=" text-2xl" /> <p>Google</p>
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  onClick={handleGithubLogin}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, gap: 1 }}
                >
                  <FaGithub className=" text-2xl" /> <p>Github Login</p>
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link to={"/signup"} variant="body2">
                  <p className=" text-blue-700">
                    {"Don't have an account? Sign Up"}
                  </p>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

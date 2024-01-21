import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { RootState } from "../../redux/store";
import loginActionsProvider from "../../redux/login/actions";
import { toFormData } from "axios";
import { useNavigate } from "react-router-dom";
import useNormalAxiosInstance from "../../axios/normalAxios";
import { useSelector } from "react-redux";
import userContextActionsProvider from "../../redux/userContext/actions";

const Login = () => {
    const loginState = useSelector(
        (state: RootState) => 
            state
                .loginState
    );

    const {
        loginId,
        password
    } = loginState;

    const {
        setLoginId,
        setPassword,
    } = loginActionsProvider();

    const {
        setUserToken,
        setUsername,
    } = userContextActionsProvider();

    const normalAxiosInstance = useNormalAxiosInstance();
    const normalAxios = normalAxiosInstance();
    const navigate = useNavigate();

    const handleLogin = () => {
        const formData = toFormData({
            "password": password,
            "username": loginId,
        });

        normalAxios({
            "data": formData,
            "url": "/login",
        })
            .then((response) => {
                const { token } = response.data;
                setUserToken(token);
                setUsername(loginId);
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <Box
            width="100vw"
            height="100vh"
            sx={{ "background": "#F9F7F7" }}
        >
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        "alignItems": 'center',
                        "display": 'flex',
                        "flexDirection": 'column',
                        "paddingTop": 20
                    }}
                >
                    <Avatar sx={{ "bgcolor": 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant="h5" color="black" mt={2}>
                        Log in
                    </Typography>

                    <Box sx={{ "mt": 1 }}>
                        <TextField
                            value={loginId}
                            onChange={(event) => setLoginId(event.target.value)}
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
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
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
                            onClick={handleLogin}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ "mb": 2, "mt": 3 }}
                        >
                            Log In
                        </Button>

                        <Grid container>
                            {/* <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid> */}

                            <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
                                <Link href="/signup" variant="body2">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Login;

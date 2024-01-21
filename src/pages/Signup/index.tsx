import {
    Avatar,
    Box,
    Button,
    Container,
    TextField,
    Typography,
} from "@mui/material";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { toFormData } from "axios";
import { useNavigate } from "react-router-dom";
import useNormalAxiosInstance from "../../axios/normalAxios";
import { useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const normalAxiosInstance = useNormalAxiosInstance();
    const normalAxios = normalAxiosInstance();
    const navigate = useNavigate();

    const handleSignup = () => {
        const formData = toFormData({
            "name": name,
            "password": password,
            "user_tags": "",
            "username": email,
        });
        
        normalAxios({
            "data": formData,
            "url": "/register",
        })
            .then(() => {
                navigate("/login");
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
                        "paddingTop": 15
                    }}
                >
                    <Avatar sx={{ "bgcolor": 'secondary.main' }}>
                        <PersonAddIcon />
                    </Avatar>

                    <Typography component="h1" variant="h5" color="black" mt={2}>
                        Sign up
                    </Typography>

                    <Box sx={{ "mt": 1 }}>
                        <TextField
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
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
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            margin="normal"
                            required
                            fullWidth
                            id="full-name"
                            label="Full Name"
                            name="name"
                            autoComplete="name"
                        />

                        <TextField
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            onClick={handleSignup}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ "mb": 2, "mt": 3 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Signup;

import {
    Avatar,
    Box,
    Button,
    Container,
    TextField,
    Typography,
} from "@mui/material";

import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Signup = () => {
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
                            id="full-name"
                            label="Full Name"
                            name="name"
                            autoComplete="name"
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

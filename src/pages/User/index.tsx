import {
    Box,
    Button,
    Paper,
    Stack,
    Typography
} from "@mui/material";

import { useEffect, useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EditProfile from "./components/EditProfile";
import MainLayout from "../../layout/MainLayout";
import Modal from "../../components/Modal";
import { RootState } from "../../redux/store";
import useAuthorizedAxiosInstance from "../../axios/authorizedAxios";
import { useSelector } from "react-redux";
import userContextActionsProvider from "../../redux/userContext/actions";

const User = () => {
    const [editProfileOpen, setEditProfileOpen] = useState(false);
    const [refresh, setRefresh] = useState(0);

    const userContextState = useSelector((state: RootState) =>
        state
            .userContextState
    );

    const {
        aboutUser,
        name,
    } = userContextState;

    const {
        setAboutUser,
        setInterests,
        setName,
        setUsername,
    } = userContextActionsProvider();

    const authorizedAxiosInstance = useAuthorizedAxiosInstance();
    const authorizedAxios = authorizedAxiosInstance();

    useEffect(() => {
        authorizedAxios.get("/getUser")
            .then((response) => {
                const userData = response.data.user;
                const {
                    fname,
                    username
                } = userData;

                setName(fname);
                setUsername(username);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <MainLayout>
            <Box width="100%" display="flex" justifyContent="center">
                <Paper sx={{ 
                    "marginTop": "70px",
                    "p": "50px",
                    "width": "70%",
                }}>
                    <Stack spacing={3}>
                        <Typography variant="h4" fontWeight="500" paddingLeft={1}>
                            Profile
                        </Typography>

                        <Stack direction="row">
                            <AccountCircle sx={{ "height": "80px", "width": "80px" }}/>

                            <Box
                                display="flex"
                                alignItems="center"
                                paddingLeft={3}
                                paddingBottom={2}
                            >
                                <Typography 
                                    variant="h6" 
                                    fontWeight="500" 
                                >
                                    {name}
                                </Typography>
                            </Box>
                        </Stack>

                        <Typography paddingLeft={5} variant="h6">
                            About
                        </Typography>

                        <Typography paddingLeft={5}>
                            {
                                (aboutUser === "")
                                    ? "Write something about you here!"
                                    : aboutUser
                            }
                        </Typography>

                        <Box width="100%" display="flex" justifyContent="flex-end">
                            <Button onClick={() => setEditProfileOpen(true)}>
                                Edit Profile
                            </Button>
                        </Box>
                    </Stack>
                </Paper>

                <Modal
                    open={editProfileOpen}
                    onClose={() => setEditProfileOpen(false)}
                >
                    <EditProfile
                        aboutUser={aboutUser}
                        name={name}
                        onSaveChangesClick={() => {
                            setEditProfileOpen(false);
                            console.log("saved");
                        }}
                    />
                </Modal>
            </Box>
        </MainLayout>
    );
};

export default User;

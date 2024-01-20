import {
    Box,
    Button,
    Modal,
    Paper,
    Stack,
    Typography
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import EditProfile from "./components/EditProfile";
import MainLayout from "../../layout/MainLayout";
import { useState } from "react";

const User = () => {
    const [editProfileOpen, setEditProfileOpen] = useState(false);

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
                            Account
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
                                Full Name
                                </Typography>
                            </Box>
                        </Stack>

                        <Typography paddingLeft={5} variant="h6">
                            About
                        </Typography>

                        <Typography paddingLeft={5}>
                            {
                                ("" === "")
                                    ? "Write something about you here!"
                                    : ""
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
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <EditProfile onSaveChangesClick={() => setEditProfileOpen(false)}/>
                </Modal>
            </Box>
        </MainLayout>
    );
};

export default User;

import {
    Box,
    Button,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import { toFormData } from "axios";
import useAuthorizedAxiosInstance from "../../../../axios/authorizedAxios";
import { useState } from "react";
import userContextActionsProvider from "../../../../redux/userContext/actions";

interface EditProfileProps {
    onSaveChangesClick: () => void;
    name: string;
    aboutUser: string;
}

const EditProfile: React.FC<EditProfileProps> = ({
    aboutUser,
    name,
    onSaveChangesClick,
}) => {
    const [updatedUserInfo, setUpdatedUserInfo] = useState({
        "aboutUser": aboutUser,
        "name": name,
    });

    const {
        setAboutUser,
        setName,
    } = userContextActionsProvider();

    const authorizedAxiosInstance = useAuthorizedAxiosInstance();
    const authorizedAxios = authorizedAxiosInstance();

    const handleUserInfoUpdate = () => {
        const formData = toFormData({
            "about": updatedUserInfo.aboutUser,
            "fname": updatedUserInfo.name,
            "user_tags": "",
        });
        
        authorizedAxios({
            "data": formData,
            "url": "/updateUser",
        })
            .catch((error) => console.error(error));

        setAboutUser(updatedUserInfo.aboutUser);
        setName(updatedUserInfo.name);

        onSaveChangesClick();
    };



    return (
        <Stack spacing={4}>
            <Typography pl={1} variant="h6">
                Edit Profile
            </Typography>

            <TextField
                value={updatedUserInfo.name}
                onChange={(event) => {
                    setUpdatedUserInfo({
                        ...updatedUserInfo,
                        "name": event.target.value
                    });
                }}
                fullWidth
                variant="outlined"
                label="Full Name"
            />

            <TextField
                value={updatedUserInfo.aboutUser}
                onChange={(event) => {
                    setUpdatedUserInfo({
                        ...updatedUserInfo,
                        "aboutUser": event.target.value
                    });
                }}
                fullWidth
                variant="outlined"
                label="About"
                multiline
                maxRows={10}
            />

            <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" onClick={handleUserInfoUpdate}>
                    Save Changes
                </Button>
            </Box>
        </Stack>
    );
};

export default EditProfile;

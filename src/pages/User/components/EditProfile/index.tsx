import {
    Box,
    Button,
    Stack,
    TextField,
    Typography
} from "@mui/material";

interface EditProfileProps {
    onSaveChangesClick: () => void;
}

const EditProfile: React.FC<EditProfileProps> = ({
    onSaveChangesClick
}) => {
    return (
        <Stack spacing={4}>
            <Typography pl={1} variant="h6">
                Edit Profile
            </Typography>

            <TextField
                fullWidth
                variant="outlined"
                label="Full Name"
            />

            <TextField
                fullWidth
                variant="outlined"
                label="About"
                multiline
                maxRows={10}
            />

            <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" onClick={onSaveChangesClick}>
                    Save Changes
                </Button>
            </Box>
        </Stack>
    );
};

export default EditProfile;

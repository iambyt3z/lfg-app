import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography
} from "@mui/material";

const style = {
    "bgcolor": 'background.paper',
    "border": '2px solid #000',
    "boxShadow": 24,
    "left": '50%',
    "p": 4,
    "position": 'absolute' as 'absolute',
    "top": '50%',
    "transform": 'translate(-50%, -50%)',
    "width": 400,
};

interface EditProfileProps {
    onSaveChangesClick: () => void;
}

const EditProfile: React.FC<EditProfileProps> = ({
    onSaveChangesClick
}) => {
    return (
        <Paper sx={style}>
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
        </Paper>
    );
};

export default EditProfile;

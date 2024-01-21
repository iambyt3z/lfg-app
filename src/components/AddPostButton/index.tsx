import { 
    Box,
    Button,
    Fab, 
    Stack, 
    TextField 
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import Modal from "../Modal";
import applicationContextActionsProvider from "../../redux/applicationContext/actions";
import { toFormData } from "axios";
import useAuthorizedAxiosInstance from "../../axios/authorizedAxios";
import { useState } from "react";

const AddPostButton = () => {
    const [openAddPostModal, setOpenAddPostModal] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const {
        setOpenBackdrop,
        increamentRefreshCounter,
    } = applicationContextActionsProvider();

    const authorizedAxiosInstance = useAuthorizedAxiosInstance();
    const authorizedAxios = authorizedAxiosInstance();

    const handleAddPost = () => {
        const formData = toFormData({
            "description": description,
            "post_tags": "_",
            "title": title,
        });

        setOpenBackdrop(true);

        authorizedAxios({
            "data": formData,
            "url": "/newPost",
        })
            .then(() => {
                increamentRefreshCounter();
                setOpenBackdrop(false);
                setOpenAddPostModal(false);
            })
            .catch((error) => {
                console.error(error);
                setOpenBackdrop(false);
                setOpenAddPostModal(false);
            });
    };

    return (
        <>
            <Fab
                onClick={() => setOpenAddPostModal(true)}
                variant="extended" 
                sx={{
                    "&:hover": { "background": "#3F72AF" },
                    "background": "#112D4E",
                    "bottom": 30,
                    "color": "white",
                    "position": "absolute",
                    "right": 30,
                    "zIndex": 10,
                }}
            >
                <AddIcon sx={{ "mr": 0.5 }} />
                Add Post
            </Fab>

            <Modal 
                open={openAddPostModal} 
                onClose={() => setOpenAddPostModal(false)}
                paperStyle={{ "width": "700px" }}
            >
                <Stack spacing={3}>
                    <TextField
                        label="Title"
                        value={title}
                        fullWidth
                        onChange={(event) => setTitle(event.target.value)}
                    />

                    <TextField
                        label="Description"
                        value={description}
                        fullWidth
                        onChange={(event) => setDescription(event.target.value)}
                        multiline
                        rows={8}
                    />

                    <Box display="flex" justifyContent="flex-end">
                        <Button
                            onClick={handleAddPost}
                            variant="contained" 
                            sx={{ "width": "150px" }}
                        >
                            Add Post
                        </Button>
                    </Box>
                </Stack>
            </Modal>
        </>
    );
};

export default AddPostButton;

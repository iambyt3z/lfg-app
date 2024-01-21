import { 
    Button, 
    Stack, 
    TextField,
} from "@mui/material";

import LfgPostData from "../../../../interfaces/LfgPostData";
import applicationContextActionsProvider from "../../../../redux/applicationContext/actions";
import { toFormData } from "axios";
import useAuthorizedAxiosInstance from "../../../../axios/authorizedAxios";
import { useState } from "react";

interface PostInfoEditProps {
    postData: LfgPostData;
}

const PostInfoEdit: React.FC<PostInfoEditProps> = ({ 
    postData
}) => {
    const [updatedPostData, setUpdatedPostData] = useState(postData);

    const authorizedAxiosInstance = useAuthorizedAxiosInstance();
    const authorizedAxios = authorizedAxiosInstance();

    const {
        increamentRefreshCounter,
        setOpenBackdrop,
    } = applicationContextActionsProvider();

    const updatePost = () => {
        setOpenBackdrop(true);

        const formData = toFormData({
            "description": updatedPostData.description,
            "post_id": postData.id,
            "post_tags": "",
            "title": updatedPostData.heading,
        });

        authorizedAxios({
            "data": formData,
            "url": "/updatePost",
        })
            .then(() => {
                setOpenBackdrop(false);
                increamentRefreshCounter();
            })
            .catch((error) => {
                console.error(error);
                setOpenBackdrop(false);
            });
    };

    const deletePost = () => {
        setOpenBackdrop(true);

        const formData = toFormData({
            "post_id": postData.id,
        });

        authorizedAxios({
            "data": formData,
            "url": "/deletePost",
        })
            .then(() => {
                setOpenBackdrop(false);
                increamentRefreshCounter();
            })
            .catch((error) => {
                console.error(error);
                setOpenBackdrop(false);
            });
    };

    return (
        <>
            <Stack spacing={2}>
                <TextField
                    fullWidth
                    label="Post Heading"
                    value={updatedPostData.heading}
                    onChange={(event) => {
                        setUpdatedPostData({
                            ...updatedPostData,
                            "heading": event.target.value,
                        });
                    }}
                />

                <TextField
                    fullWidth
                    multiline
                    maxRows={10}
                    label="Post Description"
                    value={updatedPostData.description}
                    onChange={(event) => {
                        setUpdatedPostData({
                            ...updatedPostData,
                            "description": event.target.value,
                        });
                    }}
                />
            </Stack>

            <Stack
                direction="row" 
                spacing={1}
                justifyContent="flex-end"
                mt={5}
            >
                <Button variant="contained" onClick={updatePost}>
                    Edit
                </Button>

                <Button variant="contained" color="error" onClick={deletePost}>
                    Delete
                </Button>
            </Stack>
        </>
    );
};

export default PostInfoEdit;

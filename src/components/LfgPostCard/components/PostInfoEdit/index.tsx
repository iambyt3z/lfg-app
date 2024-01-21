import { 
    Button, 
    Stack, 
    TextField,
} from "@mui/material";

import LfgPostData from "../../../../interfaces/LfgPostData";
import { useState } from "react";

interface PostInfoEditProps {
    postData: LfgPostData;
}

const PostInfoEdit: React.FC<PostInfoEditProps> = ({ 
    postData
}) => {
    const [updatedPostData, setUpdatedPostData] = useState(postData);

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
                <Button variant="contained">
                Edit
                </Button>

                <Button variant="contained" color="error">
                Delete
                </Button>
            </Stack>
        </>
    );
};

export default PostInfoEdit;

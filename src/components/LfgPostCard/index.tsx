import {
    Box,
    Card,
    CardContent,
    IconButton,
    Stack,
    Typography
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import LfgPostData from "../../interfaces/LfgPostData";
import Modal from "../Modal";
import PostCompleteInfo from "./components/PostCompleteInfo";
import PostInfoEdit from "./components/PostInfoEdit";
import { useState } from "react";

interface LfgPostCardProps {
    postData: LfgPostData;
    editable?: boolean;
}

const LfgPostCard: React.FC<LfgPostCardProps> = ({
    postData,
    editable,
}) => {
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDataModal, setOpenDataModal] = useState(false);

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setOpenEditModal(true);
    };

    return (
        <>
            <Box onClick={() => setOpenDataModal(true)}>
                <Card
                    variant="elevation" 
                    sx={{
                        "&:hover": {
                            "cursor": "pointer",
                            "transform": "scale3d(1.05, 1.05, 1)",
                        },
                        "height": "130px",
                        "transition": "transform 0.15s ease-in-out",
                    }}
                >
                    <CardContent>
                        <Stack direction="row">
                            <Typography variant="h6" width="90%">
                                {postData.heading}
                            </Typography>

                            <IconButton 
                                onClick={handleButtonClick} 
                                sx={{ "display": (editable) ? "flex" : "none" }}
                            >
                                <EditIcon/>
                            </IconButton>
                        </Stack>

                        <Stack>
                            <Stack direction="row" spacing={0.5}>
                                <Typography>
                                    Creadted by:
                                </Typography>

                                <Stack direction="row" spacing={0.5}>
                                    <AccountCircle/>

                                    <Typography>
                                        {postData.createdBy}
                                    </Typography>
                                </Stack>
                            </Stack>

                            <Typography>
                                Creadted on: {postData.createdOn}
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>

            <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
                <PostInfoEdit postData={postData}/>
            </Modal>

            <Modal open={openDataModal} onClose={() => setOpenDataModal(false)}>
                <PostCompleteInfo postData={postData}/>
            </Modal>
        </>
    );
};

export default LfgPostCard;

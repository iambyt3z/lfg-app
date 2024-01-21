import { Stack, Typography } from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import LfgPostData from "../../../../interfaces/LfgPostData";

interface PostCompleteInfoProps {
    postData: LfgPostData;
}

const PostCompleteInfo: React.FC<PostCompleteInfoProps> = ({ 
    postData
}) => {
    return (
        <Stack spacing={2}>
            <Typography variant="h6">
                {postData.heading}
            </Typography>

            <Typography>
                {postData.description}
            </Typography>

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
        </Stack>
    );
};

export default PostCompleteInfo;

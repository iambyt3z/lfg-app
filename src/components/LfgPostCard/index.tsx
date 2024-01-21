import {
    Box,
    Card,
    CardContent,
    Stack,
    Typography
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";

interface LfgPostCardProps {
    createdBy: string;
    createdOn: string;
    onCardClick?: () => void;
    heading: string;
}

const LfgPostCard: React.FC<LfgPostCardProps> = ({
    createdBy,
    createdOn,
    onCardClick,
    heading,
}) => {
    return (
        <Box onClick={onCardClick}>
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
                    <Typography variant="h6">
                        {heading}
                    </Typography>

                    <Stack>
                        <Stack direction="row" spacing={0.5}>
                            <Typography>
                                Creadted by:
                            </Typography>

                            <Stack direction="row" spacing={0.5}>
                                <AccountCircle/>

                                <Typography>
                                    {createdBy}
                                </Typography>
                            </Stack>
                        </Stack>

                        <Typography>
                            Creadted on: {createdOn}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};

export default LfgPostCard;

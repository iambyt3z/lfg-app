import {
    Box,
    Grid,
    Pagination,
    Paper,
    Stack
} from "@mui/material";
import LfgPostCard from "../../components/LfgPostCard";
import MainLayout from "../../layout/MainLayout";
import { RootState } from "../../redux/store";
import applicationContextActionsProvider from "../../redux/applicationContext/actions";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const LfgPosts = () => {
    const applicationContextState = useSelector(
        (state: RootState) => 
            state
                .applicationContextState
    );

    const {
        pageSelected,
        posts,
        totalNumberOfPages,
    } = applicationContextState;

    const {
        setPageSelected,
    } = applicationContextActionsProvider();

    return (
        <MainLayout>
            <Stack direction="row" spacing={0}>
                <Paper sx={{
                    "borderRadius": 0,
                    "height": "calc(100vh - 75px)",
                    "width": drawerWidth,
                }}>
                </Paper>

                <Box py={5} px={10} width="100%">
                    <Grid 
                        container 
                        columnSpacing={10} 
                        rowSpacing={5}
                        mb={6}
                    >
                        {posts.map((post) => {
                            return (
                                <Grid item xs={4} id={post.id}>
                                    <LfgPostCard
                                        postData={post}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>

                    <Box width="100%" display="flex" justifyContent="center">
                        <Pagination
                            page={pageSelected}
                            onChange={(_event, value: number) => setPageSelected(value)}
                            count={totalNumberOfPages} 
                            variant="outlined" 
                            shape="rounded"
                            color="primary"
                            size="large"
                        />
                    </Box>
                </Box>
            </Stack>
        </MainLayout>
    );
};

export default LfgPosts;

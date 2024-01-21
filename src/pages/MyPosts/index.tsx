import {
    Box,
    Grid,
    Pagination,
} from "@mui/material";
import AddPostButton from "../../components/AddPostButton";
import LfgPostCard from "../../components/LfgPostCard";
import MainLayout from "../../layout/MainLayout";
import { RootState } from "../../redux/store";
import applicationContextActionsProvider from "../../redux/applicationContext/actions";
import { useSelector } from "react-redux";

const MyPosts = () => {
    const applicationContextState = useSelector(
        (state: RootState) => 
            state
                .applicationContextState
    );

    const {
        pageSelected,
        posts,
        refreshCounter,
        totalNumberOfPages,
    } = applicationContextState;

    const {
        setPageSelected,
    } = applicationContextActionsProvider();

    return (
        <MainLayout>
            <Box py={5} px={10}>
                <Grid 
                    container 
                    columnSpacing={10} 
                    rowSpacing={5}
                    mb={6}
                >
                    {posts.map((post) => {
                        return (
                            <Grid item xs={4} key={post.id}>
                                <LfgPostCard
                                    postData={post}
                                    editable
                                />
                            </Grid>
                        );
                    })}
                </Grid>

                <Box display="flex" justifyContent="center">
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

            <AddPostButton/>
        </MainLayout>
    );
};

export default MyPosts;

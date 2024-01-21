import {
    Box,
    Grid,
    Pagination,
    Paper,
    Stack
} from "@mui/material";
import AddPostButton from "../../components/AddPostButton";
import LfgPostCard from "../../components/LfgPostCard";
import LfgPostData from "../../interfaces/LfgPostData";
import MainLayout from "../../layout/MainLayout";
import { RootState } from "../../redux/store";
import applicationContextActionsProvider from "../../redux/applicationContext/actions";
import useAuthorizedAxiosInstance from "../../axios/authorizedAxios";
import { useEffect } from "react";
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
        refreshCounter,
        totalNumberOfPages,
    } = applicationContextState;

    const {
        setPageSelected,
        setTotalNumberOfPages,
        setPosts,
        setOpenBackdrop,
    } = applicationContextActionsProvider();

    const authorizedAxiosInstance = useAuthorizedAxiosInstance();
    const authorizedAxios = authorizedAxiosInstance();

    const fetchPosts = (pageNumber: number) => {
        setOpenBackdrop(true);

        authorizedAxios.get(`/getPosts?page=${pageNumber}`)
            .then((response) => {
                console.log(response);
                const postsData = response.data;
                const { totalPages, posts } = postsData;

                const finalPosts: LfgPostData[] = posts.map((post: any) => {
                    const originalDate = new Date(post.createdAt.$date);
                    const formattedDate = originalDate.toLocaleDateString('en-US', {
                        "day": '2-digit',
                        "month": '2-digit',
                        "year": 'numeric'
                    });

                    const finalPost: LfgPostData = {
                        "createdBy": post.createdBy,
                        "createdOn": formattedDate,
                        "description": post.description,
                        "heading": post.title,
                        "id": post._id.$oid,
                    };

                    return finalPost;
                });

                setTotalNumberOfPages(totalPages);
                setPosts(finalPosts);
                setOpenBackdrop(false);
            })
            .catch((error) => {
                console.error(error);
                setOpenBackdrop(false);
            });
    };

    useEffect(() => {
        fetchPosts(1);
    }, [refreshCounter]);

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
                                <Grid item xs={4} key={post.id}>
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
                            onChange={(_event, value: number) => {
                                setPageSelected(value);
                                fetchPosts(value);
                            }}
                            count={totalNumberOfPages} 
                            variant="outlined" 
                            shape="rounded"
                            color="primary"
                            size="large"
                        />
                    </Box>
                </Box>
            </Stack>

            <AddPostButton/>
        </MainLayout>
    );
};

export default LfgPosts;

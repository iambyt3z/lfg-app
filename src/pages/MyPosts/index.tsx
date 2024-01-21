import {
    Box,
    Grid,
    Pagination,
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
        setPosts,
        setOpenBackdrop,
        setTotalNumberOfPages
    } = applicationContextActionsProvider();

    const authorizedAxiosInstance = useAuthorizedAxiosInstance();
    const authorizedAxios = authorizedAxiosInstance();

    const fetchMyPosts = (pageNumber: number) => {
        setOpenBackdrop(true);

        authorizedAxios.get(`/getPostsByUser?page=${pageNumber}`)
            .then((response) => {
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
        fetchMyPosts(1);
    }, [refreshCounter]);

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

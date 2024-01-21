import { 
    AppBar, 
    Box, 
    IconButton, 
    InputBase, 
    Link, 
    Menu, 
    MenuItem, 
    Toolbar, 
    Typography, 
    alpha, 
    styled
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

interface MainLayoutProps {
    children: React.ReactNode;
}

const Search = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        "marginLeft": theme.spacing(3),
        "width": 'auto'
    },
    '&:hover': {
        "backgroundColor": alpha(theme.palette.common.white, 0.25)
    },
    "backgroundColor": alpha(theme.palette.common.white, 0.15),
    "borderRadius": theme.shape.borderRadius,
    "marginLeft": 0,
    "marginRight": theme.spacing(2),
    "position": 'relative',
    "width": '100%'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    "alignItems": 'center',
    "display": 'flex',
    "height": '100%',
    "justifyContent": 'center',
    "padding": theme.spacing(0, 2),
    "pointerEvents": 'none',
    "position": 'absolute',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        [theme.breakpoints.up('md')]: {
            "width": '20ch'
        },
        "padding": theme.spacing(1, 1, 1, 0),
        "paddingLeft": `calc(1em + ${theme.spacing(4)})`,
        "transition": theme.transitions.create('width'),
        "width": '100%'
    },
    "color": 'inherit'
}));

const MainLayout: React.FC<MainLayoutProps> = ({
    children
}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);

    const navigate = useNavigate();

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleRedirectToProfile = () => {
        setAnchorEl(null);
        navigate("/profile");
    };

    const handleRedirectToMyPosts = () => {
        setAnchorEl(null);
        navigate("/my-posts");
    };

    const handleLogout = () => {
        setAnchorEl(null);
        navigate("/login");
    };

    const menuId = "primary-search-account-menu";

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                "horizontal": 'right',
                "vertical": 'top',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                "horizontal": 'right',
                "vertical": 'top',
            }}
            open={isMenuOpen}
            onClose={handleRedirectToProfile}
            sx={{
                "marginTop": "45px",
            }}
        >
            <MenuItem onClick={handleRedirectToMyPosts}>
                My Posts
            </MenuItem>

            <MenuItem onClick={handleRedirectToProfile}>
                Profile
            </MenuItem>

            <MenuItem onClick={handleLogout}>
                Logout
            </MenuItem>
        </Menu>
    );

    return (
        <Box
            width="100vw"
            minHeight="100vh"
        >
            <AppBar 
                position="static"
                sx={{ 
                    "backgroundColor": "#112D4E",
                    "display": "flex",
                    "height": "75px",
                    "justifyContent": "center",
                }}
            >
                <Toolbar>
                    <Link href="/" underline="none" color="inherit">
                        <Typography 
                            variant="h4" 
                            fontWeight="600"
                            letterSpacing={4}
                            fontFamily="Montserrat Variable"
                        >
                            LFG
                        </Typography>
                    </Link>

                    <Box width="800px" ml={5}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>

                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>

                    <Box sx={{ "flexGrow": 1 }} />

                    <Box mr={3}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle sx={{ "height": "40px", "width": "40px" }}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}

            {children}
        </Box>
    );
};

export default MainLayout;

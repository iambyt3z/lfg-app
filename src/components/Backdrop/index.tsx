import { BackdropProps } from "./BackdropProps.types";
import CircularProgress from "@mui/material/CircularProgress";
import MuiBackdrop  from "@mui/material/Backdrop";
import React from "react";

const Backdrop: React.FC<BackdropProps> = ({
    open,
    invisible,
}) => {
    return (
        <MuiBackdrop
            sx={{ 
                "color": "#ffffff", 
                "zIndex": (theme) => theme.zIndex.modal + theme.zIndex.drawer + 1 
            }}
            open={open}
            invisible={invisible}
        >
            <CircularProgress color="inherit" />
        </MuiBackdrop>
    );
};

export default Backdrop;

import { createTheme } from "@mui/material";

const theme = createTheme({
    "components": {
        "MuiTextField": {
            "styleOverrides": {
                "root": {
                    "backgroundColor": "white"
                }
            }
        }
    }
});

export default theme;

import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const theme = createTheme({
    breakpoints: {
        keys: {
            0: "xs",
            1: "sm",
            2: "md",
            3: "lg",
            4: "xl"
        },
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
    palette: {
        primary: {
            light: purple[500],
            main: purple[900],
            dark: purple[200],
            contrastText: "#fafafa"
        }
    }
});

export default theme;
import {createTheme, responsiveFontSizes} from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#800080',
        },
    },
    typography: {
        fontFamily: [ "Arial"
            ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;
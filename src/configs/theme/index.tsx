import { createTheme } from "@mui/material/styles";
import typographyOptions from "./typography";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FD4955",
      light: "#FFA263",
    },
    secondary: {
      main: "#4C8306",
    },
    // mainBg: {
    //     main: '#EEF0F8'
    // },
    // success: {
    //     main: '#4CAF50',
    //     light: '#DDFFDD',
    //     contrastText: '#FFFFFF'
    // },
    // danger: {
    //     main: '#F44336',
    //     light: '#FFDDDD',
    //     contrastText: '#FFFFFF'
    // },
    // text: {
    //     primary: '#494949',
    //     secondary: '#FFFFFF'
    // },
    // common: {
    //     black: '#707070',
    //     white: '#FFFFFF'
    // },
    // info: {
    //     main: '#2196F3',
    //     light: '#DDFFFF'
    // },
    // grey: {
    //     50: '#151C1B',
    //     100: '#707070',
    //     200: '#959595'
    // }
  },
  typography: typographyOptions,
});

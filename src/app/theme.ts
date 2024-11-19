"use client";

import { createTheme } from "@mui/material/styles";
import { blueElectric, fluoGreen } from "@/app/ui/colors";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const myTheme = createTheme({
  typography: {
    fontFamily: `${poppins.style.fontFamily}, sans-serif`,
    h1: {
      fontFamily: `${poppins.style.fontFamily}, sans-serif`,
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontFamily: `${poppins.style.fontFamily}, sans-serif`,
      fontWeight: 700,
      fontSize: "2rem",
    },
    h3: {
      fontFamily: `${poppins.style.fontFamily}, sans-serif`,
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    h4: {
      fontFamily: `${poppins.style.fontFamily}, sans-serif`,
      fontWeight: 700,
      fontSize: "1.25rem",
    },
    h5: {
      fontFamily: `${poppins.style.fontFamily}, sans-serif`,
      fontWeight: 700,
      fontSize: "1rem",
    },
    h6: {
      fontFamily: `${poppins.style.fontFamily}, sans-serif`,
      fontWeight: 700,
      fontSize: "0.875rem",
    },
    body1: {
      fontFamily: `${poppins.style.fontFamily}, sans-serif`,
      fontWeight: 400,
      fontSize: "1rem",
    },
    body2: {
      fontFamily: `${poppins.style.fontFamily}, sans-serif`,
      fontWeight: 400,
      fontSize: "0.875rem",
    },
  },
  palette: {
    primary: {
      main: blueElectric[800],
      light: blueElectric[50],
      dark: blueElectric[900],
      contrastText: "#fff",
    },
    secondary: {
      main: fluoGreen[500],
      light: fluoGreen[200],
      dark: fluoGreen[600],
      contrastText: "#000",
    },
    success: {
      dark: "#1FFF37",
      main: "#8FFF9A",
      light: "#DFFFE2",
    },
    warning: {
      main: "#FF9D1F",
      light: "#FEF6E9",
    },
    error: {
      dark: "#FF2A1F",
      main: "#FF857F",
      light: "#FFEFF1",
    },
  },
});

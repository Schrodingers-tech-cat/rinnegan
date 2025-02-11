// themes.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Blue color
    },
    secondary: {
      main: "#dc004e", // Pink color
    },
    background: {
      default: "#f5f5f5", // Light gray background
      paper: "#ffffff", // White background for paper components
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Light blue for dark mode
    },
    secondary: {
      main: "#f48fb1", // Light pink for dark mode
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1e1e1e", // Darker background for paper components
    },
  },
});

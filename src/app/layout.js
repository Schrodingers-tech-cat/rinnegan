// app/layout.js
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from "react";
import "./globals.css";
import ThemeToggle from "../components/ui/themeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Create MUI light and dark themes
const lightTheme = createTheme({
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
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
  },
});

const darkTheme = createTheme({
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
  typography: {
    fontFamily: "var(--font-geist-sans)",
  },
});

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for user's theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline /> {/* MUI global styles */}
          <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

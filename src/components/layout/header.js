"use client";

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import ThemeToggle from "../ui/themeToggle";
import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <AppBar position="fixed" enableColorOnDark>
      <Toolbar className="flex gap-5 mx-8">
        <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
        <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <IconButton color="inherit"></IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

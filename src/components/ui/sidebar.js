"use client"; // Required for Next.js App Router

import { useState } from "react";
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Tooltip,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import ThemeToggle from "./themeToggle";
import { lightTheme, darkTheme } from "../../styles/themes"; // Import themes

export default function Layout({ children }) {
  const [isExpanded, setIsExpanded] = useState(true); // Sidebar toggle state
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode toggle state

  // Toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Apply global styles */}
      <Box display="flex">
        {/* Sidebar */}
        <Drawer
          variant="permanent"
          anchor="left"
          PaperProps={{
            sx: {
              width: isExpanded ? 250 : 80,
              backgroundColor: isDarkMode ? "#1e1e1e" : "#fefbee", // Dark mode background
              padding: 2,
              overflowX: "hidden",
              transition: "width 0.3s ease-in-out, background-color 0.3s ease", // Add transition for background-color
            },
          }}
        >
          <Box display="flex" flexDirection="column" height="100%">
            {/* Sidebar Toggle Button */}
            <IconButton
              onClick={() => setIsExpanded(!isExpanded)}
              sx={{ alignSelf: "flex-end", mb: 2 }}
              className="w-14 h-14 sm:w-9 sm:h-9 md:w-12 md:h-12" // Tailwind classes for responsive sizing
            >
              <img
                src={isDarkMode ? "/fynd_white.svg" : "/fynd_black.svg"}
                alt="Icon"
                className="w-full h-full" // Make SVG fill the button
              />
            </IconButton>

            {/* Sidebar Menu Items */}
            <List>
              <Tooltip
                title="Logistic Panel"
                placement="right"
                disableHoverListener={isExpanded}
                className="flex items-center justify-center"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <LocalShippingIcon />
                  </ListItemIcon>
                  {isExpanded && <ListItemText primary="Logistic Panel" />}
                </ListItemButton>
              </Tooltip>

              <Tooltip
                title="Promise Panel"
                placement="right"
                disableHoverListener={isExpanded}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  {isExpanded && <ListItemText primary="Promise Panel" />}
                </ListItemButton>
              </Tooltip>

              <Tooltip
                title="Network Panel"
                placement="right"
                disableHoverListener={isExpanded}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <NetworkCheckIcon />
                  </ListItemIcon>
                  {isExpanded && <ListItemText primary="Network Panel" />}
                </ListItemButton>
              </Tooltip>

              <Tooltip
                title="AWB"
                placement="right"
                disableHoverListener={isExpanded}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <ReceiptIcon />
                  </ListItemIcon>
                  {isExpanded && <ListItemText primary="AWB" />}
                </ListItemButton>
              </Tooltip>
            </List>

            {/* User Actions */}
            <Box textAlign="center" mt="auto" className="flex flex-col gap-5">
              {isExpanded && (
                <Typography fontFamily="monospace">User Name</Typography>
              )}
              {/* <Tooltip
                title="Login"
                placement="right"
                disableHoverListener={isExpanded}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  {isExpanded && <ListItemText primary="Login" />}
                </ListItemButton>
              </Tooltip> */}
              <Tooltip
                title="Logout"
                placement="right"
                disableHoverListener={isExpanded}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  {isExpanded && <ListItemText primary="Logout" />}
                </ListItemButton>
              </Tooltip>
            </Box>
          </Box>
        </Drawer>

        {/* Main Content Area */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: "95svh",
          }}
        >
          {/* Navbar */}
          <AppBar
            position="fixed"
            sx={{ backgroundColor: isDarkMode ? "#1e1e1e" : "#333" }} // Dark mode background
          >
            <Toolbar className="flex gap-5 mx-8">
              <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
              <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
              <IconButton color="inherit">
                <AccountCircleIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          {/* Content */}
          <Box sx={{ flex: 1, padding: 4, overflowY: "auto", marginLeft: 8 }}>
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

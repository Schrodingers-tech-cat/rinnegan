"use client"; // Required for Next.js App Router

import { useState } from "react";
import {
  Drawer,
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
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LogoutIcon from "@mui/icons-material/Logout";
import { lightTheme, darkTheme } from "../../styles/themes";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box display="flex">
        <Drawer
          variant="permanent"
          anchor="left"
          PaperProps={{
            sx: {
              width: isExpanded ? 250 : 80,
              backgroundColor: isDarkMode ? "#1e1e1e" : "#fefbee",
              padding: 2,
              overflowX: "hidden",
              transition: "width 0.3s ease-in-out, background-color 0.3s ease",
            },
          }}
        >
          <Box display="flex" flexDirection="column" height="100%">
            <IconButton
              onClick={() => setIsExpanded(!isExpanded)}
              sx={{ alignSelf: "flex-end", mb: 2 }}
              className="w-14 h-14 sm:w-9 sm:h-9 md:w-12 md:h-12"
            >
              <Image
                src={isDarkMode ? "/fynd_white.svg" : "/fynd_black.svg"}
                alt="Icon"
                className="w-full h-full"
                width={100}
                height={100}
              />
            </IconButton>

            <List>
              <Tooltip
                title="Logistic Panel"
                placement="right"
                disableHoverListener={isExpanded}
                className="flex items-center justify-center"
              >
                <Link href="/logistics-panel">
                  <ListItemButton>
                    <ListItemIcon>
                      <LocalShippingIcon />
                    </ListItemIcon>
                    {isExpanded && <ListItemText primary="Logistic Panel" />}
                  </ListItemButton>
                </Link>
              </Tooltip>

              <Tooltip
                title="Promise Panel"
                placement="right"
                disableHoverListener={isExpanded}
              >
                <Link href="/promise-panel">
                  <ListItemButton>
                    <ListItemIcon>
                      <AssignmentIcon />
                    </ListItemIcon>
                    {isExpanded && <ListItemText primary="Promise Panel" />}
                  </ListItemButton>
                </Link>
              </Tooltip>

              <Tooltip
                title="Network Panel"
                placement="right"
                disableHoverListener={isExpanded}
              >
                <Link href="/network-panel">
                  <ListItemButton>
                    <ListItemIcon>
                      <NetworkCheckIcon />
                    </ListItemIcon>
                    {isExpanded && <ListItemText primary="Network Panel" />}
                  </ListItemButton>
                </Link>
              </Tooltip>

              <Tooltip
                title="AWB"
                placement="right"
                disableHoverListener={isExpanded}
              >
                <Link href="/awb-panel">
                  <ListItemButton>
                    <ListItemIcon>
                      <ReceiptIcon />
                    </ListItemIcon>
                    {isExpanded && <ListItemText primary="AWB" />}
                  </ListItemButton>
                </Link>
              </Tooltip>
            </List>

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

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: "95svh",
          }}
        >
          <Box sx={{ flex: 1, padding: 4, overflowY: "auto", marginLeft: 8 }}>
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  FiHome,
  FiInfo,
  FiSettings,
  FiMail,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  //   ...theme.mixins.toolbar,
}));

const SidebarMenu = () => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const menuItems = [
    { text: "Home", icon: <FiHome size={24} />, id: "home" },
    { text: "About", icon: <FiInfo size={24} />, id: "about" },
    { text: "Services", icon: <FiSettings size={24} />, id: "services" },
    { text: "Contact", icon: <FiMail size={24} />, id: "contact" },
  ];

  const [activeItem, setActiveItem] = useState("home");

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={isMobile ? handleDrawerToggle : undefined}
        sx={{
          width: open ? drawerWidth : theme.spacing(7),
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : theme.spacing(7),
            boxSizing: "border-box",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            backgroundColor: theme.palette.background.default,
            boxShadow: theme.shadows[4],
            overflowX: "hidden",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerToggle} aria-label="toggle sidebar">
            {open ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
          </IconButton>
        </DrawerHeader>
        <List>
          {menuItems.map((item) => (
            <Tooltip
              key={item.id}
              title={!open ? item.text : ""}
              placement="right"
              arrow
            >
              <ListItem
                button
                onClick={() => handleItemClick(item.id)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  backgroundColor:
                    activeItem === item.id
                      ? theme.palette.action.selected
                      : "transparent",
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color:
                      activeItem === item.id
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color:
                      activeItem === item.id
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                  }}
                />
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: open ? `${drawerWidth}px` : `${theme.spacing(7)}px`,
        }}
      >
        <DrawerHeader />
        {/* Main content goes here */}
      </Box>
    </Box>
  );
};

export default SidebarMenu;

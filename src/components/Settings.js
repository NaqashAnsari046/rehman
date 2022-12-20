import * as React from "react";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import {
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Stack,
} from "@mui/material";

import { deepPurple } from "@mui/material/colors";
import { NavLink, Outlet } from "react-router-dom";

import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedIcon from "@mui/icons-material/Verified";

// const drawerWidth = 240;
const drawerWidth = "25%";

const Settings = (props) => {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const settingLinks = [
    {
      text: "General",
      route: "/setting/general",
      icon: <SettingsIcon />,
    },
    {
      text: "Notification Settings",
      route: "/setting/notifications",
      icon: <NotificationsActiveIcon />,
    },
    {
      text: "Profile Settings",
      route: "/setting/profile",
      icon: <AccountCircleIcon />,
    },
    {
      text: "Profile Verification",
      route: "/setting/profile-verification",
      icon: <VerifiedIcon />,
    },
  ];

  const drawer = (
    <div>
      <Toolbar
        direction="row"
        alignitems="center"
        justifycontent="center"
        sx={{ backgroundColor: "#DFDFDF" }}
      >
        <Box
          direction="row"
          sx={{
            width: "100%",
            textAlign: "center",
            flexDirection: "row",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <Typography
            sx={{ fontWeight: 700 }}
            variant="h4"
            noWrap
            align="center"
            component="div"
            mt={2}
            mb={2}
          >
            Settings
          </Typography>
          <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
            <Avatar sx={{ width: 130, height: 130, bgcolor: deepPurple[500] }}>
              OP
            </Avatar>
          </Stack>
        </Box>
      </Toolbar>

      <List sx={{ paddingTop: "0px" }}>
        {settingLinks.map((link, index) => (
          <NavLink className="lik"
            style={{ textDecoration: "none", color: "black" }}
            to={link.route}
            key={index}
          >
            <ListItem disablePadding  >
              <ListItemButton
                sx={{
                  borderWidth: "1px 0px",
                  borderStyle:"solid",
                  borderColor: "#DFDFDF",
                }}
              >
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  {link.icon !== "" ? link.icon : <InboxIcon />}
                </ListItemIcon>
                <ListItemText primary={link.text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Settings;

{
  /* <IconButton
  color="inherit"
  aria-label="open drawer"
  edge="start"
  onClick={handleDrawerToggle}
  sx={{ mr: 2, display: { sm: "none" } }}
>
  <MenuIcon />
</IconButton>; 


<Box
  component="main"
  sx={{
    flexGrow: 1,
    p: 3,
    width: { sm: `calc(100% - ${drawerWidth}px)` },
  }}
>
  <Toolbar />
  <Typography paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
    Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio
    morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing
    bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris
    commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
    vivamus at augue. At augue eget arcu dictum varius duis at consectetur
    lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
    faucibus et molestie ac.
  </Typography>
</Box>;

*/
}

{
  /* <Box
        position="fixed"
        component="main"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </Box> */
}

{
  /* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */
}

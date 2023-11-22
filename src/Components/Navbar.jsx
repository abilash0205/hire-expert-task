import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./Context/AuthContext";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, IconButton } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const drawerWidth = 240;
  const navData = [
    {
      id: 1,
      icon: <HomeIcon />,
      title: "Home",
      link: "account",
    },
    {
      id: 2,
      icon: <AccountCircleIcon />,
      title: "Profile",
      link: "profile",
    },
    {
      id: 3,
      icon: <SettingsIcon />,
      title: "Settings",
      link: "settings",
    },
  ];

  const { logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [file, setFile] = useState();
  const setProfilePhoto = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]))
    document.getElementById('file-input').style.display = 'none'
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <IconButton style={{margin: "0px auto"}}>
            <Avatar alt="profile photo" src={file}/>
          </IconButton>
        </Toolbar>
        <input id="file-input" type="file" onChange={setProfilePhoto}/>
        <List>
          {navData.map(({ id, icon, title, link }) => (
            <Link key={id} to={`/${link}`} style={{ textDecoration: "none" }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={title} style={{ color: "black" }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}

          <ListItem disablePadding onClick={handleLogOut}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout"></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;

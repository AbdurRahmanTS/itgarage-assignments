import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import "./Header.css"
import { Button } from "@mui/material";

const pages = [
  {
    name: "Settings",
    icon: <SettingsIcon />
  },
  {
    name: "Account",
    icon: <ManageAccountsIcon />
  },
  {
    name: "Messages",
    icon: <MailOutlineIcon />
  },
  {
    name: "Favorites",
    icon: <StarOutlineIcon />
  }
];


const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar
        position="static"
        style={{ background: "#1f253d", boxShadow: "none" }}
      >
        <Container
          maxWidth="xl"
          style={{
            marginBottom: "25px",
            marginTop: "25px",
            background: "#394264",
            borderRadius: "5px",
          }}
        >
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map(({name, icon}) => (
                <Button
                  key={name}
                  className = "header-menu"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  style={{textTransform: "none", display: "flex", gap: "8px"}}
                >
                  <span>{icon}</span>
                  <span style={{marginRight: "15px"}}>{name}</span>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                style={{marginRight: "10px", width: "35px", textTransform: "none", background: "#394264"}}
                aria-haspopup="true"
                variant="contained"
                disableElevation
                endIcon={<KeyboardArrowDownIcon />}
              >
                Me
              </Button>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  style={{ border: "2px solid #50597b" }}
                  sx={{ width: 56, height: 56 }}
                  alt="Anne Hathaway picture"
                  src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"
                />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;

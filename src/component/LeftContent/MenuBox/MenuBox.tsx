import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TelegramIcon from '@mui/icons-material/Telegram';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from "@mui/icons-material/Settings";
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

const style = {
  width: "100%",
  maxWidth: 360,
};

const MenuBox = () => {
  return (
    <div style={{marginBottom: "25px", background: "#394264", borderRadius: "5px"}}>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <h2 style={{background: "#11a8ab", display: "block", lineHeight: "60px", margin: "-8px 0 0 0", borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}}>MENU BOX</h2>
        <ListItem button style={{gap: "10px"}}>
          <ManageAccountsIcon />
          <ListItemText primary="Messages" />
        </ListItem>
        <Divider />
        <ListItem button divider style={{gap: "10px"}}>
          <TelegramIcon />
          <ListItemText primary="Invites" />
        </ListItem>
        <ListItem button style={{gap: "10px"}}>
          <CalendarTodayIcon />
          <ListItemText primary="Events" />
        </ListItem>
        <Divider />
        <ListItem button style={{gap: "10px"}}>
          <SettingsIcon />
          <ListItemText primary="Account Settings" />
        </ListItem>
        <Divider />
        <ListItem button style={{gap: "10px"}}>
          <StackedLineChartIcon />
          <ListItemText primary="Statistics" />
        </ListItem>
      </List>
    </div>
  );
};

export default MenuBox;

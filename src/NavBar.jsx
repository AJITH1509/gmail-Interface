import React from "react";
import "./NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <MenuIcon style={{ color: "white" }} />
      <img
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r5.png"
        alt="gmail-logo"
      />
      <div className="search-bar">
        <SearchIcon style={{ color: "white" }} />
        <input placeholder="Search Mail" />
        <TuneIcon style={{ color: "white" }} />
      </div>
      <div style={{ marginLeft: "auto" }} className="settings">
        <HelpOutlineOutlinedIcon style={{ color: "white" }} />
        <SettingsOutlinedIcon style={{ color: "white" }} />
        <AppsOutlinedIcon style={{ color: "white" }} />
        <div className="profile">a</div>
      </div>
    </div>
  );
};

export default NavBar;

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
      <MenuIcon id="menu-icon" style={{ color: "white", cursor: "pointer" }} />
      <img
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r5.png"
        alt="gmail-logo"
      />
      <div className="search-bar">
        <SearchIcon style={{ color: "white", cursor: "pointer" }} />
        <input placeholder="Search Mail" />
        <TuneIcon style={{ color: "white", cursor: "pointer" }} />
      </div>
      <div style={{ marginLeft: "auto" }} className="settings">
        <HelpOutlineOutlinedIcon
          style={{ color: "white", cursor: "pointer" }}
        />
        <SettingsOutlinedIcon style={{ color: "white", cursor: "pointer" }} />
        <AppsOutlinedIcon style={{ color: "white", cursor: "pointer" }} />
        <div className="profile">a</div>
      </div>
    </div>
  );
};

export default NavBar;

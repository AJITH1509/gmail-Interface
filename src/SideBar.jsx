import "./SideBar.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="compose">
        <ModeEditIcon style={{ color: "black", cursor: "pointer" }} />
      </div>
      <InboxIcon style={{ color: "white", cursor: "pointer" }} />
      <StarBorderIcon style={{ color: "white", cursor: "pointer" }} />
      <AccessTimeOutlinedIcon
        style={{ color: "white", cursor: "pointer" }}
        fontSize="small"
      />
      <DescriptionIcon
        style={{ color: "white", cursor: "pointer" }}
        fontSize="small"
      />
      <KeyboardArrowDownIcon
        style={{ color: "white", cursor: "pointer" }}
        fontSize="small"
      />
    </div>
  );
};

export default SideBar;

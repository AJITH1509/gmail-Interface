import { useState } from "react";
import { inboxData } from "./inboxData";
import Checkbox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import LabelImportantTwoToneIcon from "@mui/icons-material/LabelImportantTwoTone";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import "./inbox.css";

export const Inbox = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [starList, setStarList] = useState(Array(inboxData.length).fill(true));
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleChageStar = (index) => {
    const updatedStarList = [...starList];
    updatedStarList[index] = !updatedStarList[index];
    setStarList(updatedStarList);
  };
  return (
    <div className="mail-container">
      {inboxData.map((data, index) => (
        <div
          className="mail"
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="icon-container">
            <Checkbox className="icon" {...label} size="small" />
            {starList[index] ? (
              <StarBorderIcon
                className="icon"
                onClick={() => handleChageStar(index)}
              />
            ) : (
              <StarRateIcon
                style={{ color: "gold" }}
                onClick={() => handleChageStar(index)}
              />
            )}
            <LabelImportantTwoToneIcon
              className="icon"
              style={{ color: "gold" }}
            />
            <h4>{data.name}</h4>
          </div>
          <div className="subject">
            <h4>{data.subject}</h4>-<p>{data.content}</p>
          </div>
          <div className={hoverIndex === index ? "" : "action-icons-container"}>
            {hoverIndex === index ? (
              <div className="action-icons">
                <ArchiveOutlinedIcon size="small" />
                <DeleteOutlineOutlinedIcon size="small" />
                <MarkAsUnreadOutlinedIcon size="small" />
                <AccessTimeOutlinedIcon size="small" />
              </div>
            ) : (
              <h4>{data.time}</h4>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

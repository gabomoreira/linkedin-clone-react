import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const HeaderOptions = ({ Icon, title, avatar, onClick, screen }) => {
  const user = useSelector(selectUser);
  return (
    <div
      onClick={onClick}
      className={`${screen ? "headerOption__screen" : "headerOption"}`}
    >
      {Icon && <Icon className="headerOption__icon" />}

      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;

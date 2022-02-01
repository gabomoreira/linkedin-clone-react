import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.smerin.com/static/565c8b3670db248e0bdc848176270d6a/9397f/websites-banner.jpg"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h3>{user.displayName}</h3>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you:</p>
          <p className="sidebar__statNumber">2,435</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post:</p>
          <p className="sidebar__statNumber">2,435</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;

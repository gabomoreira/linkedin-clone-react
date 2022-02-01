import React from "react";
import "./Header.css";
import HeaderOption from "../HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

const Header = () => {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="Linkedin"
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption screen={true} Icon={HomeIcon} title="Home" />
        <HeaderOption
          screen={true}
          Icon={SupervisorAccountIcon}
          title="My Network"
        />
        <HeaderOption screen={true} Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption screen={true} Icon={ChatIcon} title="Messaging" />
        <HeaderOption
          screen={true}
          Icon={NotificationsIcon}
          title="Notifications"
        />
        <HeaderOption onClick={logoutOfApp} title="Me" avatar={true} />
      </div>
    </div>
  );
};

export default Header;

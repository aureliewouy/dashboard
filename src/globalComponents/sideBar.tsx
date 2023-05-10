import React from "react";
import { Link } from "react-router-dom";
import styles from "./sideBar.module.css";
import logo from "../medias/logo.png";
import { ReactComponent as Dashboard } from "../medias/icons/dashboard.svg";
import { ReactComponent as Settings } from "../medias/icons/settings.svg";
import { ReactComponent as Company } from "../medias/icons/company.svg";
import { ReactComponent as Tasks } from "../medias/icons/task.svg";
import { ReactComponent as Help } from "../medias/icons/help.svg";
import { ReactComponent as Chat } from "../medias/icons/chat.svg";
interface SidebarProps {
  active: string;
}

const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" style={{ width: "50px" }} />
        <p style={{ fontWeight: "bold", marginLeft: "10px" }}>Management</p>
      </div>
      <div className={styles.sidebarItem}>
        <Link to="/" className={active === "dashboard" ? styles.active : ""}>
          <Dashboard
            className={active === "dashboard" ? styles.activeIcon : ""}
          />
          Overview
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link to="/Companies" className={active === "projects" ? "active" : ""}>
          <Company />
          Companies
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link to="/tasks" className={active === "tasks" ? "active" : ""}>
          <Tasks /> Deals
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link to="/setting" className={active === "setting" ? "active" : ""}>
          <Chat /> Message
          <div className={styles.notification}>
            <p>3</p>
          </div>
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link to="/setting" className={active === "setting" ? "active" : ""}>
          <Settings /> Setting
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link to="/help" className={active === "help" ? "active" : ""}>
          <Help /> Help
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

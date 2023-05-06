import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sideBar.module.css'; 
import logo from '../medias/logo.png';
import {ReactComponent as Dashboard} from "../medias/icons/dashboard.svg";
import {ReactComponent as Settings} from "../medias/icons/settings.svg";
import {ReactComponent as Projects} from "../medias/icons/projects.svg";
import {ReactComponent as Tasks} from "../medias/icons/task.svg";
import {ReactComponent as Help} from "../medias/icons/help.svg";
interface SidebarProps {
  active: string;
}

const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  return (
    <div className={styles.sidebar}>
      <div style={{width:"100%", marginRight:"auto", paddingLeft:"20px", paddingBottom:"20px", display:"flex"}}>
      <img src={logo} alt="Logo" style={{width:"50px"}}/><p style={{fontWeight:"bold", marginLeft:"10px"}}>Wouy</p>
      </div>
      <div className={styles.sidebarItem}>
        <Link to="/" className={active === 'dashboard' ? styles.active :''}>
        <Dashboard className={styles.logo}/>
          Dashboard
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link to="/projects" className={active === 'projects' ? 'active' : ''}>
         <Projects/>Projects
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link to="/tasks" className={active === 'tasks' ? 'active' : ''}>
         <Tasks/> Tasks
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link to="/setting" className={active === 'setting' ? 'active' : ''}>
        <Settings/>  Settings
        </Link>
      </div>
      <div className={styles.sidebarItem}>
        <Link to="/help" className={active === 'help' ? 'active' : ''}>
         <Help/> Help
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

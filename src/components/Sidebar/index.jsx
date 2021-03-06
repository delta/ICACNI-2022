import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const Sidebar = ({ title, sidebarLinks }) => (
  <div className={styles.sidebar}>
    <h5 className={styles.title}>{title}</h5>
    {sidebarLinks.map((sidebarLink) => (
      <NavLink
        className={styles.tab}
        activeClassName={styles.activeTab}
        key={sidebarLink.to}
        to={sidebarLink.to}
      >
        <span>{sidebarLink.name}</span>
      </NavLink>
    ))}
  </div>
);

export default Sidebar;

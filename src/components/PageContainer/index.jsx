/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../Sidebar';
import styles from './styles.module.css';
import ContentContainer from '../ContentContainer';

const PageContainer = (props) => {
  console.log(props.sidebarLinks);
  return (
    <Router>
      <div className={styles.sideBarContainer}>
        <Sidebar sidebarLinks={props.sidebarLinks} />
      </div>
      <div className={styles.contentContainer}>
        <ContentContainer Content={props.Content} />
      </div>
    </Router>
  );
};

export default PageContainer;

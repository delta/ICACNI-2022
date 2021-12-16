import React from 'react';
import { Route } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
// import styles from './style.module.css';

const ConferencePage = () => {
  const sidebarLinks = [
    {
      name: 'KEYNOTE LECTURES',
      to: 'keynotelectures',
      path: 'keynotelectures',
      content: <div>KEYNOTE LECTURES</div>
    },
    {
      name: 'VENUE',
      to: 'venue',
      path: 'venue',
      content: <div>VENUE</div>
    },
    {
      name: 'CALL FOR 8TH ICANI 2020',
      to: 'callfor2020',
      path: 'callfor2020',
      content: <div>CALL FOR 8TH ICANI 2020</div>
    }
  ];
  const Content = sidebarLinks.map((link) => (
    <Route path={link.path}>{link.content}</Route>
  ));
  return <PageContainer sidebarLinks={sidebarLinks} Content={Content} />;
};

export default ConferencePage;

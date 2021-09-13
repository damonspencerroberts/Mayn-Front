import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

function LobbyContainer({ sideBar, children }) {
  return (
    <div className={styles.Container}>
      <div className={styles.SideBar}>{sideBar}</div>
      <div className={styles.MainBar}>{children}</div>
    </div>
  );
}

LobbyContainer.propTypes = {
  sideBar: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default LobbyContainer;

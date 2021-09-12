import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import styles from '../../../styles/pages/Signup.module.scss';

function Main({ header, paragraph, children }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <Header classnames="font-size-32">{header}</Header>
      <p className="sub-font wt-300 grey font-size-20">{paragraph}</p>
      <div className={styles.FormContainer}>{children}</div>
    </div>
  );
}

Main.propTypes = {
  header: PropTypes.node,
  paragraph: PropTypes.node,
  children: PropTypes.node.isRequired,
};

export default Main;

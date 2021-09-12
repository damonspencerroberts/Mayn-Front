import React from 'react';
import PropTypes from 'prop-types';
import styles from './Step.module.scss';

function Step({ children }) {
  return <div className={styles.Step}>{children}</div>;
}

Step.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Step;

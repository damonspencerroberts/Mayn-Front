import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.scss';

function InputButton({ classnames, ...props }) {
  return <input className={cx(styles.Button, classnames)} {...props} />;
}

InputButton.propTypes = {
  classnames: PropTypes.string,
};

export default InputButton;

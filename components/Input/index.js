import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Input.module.scss';

function Input({ classnames, ...props }) {
  const className = cx({
    [styles.Input]: true,
    [classnames]: !!classnames,
  });
  return <input className={className} {...props} />;
}

Input.propTypes = {
  classnames: PropTypes.string,
};

export default Input;

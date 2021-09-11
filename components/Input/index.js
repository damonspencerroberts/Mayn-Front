import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Input.module.scss';

function Input({ namespace, register, classnames, ...props }) {
  const className = cx({
    [styles.Input]: true,
    [classnames]: !!classnames,
  });
  return <input className={className} {...props} {...register(namespace)} />;
}

Input.propTypes = {
  classnames: PropTypes.string,
  register: PropTypes.func,
  namespace: PropTypes.string,
};

export default Input;

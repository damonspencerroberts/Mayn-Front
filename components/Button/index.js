import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.scss';

function Button({ classnames, variant = 'primary', children }) {
  const className = cx({
    [styles.Primary]: variant === 'primary',
    [styles.Secondary]: variant === 'secondary',
    [classnames]: !!classnames,
  });
  return <a className={className}>{children}</a>;
}

Button.propTypes = {
  variant: PropTypes.string,
  classnames: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;

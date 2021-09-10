import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.scss';

function Button({ classnames, variant = 'primary', children, ...props }) {
  const className = cx({
    [styles.Button]: true,
    [styles.Primary]: variant === 'primary',
    [styles.Secondary]: variant === 'secondary',
    [classnames]: !!classnames,
  });
  return (
    <a className={className} {...props}>
      {children}
    </a>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  classnames: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;

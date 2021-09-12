import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function Label({ classnames, children, ...props }) {
  return (
    <label className={cx('sub-font font-size-20 wt-600 dark', classnames)} {...props}>
      {children}
    </label>
  );
}

Label.propTypes = {
  classnames: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Label;

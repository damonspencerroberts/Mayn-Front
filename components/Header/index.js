import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function Header({ classnames, children }) {
  return <div className={cx('main wt-700 sub-font', classnames)}>{children}</div>;
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  classnames: PropTypes.string,
};

export default Header;

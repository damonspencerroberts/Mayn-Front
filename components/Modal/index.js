import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Modal as BootstrapModal } from 'react-bootstrap';
import styles from './Modal.module.scss';

function Modal({ classnames, contentClassnames, children, ...props }) {
  return (
    <BootstrapModal
      dialogClassName={cx(styles.Modal, classnames)}
      contentClassName={cx(styles.Content, contentClassnames)}
      {...props}
    >
      {children}
    </BootstrapModal>
  );
}

Modal.propTypes = {
  classnames: PropTypes.string,
  contentClassnames: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Modal;

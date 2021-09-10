import React from 'react';
import PropTypes from 'prop-types';
import { Modal as BootstrapModal } from 'react-bootstrap';
import styles from './Modal.module.scss';

function Modal({ children, ...props }) {
  return (
    <BootstrapModal dialogClassName={styles.Modal} {...props}>
      {children}
    </BootstrapModal>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;

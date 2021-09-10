import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './Large.module.scss';

function LargeLogo(props) {
  return (
    <div className={styles.ImageContainer}>
      <Image
        src="https://res.cloudinary.com/dymuj0sqw/image/upload/c_fill,h_144,w_376/v1631294188/output-onlinepngtools_s85pf0.png"
        layout="fill"
      />
    </div>
  );
}

LargeLogo.propTypes = {};

export default LargeLogo;

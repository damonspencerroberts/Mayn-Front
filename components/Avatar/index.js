import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';

function Avatar({ classnames, imageSrc = '', variant = 'small' }) {
  const className = cx({
    [styles.Avatar]: true,
    [styles.Small]: variant === 'small',
    [styles.Large]: variant === 'large',
    [styles.Medium]: variant === 'medium',
    [classnames]: !!classnames,
  });

  return (
    <div className={className}>
      <Image src={imageSrc} layout="fill" alt="avatar-image" className={styles.Image} />
    </div>
  );
}

Avatar.propTypes = {
  imageSrc: PropTypes.string,
  classnames: PropTypes.string,
  variant: PropTypes.string,
};

export default Avatar;

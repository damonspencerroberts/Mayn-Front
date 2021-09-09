import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

function LargeLogo(props) {
  return (
    <Image
      src="https://res.cloudinary.com/dymuj0sqw/image/upload/v1631204428/1_ldlezd.png"
      height={120}
      width={120}
    />
  );
}

LargeLogo.propTypes = {};

export default LargeLogo;

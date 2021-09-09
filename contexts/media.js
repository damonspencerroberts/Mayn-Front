import { createMedia } from '@artsy/fresnel';

const AppMedia = createMedia({
  breakpoints: {
    xss: 0,
    xs: 600,
    sm: 768,
    md: 1100,
    ld: 1160,
    lg: 1200
  }
});

export const mediaStyles = AppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = AppMedia;
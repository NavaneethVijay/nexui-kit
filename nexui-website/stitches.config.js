import { createCss } from '@stitches/react';

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: {
    colors: {
      violet800: 'hsl(252 62% 54.9%)',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (config) => (value) => ({ marginLeft: value, marginRight: value }),
  },
});
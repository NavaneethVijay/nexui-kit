import { styled } from '../../../stitches.config';

const styleFunction = (Component) => styled(Component, {
  backgroundColor: 'gainsboro',
  fontSize: '13px',
  border: 'none',
  cursor: 'pointer',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
  variants: {
    color: {
      violet: {
        backgroundColor: '$violet800',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      gray: {
        backgroundColor: 'gainsboro',
        '&:hover': {
          backgroundColor: 'lightgray',
        },
      },
    },
  },
});
export default styleFunction
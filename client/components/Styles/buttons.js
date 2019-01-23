// MUI Colors
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

export default {
  btn: {
    background: red[500],
    color: '#fff',
    margin: '0 5px',
    '&:hover': {
      background: red[700]
    }
  },
  btnActivate: {
    background: 'transparent',
    border: '2px solid #aaa'
  },
  disabled: {
    background: `${grey[200]} !important`,
    margin: '0 5px'
  },
  icon: {
    color: red[500],
    fontSize: 30,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  trashIcon: {
    color: '#000',
    '&:hover': {
      cursor: 'pointer'
    }
  }
};

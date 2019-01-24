// Action Types
import { BOARD_ADD_PIECE } from 'actions/types';

const rows = Array(6).fill(null);
const columns = 'abcdefg'.split('');

const initialState = columns.reduce((o, k) => ({
  ...o,
  ...(rows.reduce((ro, _, i) => ({
    ...ro,
    [`${k}${i + 1}`]: null
  }), {}))
}), {});

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_ADD_PIECE:
      return {
        ...state,
        [action.payload.coordinate]: action.payload.color
      };
    default:
      return state;
  }
};

export default boardReducer;

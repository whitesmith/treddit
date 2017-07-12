import {
  USER_LOGIN,
  CARD_SWIPED
} from '../actions/types';

const INITIAL_STATE = {
  username: '',
  likes: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, username: action.payload };
    case CARD_SWIPED:
      return { ...state, likes: [...state.likes, action.payload] };
    default:
      return state;
  }
};

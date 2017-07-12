import {
  USER_LOGIN,
  CARD_SWIPED,
} from './types';

export const loginUser = (username) => {
  console.log(username);
  return ({
    type: USER_LOGIN,
    payload: username
  });
};

export const cardSwiped = (card, direction) => {
  return ({
    type: CARD_SWIPED,
    payload: { image: card, like: direction}
  });
}


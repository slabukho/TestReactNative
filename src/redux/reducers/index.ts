import {combineReducers} from 'redux';

import cards, {CardsState} from './Cards';

export interface RootReducer {
  cards: CardsState;
}

const reducer = {
  cards,
};

export default combineReducers<RootReducer>(reducer);

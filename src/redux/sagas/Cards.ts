import {fork, put, take} from 'redux-saga/effects';

// components
import {CARDS_ACTIONS, CardsAction} from '../actions/cards';
const data = require('../../helpers/jsonHardCode.json');

function* getCardsInfo() {
  while (true) {
    yield take(CARDS_ACTIONS.REQUEST_SET_CARDS);
    try {
      //may be some async actions..)
      yield put(CardsAction.success(data));
    } catch (e) {
      yield put(CardsAction.error());
    }
  }
}

export default [fork(getCardsInfo)];

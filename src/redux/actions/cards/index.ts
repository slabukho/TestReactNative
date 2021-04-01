import {CatsData} from '../../../types';

export const CARDS_ACTIONS = {
  SUCCESS_SET_CARDS: 'SUCCESS_SET_CARDS',
  REQUEST_SET_CARDS: 'REQUEST_SET_CARDS',
  FAILURE_SET_CARDS: 'FAILURE_SET_CARDS',
  SET_ID: 'SET_ID',
};

export const CardsAction = {
  success: (payload: CatsData) => ({
    payload,
    type: CARDS_ACTIONS.SUCCESS_SET_CARDS,
  }),
  request: () => ({
    type: CARDS_ACTIONS.REQUEST_SET_CARDS,
  }),
  error: () => ({
    type: CARDS_ACTIONS.FAILURE_SET_CARDS,
  }),
  setChosenId: (payload: number[]) => ({
    payload,
    type: CARDS_ACTIONS.SET_ID,
  }),
};

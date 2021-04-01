import {CARDS_ACTIONS} from '../actions/cards';
import {CatsData} from '../../types';

export const initialState: CardsState = {
  isLoading: false,
  chosenId: [],
};

export interface CardsState {
  isLoading: boolean;
  cards?: CatsData;
  chosenId: number[];
}

const cards = (
  state = initialState,
  action: {
    type: string;
    payload?: CatsData | number[];
  },
): CardsState => {
  switch (action.type) {
    case CARDS_ACTIONS.REQUEST_SET_CARDS:
      return {
        ...state,
        isLoading: true,
      };
    case CARDS_ACTIONS.SUCCESS_SET_CARDS:
      return {
        ...state,
        cards: action.payload as CatsData,
        isLoading: false,
      };
    case CARDS_ACTIONS.FAILURE_SET_CARDS:
      return {
        ...state,
        isLoading: false,
      };
    case CARDS_ACTIONS.SET_ID:
      return {
        ...state,
        chosenId: action.payload as number[],
      };
    default:
      return state;
  }
};

export default cards;

import { IAction } from '../actions';
import {
  FILTER_TICKETS_BY_NUMBER_OF_TRANSFERS,
  filterValueType,
} from '../actions/filters';

export const filters = (state: filterValueType[] = [], action: IAction) => {
  switch (action.type) {
    case FILTER_TICKETS_BY_NUMBER_OF_TRANSFERS:
      if (state.indexOf(action.payload) !== -1) {
        return state.filter((item: filterValueType) => item !== action.payload);
      }
      return [...state, action.payload];
    default:
      return state;
  }
};

export default filters;

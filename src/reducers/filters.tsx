import { IAction } from '../actions';
import {
  FILTER_TICKETS_BY_NUMBER_OF_TRANSFERS,
  FilterValueType,
  RESET_TICKETS_FILTER,
} from '../actions/filters';

export const filters = (state: FilterValueType[] = [], action: IAction) => {
  switch (action.type) {
    case FILTER_TICKETS_BY_NUMBER_OF_TRANSFERS:
      if (state.indexOf(action.payload) !== -1) {
        return state.filter((item: FilterValueType) => item !== action.payload);
      }
      return [...state, action.payload];
    case RESET_TICKETS_FILTER:
      return [];
    default:
      return state;
  }
};
export default filters;

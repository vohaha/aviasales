import { IAction } from '../actions';
import { CurrencyIdType, SET_CURRENCY } from '../actions/currency';

export const currency = (state: CurrencyIdType = 'rub', action: IAction) => {
  switch (action.type) {
    case SET_CURRENCY:
      return action.payload;
    default:
      return state;
  }
};

export default currency;

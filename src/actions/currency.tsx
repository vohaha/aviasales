import { IAction } from './index';

export type CurrencyIdType = string;

/* set currency */
export const SET_CURRENCY = 'SET_CURRENCY';
export type setCurrencyActionType = (
  currencyId: CurrencyIdType,
) => IAction & {
  payload: CurrencyIdType;
};
export const changeCurrencyActionCreator: setCurrencyActionType = currencyId => ({
  type: SET_CURRENCY,
  payload: currencyId,
});

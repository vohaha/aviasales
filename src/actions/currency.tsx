import { IAction } from './index';

export interface ICurrency {
  currentCurrency: CurrencyIdType;
  currencies: ICurrencies;
}
export type CurrencyIdType = string;
export interface ICurrencies {
  [id: string]: ICurrenciesItem;
}
export interface ICurrenciesItem {
  labeltext: string;
  coefficient: number;
  sign: string;
}

/* load currencies */
export type LoadCurrenciesActionCreatorType = (currencies: ICurrencies) => IAction;
export const LOAD_CURRENCIES = 'LOAD_CURRENCIES';
export const loadCurrenciesActionCreator: LoadCurrenciesActionCreatorType = currencies => ({
  type: LOAD_CURRENCIES,
  payload: currencies,
});

/* change current currency */
export type ChangeCurrentCurrencyActionCreatorType = (
  currencyId: CurrencyIdType,
) => IAction & {
  payload: CurrencyIdType;
};
export const CHANGE_CURRENT_CURRENCY = 'CHANGE_CURRENT_CURRENCY';
export const changeCurrentCurrencyActionCreator: ChangeCurrentCurrencyActionCreatorType = currencyId => ({
  type: CHANGE_CURRENT_CURRENCY,
  payload: currencyId,
});

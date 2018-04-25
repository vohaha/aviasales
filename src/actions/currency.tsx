import { IAction } from './index';

export type CurrencyIdType = string;
export interface ICurrenciesItem {
  labeltext: string;
  coefficient: number;
  sign: string;
}
export interface ICurrencies {
  [id: string]: ICurrenciesItem;
}

/* load currencies */
export const LOAD_CURRENCIES = 'LOAD_CURRENCIES';

export interface ICurrency {
  currentCurrency: CurrencyIdType;
  currencies: ICurrencies;
}
export type LoadCurrenciesActionCreatorType = (currencies: ICurrencies) => IAction;
export const loadCurrenciesActionCreator: LoadCurrenciesActionCreatorType = currencies => ({
  type: LOAD_CURRENCIES,
  payload: currencies,
});

/* change current currency */
export const CHANGE_CURRENT_CURRENCY = 'CHANGE_CURRENT_CURRENCY';
export type ChangeCurrentCurrencyActionCreatorType = (
  currencyId: CurrencyIdType,
) => IAction & {
  payload: CurrencyIdType;
};
export const changeCurrentCurrencyActionCreator: ChangeCurrentCurrencyActionCreatorType = currencyId => ({
  type: CHANGE_CURRENT_CURRENCY,
  payload: currencyId,
});

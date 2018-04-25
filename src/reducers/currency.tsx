import { IAction } from '../actions';
import { CHANGE_CURRENT_CURRENCY, ICurrency, LOAD_CURRENCIES } from '../actions/currency';

const defaultCurrencies: ICurrency = {
  currentCurrency: 'rub',
  currencies: {
    rub: {
      labeltext: 'rub',
      coefficient: 1,
      sign: '​₽',
    },
    usd: {
      labeltext: 'usd',
      coefficient: 0.02,
      sign: '$',
    },
    eur: {
      labeltext: 'eur',
      coefficient: 0.013,
      sign: '€',
    },
  },
};

export const currency = (state: ICurrency = defaultCurrencies, action: IAction) => {
  switch (action.type) {
    case LOAD_CURRENCIES:
      return { currentCurrency: state.currentCurrency, currencies: action.payload };
    case CHANGE_CURRENT_CURRENCY:
      return { currentCurrency: action.payload, currencies: state.currencies };
    default:
      return state;
  }
};

export default currency;

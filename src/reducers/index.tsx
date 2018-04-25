import { combineReducers } from 'redux';
import { CurrencyIdType, ICurrencies } from '../actions/currency';
import { FilterValueType } from '../actions/filters';
import { ITicketProps } from '../components/Ticket';
import currency from './currency';
import filters from './filters';
import tickets from './tickets';

export interface IState {
  tickets: ITicketProps[];
  filters: FilterValueType[];
  currency: {
    currentCurrency: CurrencyIdType;
    currencies: ICurrencies;
  };
}
const rootReducer = combineReducers({
  tickets,
  filters,
  currency,
});
export default rootReducer;

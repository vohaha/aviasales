import { combineReducers } from 'redux';
import { filterValueType } from '../actions/filters';
import { ITicketProps } from '../components/Ticket';
import filters from './filters';
import tickets from './tickets';

export interface IState {
  tickets: ITicketProps[];
  filters: filterValueType[];
}

const rootReducer = combineReducers({
  tickets,
  filters,
});

export default rootReducer;

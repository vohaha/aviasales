import { IAction } from '../actions';
import { LOAD_TICKETS } from '../actions/tickets';
import { ITicketProps } from '../components/Ticket';

export const tickets = (state: ITicketProps[] = [], action: IAction) => {
  switch (action.type) {
    case LOAD_TICKETS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
export default tickets;

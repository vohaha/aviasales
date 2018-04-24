import { ITicketProps } from '../components/Ticket';
import { IAction } from './index';

export const LOAD_TICKETS = 'LOAD_TICKETS';

export type loadTicketsAction = (
  ticketsList: ITicketProps[],
) => IAction & {
  payload: ITicketProps[];
};

export const loadTicketsActionCreator: loadTicketsAction = arrOfTickets => ({
  type: LOAD_TICKETS,
  payload: arrOfTickets,
});

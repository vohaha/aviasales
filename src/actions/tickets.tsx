import { ITicketProps } from '../components/Ticket';
import { IAction } from './index';

export const LOAD_TICKETS = 'LOAD_TICKETS';
export const FETCH_TICKETS = 'FETCH_TICKETS';

export type fetchTicketsActionCreatorType = () => IAction;

export const fetchTicketsActionCreator: fetchTicketsActionCreatorType = () => ({
  type: FETCH_TICKETS,
});

export type loadTicketsActionType = (
  arrOfTickets: ITicketProps[],
) => IAction & {
  payload: ITicketProps[];
};

export const loadTicketsActionCreator: loadTicketsActionType = (
  arrOfTickets: ITicketProps[],
) => ({
  type: LOAD_TICKETS,
  payload: arrOfTickets,
});

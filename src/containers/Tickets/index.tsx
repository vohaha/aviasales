import * as React from 'react';
import { connect } from 'react-redux';
import { CurrencyIdType } from '../../actions/currency';
import { FilterValueType } from '../../actions/filters';
import { loadTicketsActionCreator } from '../../actions/tickets';
import Ticket, { ITicketProps } from '../../components/Ticket';
import { IState } from '../../reducers';

const sortFn: (
  a: {
    price: number;
  },
  b: {
    price: number;
  },
) => any = (a, b) => a.price > b.price;

class Tickets extends React.Component<{
  ticketsArr: ITicketProps[];
  filters: FilterValueType[];
  currency: CurrencyIdType;
  loadTickets: (ticketsArr: ITicketProps[]) => void;
}> {
  public componentDidMount() {
    fetch('./tickets.json')
      .then((resp: Response) => resp.json())
      .then((data: { tickets: ITicketProps[] }) => {
        this.props.loadTickets(data.tickets);
      })
      .catch((err: Error) => {
        console.dir(err);
      });
  }
  public render() {
    const { ticketsArr, filters, currency } = this.props;
    return ticketsArr
      .filter(ticket => {
        if (
          filters.length === 0 ||
          !!filters.find(filterValue => filterValue === 'all')
        ) {
          return true;
        }
        return !!filters.find(filterValue => {
          return Number(filterValue) === ticket.stops;
        });
      })
      .sort(sortFn)
      .map((ticket: ITicketProps) => (
        <Ticket
          key={`${ticket.arrival_time}${ticket.departure_time}${ticket.origin}${
            ticket.destination
          }`}
          {...ticket}
          currency={currency}
        />
      ));
  }
}

export default connect(
  (state: IState) => ({
    ticketsArr: state.tickets,
    filters: state.filters,
    currency: state.currency,
  }),
  (dispatch: any) => ({
    loadTickets: (ticketsArr: ITicketProps[]) => {
      dispatch(loadTicketsActionCreator(ticketsArr));
    },
  }),
)(Tickets);

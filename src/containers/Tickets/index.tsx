import * as React from 'react';
import { connect } from 'react-redux';
import { CurrencyIdType } from '../../actions/currency';
import { FilterValueType } from '../../actions/filters';
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
}> {
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
  null,
)(Tickets);

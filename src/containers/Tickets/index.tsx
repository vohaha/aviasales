import * as React from 'react';
import { connect } from 'react-redux';
import { filterValueType } from '../../actions/filters';
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
  filters: filterValueType[];
}> {
  public render() {
    const { ticketsArr, filters } = this.props;
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
        />
      ));
  }
}

export default connect(
  (state: IState) => ({
    ticketsArr: state.tickets,
    filters: state.filters,
  }),
  null,
)(Tickets);

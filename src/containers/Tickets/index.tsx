import * as React from 'react';
import { connect } from 'react-redux';
import { CurrencyIdType } from '../../actions/currency';
import { IFilter } from '../../actions/filters';
import {
  fetchTicketsActionCreator,
  fetchTicketsActionCreatorType,
} from '../../actions/tickets';
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
  tickets: ITicketProps[];
  filters: IFilter;
  currentCurrency: CurrencyIdType;
  fetchTickets: fetchTicketsActionCreatorType;
}> {
  public componentDidMount() {
    this.props.fetchTickets();
  }
  public render() {
    const { currentCurrency } = this.props;
    return this.getTicketsForRender().map((ticket: ITicketProps) => (
      <Ticket
        key={`${ticket.arrival_time}${ticket.departure_time}${ticket.origin}${
          ticket.destination
        }`}
        {...ticket}
        currency={currentCurrency}
      />
    ));
  }

  private getTicketsForRender() {
    const {
      tickets,
      filters: { currentTransfers },
    } = this.props;
    /* if no settled filters or set filter "all" */
    const isFiltersAllowShowAllTickets: boolean =
      !currentTransfers.length ||
      !!currentTransfers.find(filterValue => filterValue === 'all');
    return tickets
      .filter(
        ticket =>
          isFiltersAllowShowAllTickets ||
          !!currentTransfers.find(filterValue => Number(filterValue) === ticket.stops),
      )
      .sort(sortFn);
  }
}
export default connect(
  (state: IState) => ({
    tickets: state.tickets,
    filters: state.filters,
    currentCurrency: state.currency.currentCurrency,
  }),
  {
    fetchTickets: fetchTicketsActionCreator,
  },
)(Tickets);

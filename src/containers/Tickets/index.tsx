import * as React from 'react';
import { connect } from 'react-redux';
import { CurrencyIdType } from '../../actions/currency';
import { FilterValueType } from '../../actions/filters';
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
  ticketsArr: ITicketProps[];
  filters: FilterValueType[];
  currentCurrency: CurrencyIdType;
  fetchTickets: fetchTicketsActionCreatorType;
}> {
  public componentDidMount() {
    this.props.fetchTickets();
  }
  public render() {
    const { ticketsArr, filters, currentCurrency } = this.props;
    return this.getTicketsForRender(ticketsArr, filters).map((ticket: ITicketProps) => (
      <Ticket
        key={`${ticket.arrival_time}${ticket.departure_time}${ticket.origin}${
          ticket.destination
        }`}
        {...ticket}
        currency={currentCurrency}
      />
    ));
  }
  private getTicketsForRender(
    allAvailableTickets: ITicketProps[] = [],
    filters: FilterValueType[] = [],
  ) {
    /* if no settled filters or set filter "all" */
    const isFiltersAllowShowAllTickets: boolean =
      !filters.length || !!filters.find(filterValue => filterValue === 'all');
    return allAvailableTickets
      .filter(
        ticket =>
          isFiltersAllowShowAllTickets ||
          !!filters.find(filterValue => Number(filterValue) === ticket.stops),
      )
      .sort(sortFn);
  }
}

export default connect(
  (state: IState) => ({
    ticketsArr: state.tickets,
    filters: state.filters,
    currentCurrency: state.currency.currentCurrency,
  }),
  {
    fetchTickets: fetchTicketsActionCreator,
  },
)(Tickets);

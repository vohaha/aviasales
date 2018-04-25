import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_TICKETS, loadTicketsActionCreator } from '../actions/tickets';
import { ITicketProps } from '../components/Ticket';

function* fetchTickets() {
  try {
    const fetchedTickets: ITicketProps[] = yield call(() =>
      fetch('./tickets.json')
        .then((resp: Response) => resp.json())
        .then((data: { tickets: ITicketProps[] }) => data.tickets),
    );
    yield put(loadTicketsActionCreator(fetchedTickets));
  } catch (err) {
    console.dir(err);
  }
}

export default function* ticketsSaga(): Iterable<any> {
  yield* [takeEvery(FETCH_TICKETS, fetchTickets)];
}

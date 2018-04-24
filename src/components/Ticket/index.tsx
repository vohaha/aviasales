import * as React from 'react';
import { CurrencyIdType } from '../../actions/currency';
import Button from '../Button';
import Paper from '../Paper';
import './index.css';
import TicketPoint from './TicketPoint';

export interface ITicketProps extends React.HTMLProps<HTMLElement> {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
  currency?: string;
}

const currencyInfo = {
  rub: {
    coefficient: 1,
    sign: '​₽',
  },
  usd: {
    coefficient: 0.02,
    sign: '$',
  },
  eur: {
    coefficient: 0.013,
    sign: '€',
  },
};

const currencyTemplater = (currency: CurrencyIdType = 'rub', price: number) => {
  const poweredPrice = Number((price * currencyInfo[currency].coefficient).toFixed(2));
  return `Купить\nза ${poweredPrice}${currencyInfo[currency].sign}`;
};

export const Ticket: React.SFC<ITicketProps> = ({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  carrier,
  stops,
  price,
  currency,
}) => {
  return (
    <Paper tag="article" className="ticket">
      <div className="ticket__side">
        <img
          src={require(`./img/${carrier}.png`)}
          alt={carrier}
          className="ticket__carrier"
        />
        <Button className="ticket__buy" type="button">
          {currencyTemplater(currency, price)}
        </Button>
      </div>
      <div className="ticket__main">
        <TicketPoint
          className="ticket__point ticket-point--origin"
          time={departure_time}
          abbreviatedName={origin}
          name={origin_name}
          date={departure_date}
        />
        <div className="ticket__stops">{!!stops && `${stops}\nпересадки`}</div>
        <TicketPoint
          className="ticket__point ticket-point--destination"
          time={arrival_time}
          abbreviatedName={destination}
          name={destination_name}
          date={arrival_date}
        />
      </div>
    </Paper>
  );
};

export default Ticket;

import * as React from 'react';
import Button from './components/Button';
import ChoiceBox from './components/ChoiceBox';
import TemplateBase from './components/TemplateBase';
import Ticket, { ITicketProps } from './components/Ticket';

const tickets = [
  {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '16:20',
    arrival_date: '12.05.18',
    arrival_time: '22:10',
    carrier: 'TK',
    stops: 3,
    price: 12400,
  },
  {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '17:20',
    arrival_date: '12.05.18',
    arrival_time: '23:50',
    carrier: 'S7',
    stops: 1,
    price: 13100,
  },
  {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '12:10',
    arrival_date: '12.05.18',
    arrival_time: '18:10',
    carrier: 'SU',
    stops: 0,
    price: 15300,
  },
  {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '17:00',
    arrival_date: '12.05.18',
    arrival_time: '23:30',
    carrier: 'TK',
    stops: 2,
    price: 11000,
  },
  {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '12:10',
    arrival_date: '12.05.18',
    arrival_time: '20:15',
    carrier: 'BA',
    stops: 3,
    price: 13400,
  },
  {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '9:40',
    arrival_date: '12.05.18',
    arrival_time: '19:25',
    carrier: 'SU',
    stops: 3,
    price: 12450,
  },
  {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '17:10',
    arrival_date: '12.05.18',
    arrival_time: '23:45',
    carrier: 'TK',
    stops: 1,
    price: 13600,
  },
  {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '6:10',
    arrival_date: '12.05.18',
    arrival_time: '15:25',
    carrier: 'TK',
    stops: 0,
    price: 14250,
  },
  {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '16:50',
    arrival_date: '12.05.18',
    arrival_time: '23:35',
    carrier: 'SU',
    stops: 1,
    price: 16700,
  },
  {
    origin: 'VVO',
    origin_name: 'Владивосток',
    destination: 'TLV',
    destination_name: 'Тель-Авив',
    departure_date: '12.05.18',
    departure_time: '6:10',
    arrival_date: '12.05.18',
    arrival_time: '16:15',
    carrier: 'S7',
    stops: 0,
    price: 17400,
  },
];

const sortFn: (
  a: {
    price: number;
  },
  b: {
    price: number;
  },
) => any = (a, b) => a.price > b.price;

const Aside = () => (
  <React.Fragment>
    <section className="template__block">
      <h2 className="template__title">Валюта</h2>
      <ChoiceBox
        type="radio"
        radios={[
          {
            value: 'rub',
            labeltext: 'rub',
            defaultChecked: true,
          },
          {
            value: 'usd',
            labeltext: 'usd',
          },
          {
            value: 'eur',
            labeltext: 'eur',
          },
        ]}
        name="currency"
      />
    </section>
    <section className="template__block template__block--full-width">
      <h2 className="template__title">Количество пересадок</h2>
      <ChoiceBox
        type="checkbox"
        radios={[
          {
            value: 'all',
            labeltext: 'Все',
            additionalrender: () => <Button className="checkbox__only">Только</Button>,
          },
          {
            value: '0',
            labeltext: 'Без пересадок',
            additionalrender: () => <Button className="checkbox__only">Только</Button>,
          },
          {
            value: '2',
            labeltext: '2 пересадки',
            additionalrender: () => <Button className="checkbox__only">Только</Button>,
          },
          {
            value: '3',
            labeltext: '3 пересадки',
            additionalrender: () => <Button className="checkbox__only">Только</Button>,
          },
        ]}
        name="transfer"
      />
    </section>
  </React.Fragment>
);

const Content = () =>
  tickets
    .sort(sortFn)
    .map((ticket: ITicketProps) => (
      <Ticket
        key={`${ticket.arrival_time}${ticket.departure_time}${ticket.origin}${
          ticket.destination
        }`}
        {...ticket}
      />
    ));

class App extends React.Component {
  public render() {
    return <TemplateBase aside={Aside} content={Content} />;
  }
}

export default App;

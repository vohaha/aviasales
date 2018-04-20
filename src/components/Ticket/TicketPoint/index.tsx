import * as classNames from 'classnames';
import * as React from 'react';
import './index.css';

export interface ITicketPointProps extends React.HTMLProps<HTMLDivElement> {
  time: string;
  abbreviatedName: string;
  name: string;
  date: string;
}

export const TicketPoint: React.SFC<ITicketPointProps> = ({
  time,
  abbreviatedName,
  name,
  date,
  ...props
}) => {
  return (
    <div {...props} className={classNames('ticket-point', props.className)}>
      <div className="ticket-point__time">{time}</div>
      <div className="ticket-point__origin">
        {abbreviatedName}, {name}
      </div>
      <div className="ticket-point__date">{date}</div>
    </div>
  );
};

export default TicketPoint;

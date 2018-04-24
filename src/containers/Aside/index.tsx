import * as React from 'react';
import { connect } from 'react-redux';
import { filterTicketsActionCreator, filterValueType } from '../../actions/filters';
import Button from '../../components/Button';
import ChoiceBox from '../../components/ChoiceBox';

class Aside extends React.Component<{
  changeTicketFilter: (filterValue: filterValueType) => void;
}> {
  public render() {
    const { changeTicketFilter } = this.props;
    return (
      <React.Fragment>
        <section className="template__block">
          <h2 className="template__title">Валюта</h2>
          <ChoiceBox
            type="radio"
            variants={[
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
            // tslint:disable-next-line jsx-no-lambda
            commonOnchange={(e: React.FormEvent<HTMLUListElement>) => {
              const target: any = e.target;
              changeTicketFilter(target.value);
            }}
            variants={[
              {
                value: 'all',
                labeltext: 'Все',
                additionalrender: () => (
                  <Button className="checkbox__only">Только</Button>
                ),
              },
              {
                value: '0',
                labeltext: 'Без пересадок',
                additionalrender: () => (
                  <Button className="checkbox__only">Только</Button>
                ),
              },
              {
                value: '2',
                labeltext: '2 пересадки',
                additionalrender: () => (
                  <Button className="checkbox__only">Только</Button>
                ),
              },
              {
                value: '3',
                labeltext: '3 пересадки',
                additionalrender: () => (
                  <Button className="checkbox__only">Только</Button>
                ),
              },
            ]}
            name="transfer"
          />
        </section>
      </React.Fragment>
    );
  }
}

export default connect(null, dispatch => ({
  changeTicketFilter: (filterValue: filterValueType) => {
    dispatch(filterTicketsActionCreator(filterValue));
  },
}))(Aside);

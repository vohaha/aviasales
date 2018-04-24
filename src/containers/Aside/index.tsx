import * as React from 'react';
import { connect } from 'react-redux';
import {
  filterTicketsActionCreator,
  filterValueType,
  resetTicketsFilterActionCreator,
} from '../../actions/filters';
import Button from '../../components/Button';
import ChoiceBox from '../../components/ChoiceBox';

class Aside extends React.Component<{
  changeTicketsFilter: (filterValue: filterValueType) => void;
  resetTicketsFilter: () => void;
}> {
  public render() {
    const { changeTicketsFilter } = this.props;
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
              changeTicketsFilter(target.value);
            }}
            variants={[
              {
                value: 'all',
                labeltext: 'Все',
                additionalrender: () => (
                  <Button onClick={this.onlyHandler} className="checkbox__only">
                    Только
                  </Button>
                ),
              },
              {
                value: '0',
                labeltext: 'Без пересадок',
                additionalrender: () => (
                  <Button onClick={this.onlyHandler} className="checkbox__only">
                    Только
                  </Button>
                ),
              },
              {
                value: '2',
                labeltext: '2 пересадки',
                additionalrender: () => (
                  <Button onClick={this.onlyHandler} className="checkbox__only">
                    Только
                  </Button>
                ),
              },
              {
                value: '3',
                labeltext: '3 пересадки',
                additionalrender: () => (
                  <Button onClick={this.onlyHandler} className="checkbox__only">
                    Только
                  </Button>
                ),
              },
            ]}
            name="transfer"
          />
        </section>
      </React.Fragment>
    );
  }
  protected onlyHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    const { resetTicketsFilter, changeTicketsFilter } = this.props;
    const target: any = e.target;
    const currentParent = target.parentNode;
    const currentInput: HTMLInputElement =
      currentParent && currentParent.querySelector('input');
    const commonParent: HTMLElement = currentParent && currentParent.parentNode;
    const allInputs: HTMLInputElement[] = commonParent
      ? [].slice.call(commonParent.querySelectorAll('input'))
      : [];
    allInputs.forEach((input: HTMLInputElement) => {
      input.checked = false;
      resetTicketsFilter();
    });
    currentInput.checked = true;
    changeTicketsFilter(currentInput.value);
  };
}

export default connect(null, dispatch => ({
  changeTicketsFilter: (filterValue: filterValueType) => {
    dispatch(filterTicketsActionCreator(filterValue));
  },
  resetTicketsFilter: () => {
    dispatch(resetTicketsFilterActionCreator());
  },
}))(Aside);

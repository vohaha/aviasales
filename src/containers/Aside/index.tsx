import * as React from 'react';
import { connect } from 'react-redux';
import { changeCurrencyActionCreator, CurrencyIdType } from '../../actions/currency';
import {
  filterTicketsActionCreator,
  FilterValueType,
  resetTicketsFilterActionCreator,
} from '../../actions/filters';
import Button from '../../components/Button';
import ChoiceBox, { IChoiceBoxVariant } from '../../components/ChoiceBox';
import { IState } from '../../reducers';

const currencyVariants: IChoiceBoxVariant[] = [
  {
    value: 'rub',
    labeltext: 'rub',
  },
  {
    value: 'usd',
    labeltext: 'usd',
  },
  {
    value: 'eur',
    labeltext: 'eur',
  },
];

interface IAsideProps {
  currency: CurrencyIdType;
  changeTicketsFilter: (filterValue: FilterValueType) => void;
  resetTicketsFilter: () => void;
  changeCurrency: (newCurrency: CurrencyIdType) => void;
}

class Aside extends React.Component<IAsideProps> {
  constructor(props: IAsideProps) {
    super(props);
    currencyVariants.forEach((variant: IChoiceBoxVariant) => {
      if (variant.value === this.props.currency) {
        variant.defaultChecked = true;
      }
    });
  }
  public render() {
    const { changeTicketsFilter, changeCurrency } = this.props;
    return (
      <React.Fragment>
        <section className="template__block">
          <h2 className="template__title">Валюта</h2>
          <ChoiceBox
            type="radio"
            variants={currencyVariants}
            name="currency"
            // tslint:disable-next-line jsx-no-lambda
            commonOnchange={(e: React.FormEvent<HTMLUListElement>) => {
              const target: any = e.target;
              changeCurrency(target.value);
            }}
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

export default connect(
  (state: IState) => ({
    currency: state.currency,
  }),
  dispatch => ({
    changeTicketsFilter: (filterValue: FilterValueType) => {
      dispatch(filterTicketsActionCreator(filterValue));
    },
    resetTicketsFilter: () => {
      dispatch(resetTicketsFilterActionCreator());
    },
    changeCurrency: (newCurrency: CurrencyIdType) => {
      dispatch(changeCurrencyActionCreator(newCurrency));
    },
  }),
)(Aside);

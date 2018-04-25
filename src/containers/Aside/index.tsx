import * as React from 'react';
import { connect } from 'react-redux';
import {
  changeCurrentCurrencyActionCreator,
  ChangeCurrentCurrencyActionCreatorType,
  ICurrenciesItem,
  ICurrency,
} from '../../actions/currency';
import {
  filterTicketsActionCreator,
  FilterTicketsActionCreatorType,
  resetTicketsFilterActionCreator,
  ResetTicketsFilterActionCreatorType,
} from '../../actions/filters';
import Button from '../../components/Button';
import ChoiceBox, { IChoiceBoxVariant } from '../../components/ChoiceBox';
import { IState } from '../../reducers';

interface IAsideProps {
  currency: ICurrency;
  changeTicketsFilter: FilterTicketsActionCreatorType;
  resetTicketsFilter: ResetTicketsFilterActionCreatorType;
  changeCurrentCurrency: ChangeCurrentCurrencyActionCreatorType;
}

class Aside extends React.Component<IAsideProps> {
  public render() {
    return (
      <React.Fragment>
        <section className="template__block">
          <h2 className="template__title">Валюта</h2>
          <ChoiceBox
            type="radio"
            variants={this.getCurrenciesArr()}
            name="currency"
            commonOnchange={this.changeCurrencyHandler}
          />
        </section>
        <section className="template__block template__block--full-width">
          <h2 className="template__title">Количество пересадок</h2>
          <ChoiceBox
            type="checkbox"
            commonOnchange={this.changeTicketsFilterHandler}
            variants={[
              {
                value: 'all',
                labeltext: 'Все',
                additionalrender: this.onlyButton,
              },
              {
                value: '0',
                labeltext: 'Без пересадок',
                additionalrender: this.onlyButton,
              },
              {
                value: '2',
                labeltext: '2 пересадки',
                additionalrender: this.onlyButton,
              },
              {
                value: '3',
                labeltext: '3 пересадки',
                additionalrender: this.onlyButton,
              },
            ]}
            name="transfer"
          />
        </section>
      </React.Fragment>
    );
  }

  private onlyButton = () => (
    <Button onClick={this.onlyHandler} className="checkbox__only">
      Только
    </Button>
  );
  private onlyHandler = (e: React.FormEvent<HTMLButtonElement>) => {
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
  private changeCurrencyHandler = (e: React.FormEvent<HTMLUListElement>) => {
    const target: any = e.target;
    this.props.changeCurrentCurrency(target.value);
  };
  private changeTicketsFilterHandler = (e: React.FormEvent<HTMLUListElement>) => {
    const target: any = e.target;
    this.props.changeTicketsFilter(target.value);
  };
  private getCurrenciesArr = (): IChoiceBoxVariant[] => {
    const currency: ICurrency = this.props.currency;
    const currencies = currency.currencies;
    const keys = Object.keys(currencies);
    return keys.map((value: string): IChoiceBoxVariant => {
      const currencyItem: ICurrenciesItem = currencies[value];
      return {
        labeltext: currencyItem.labeltext,
        value,
        defaultChecked: currency.currentCurrency === value,
      };
    });
  };
}
export default connect(
  (state: IState) => ({
    currency: state.currency,
  }),
  {
    changeTicketsFilter: filterTicketsActionCreator,
    resetTicketsFilter: resetTicketsFilterActionCreator,
    changeCurrentCurrency: changeCurrentCurrencyActionCreator,
  },
)(Aside);

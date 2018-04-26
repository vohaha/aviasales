import * as React from 'react';
import { connect } from 'react-redux';
import {
  changeCurrentCurrencyActionCreator,
  ChangeCurrentCurrencyActionCreatorType,
  ICurrenciesItem,
  ICurrency,
} from '../../actions/currency';
import {
  ChangeTransferFilterActionCreator,
  IFilter,
  ITransferFilterItem,
  ITransferFilters,
  resetTransferFilterActionCreator,
  ResetTransferFilterActionCreatorType,
  TransferFilterIdType,
} from '../../actions/filters';
import Button from '../../components/Button';
import ChoiceBox, { IChoiceBoxVariant } from '../../components/ChoiceBox';
import { IState } from '../../reducers';

interface IAsideProps {
  currency: ICurrency;
  filters: IFilter;
  resetTransferFilter: ResetTransferFilterActionCreatorType;
  changeTransferFilter: ChangeCurrentCurrencyActionCreatorType;
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
            variants={this.getFiltersArr()}
            name="transfer"
          />
        </section>
      </React.Fragment>
    );
  }

  private onlyButtonHandler = (transferFilterId: TransferFilterIdType) => {
    this.props.resetTransferFilter();
    this.props.changeTransferFilter(transferFilterId);
  };
  private onlyButton = (transferFilterId: TransferFilterIdType) => {
    return (
      <Button
        onClick={this.onlyButtonHandler.bind(this, transferFilterId)}
        className="checkbox__only"
      >
        Только
      </Button>
    );
  };
  private changeTicketsFilterHandler = (e: React.FormEvent<HTMLUListElement>) => {
    const target: any = e.target;
    this.props.changeTransferFilter(target.value);
  };
  private getFiltersArr = (): IChoiceBoxVariant[] => {
    const allFilters: IFilter = this.props.filters;
    const transferFilters: ITransferFilters = allFilters.transfers;
    const keys = Object.keys(transferFilters);
    return keys.map((filterId: TransferFilterIdType): IChoiceBoxVariant => {
      const currentFilter: ITransferFilterItem = transferFilters[filterId];
      return {
        ...currentFilter,
        value: filterId,
        additionalrender: this.onlyButton.bind(this, filterId),
      };
    });
  };
  private changeCurrencyHandler = (e: React.FormEvent<HTMLUListElement>) => {
    const target: any = e.target;
    this.props.changeCurrentCurrency(target.value);
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
    filters: state.filters,
  }),
  {
    resetTransferFilter: resetTransferFilterActionCreator,
    changeTransferFilter: ChangeTransferFilterActionCreator,
    changeCurrentCurrency: changeCurrentCurrencyActionCreator,
  },
)(Aside);

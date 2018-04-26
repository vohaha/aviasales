import { IChoiceBoxVariant } from '../components/ChoiceBox';
import { IAction } from './index';

export type TransferFilterIdType = string;

export interface ITransferFilters {
  [filter: string]: ITransferFilterItem;
}

export interface ITransferFilterItem extends IChoiceBoxVariant {
  additionalrender?: () => React.Component;
}

export interface IFilter {
  currentTransfers: TransferFilterIdType[];
  transfers: ITransferFilters;
}

/* change transfer filter */
export const CHANGE_TRANSFER_FILTER = 'CHANGE_TRANSFER_FILTER';
export type ChangeTicketsFilterActionCreatorType = (
  filters: TransferFilterIdType,
) => IAction & {
  payload: TransferFilterIdType;
};
export const ChangeTransferFilterActionCreator: ChangeTicketsFilterActionCreatorType = filterId => ({
  type: CHANGE_TRANSFER_FILTER,
  payload: filterId,
});

/* reset transfer filter */
export const RESET_TRANSFER_FILTER = 'RESET_TRANSFER_FILTER';
export type ResetTransferFilterActionCreatorType = () => IAction;
export const resetTransferFilterActionCreator: ResetTransferFilterActionCreatorType = () => ({
  type: RESET_TRANSFER_FILTER,
});

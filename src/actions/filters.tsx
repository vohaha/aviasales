import { IAction } from './index';

/* set filter */
export const FILTER_TICKETS_BY_NUMBER_OF_TRANSFERS =
  'FILTER_TICKETS_BY_NUMBER_OF_TRANSFERS';
export type FilterValueType = string | 'all';
export type filterTicketsActionType = (
  numberOfTransfers: FilterValueType,
) => IAction & {
  payload: FilterValueType;
};
export const filterTicketsActionCreator: filterTicketsActionType = numberOfTransfers => ({
  type: FILTER_TICKETS_BY_NUMBER_OF_TRANSFERS,
  payload: numberOfTransfers,
});

/* reset filter */
export const RESET_TICKETS_FILTER = 'RESET_TICKETS_FILTER';
export type resetTicketsFilterActionType = () => IAction;
export const resetTicketsFilterActionCreator: resetTicketsFilterActionType = () => ({
  type: RESET_TICKETS_FILTER,
});

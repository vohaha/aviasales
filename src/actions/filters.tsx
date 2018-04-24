import { IAction } from './index';

export const FILTER_TICKETS_BY_NUMBER_OF_TRANSFERS =
  'FILTER_TICKETS_BY_NUMBER_OF_TRANSFERS';

export type filterValueType = number | 'all';

export type filterTicketsAction = (
  numberOfTransfers: filterValueType,
) => IAction & {
  payload: filterValueType;
};

export const filterTicketsActionCreator: filterTicketsAction = numberOfTransfers => ({
  type: FILTER_TICKETS_BY_NUMBER_OF_TRANSFERS,
  payload: numberOfTransfers,
});

import { IAction } from '../actions';
import {
  CHANGE_TRANSFER_FILTER,
  IFilter,
  RESET_TRANSFER_FILTER,
  TransferFilterIdType,
} from '../actions/filters';

const defaultFilters = {
  currentTransfers: [],
  transfers: {
    all: {
      labeltext: 'Все',
    },
    '0': {
      labeltext: 'Без пересадок',
    },
    '2': {
      labeltext: '2 пересадки',
    },
    '3': {
      labeltext: '3 пересадки',
    },
  },
};

export type FiltersReducerType = (state: IFilter, action: IAction) => IFilter;

export const filters: FiltersReducerType = (state = defaultFilters, action) => {
  switch (action.type) {
    case CHANGE_TRANSFER_FILTER:
      return {
        ...state,
        currentTransfers: (() => {
          const currentTransfers = state.currentTransfers;
          const isTransferFilterAlreadyOn = currentTransfers.some(
            (transferFilterId: TransferFilterIdType) =>
              transferFilterId === action.payload,
          );
          if (isTransferFilterAlreadyOn) {
            return state.currentTransfers.filter(
              (transferFilterId: TransferFilterIdType) =>
                transferFilterId !== action.payload,
            );
          }
          return [...state.currentTransfers, action.payload];
        })(),
        transfers: {
          ...state.transfers,
          [action.payload]: {
            ...state.transfers[action.payload],
            checked: !state.transfers[action.payload].checked,
          },
        },
      };
    case RESET_TRANSFER_FILTER:
      return { ...defaultFilters };
    default:
      return state;
  }
};
export default filters;

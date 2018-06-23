import { Pagination } from '../interfaces';

interface Action {
  type: string;
  page: number | undefined;
  amount: number | undefined;
}

export function paginationReducer(state: Pagination = { page: 0, amount: 20 }, action: Action) {
  if (action.type === 'SET_PAGE_NUMBER') {
    return {...state, page: action.page };
  } else if (action.type === 'SET_PAGE_AMOUNT') {
    return {...state, page: action.amount };
  }

  return state;
}

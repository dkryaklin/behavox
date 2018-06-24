import { Filter } from '../interfaces';

interface Action {
  type: string;
  text?: string;
  date?: Date;
}

export function filterReducer(state: Filter = {}, action: Action) {
  if (action.type === 'CHANGE_FILTER_TEXT') {
    return {...state, text: action.text };
  } else if (action.type === 'RESET_FILTER_TEXT') {
    return {date: state.date};
  } else if (action.type === 'CHANGE_FILTER_DATE') {
    return {...state, date: action.date};
  } else if (action.type === 'RESET_FILTER_DATE') {
    return {keys: state.text};
  }

  return state;
}

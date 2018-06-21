import { Email } from '../interfaces';

interface Action {
  type: string;
  emails: Email[];
}

export function emailsReducer(state: Email[] = [], action: Action) {
  if (action.type === 'ADD_EMAILS') {
    return action.emails;
  }

  return state;
}

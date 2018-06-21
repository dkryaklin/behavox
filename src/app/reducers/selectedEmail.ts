import { Email } from '../interfaces';

interface Action {
  type: string;
  email: Email;
}

export function selectedEmailReducer(state: Email | null, action: Action) {
  if (action.type === 'SET_SELECTED_EMAIL') {
    return action.email;
  }

  return state;
}

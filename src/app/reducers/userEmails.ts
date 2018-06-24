interface Action {
  type: string;
  userEmails: string[];
}

export function userEmailsReducer(state = [], action: Action) {
  if (action.type === 'ADD_USER_EMAILS') {
    return action.userEmails;
  }

  return state;
}

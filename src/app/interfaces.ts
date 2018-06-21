export interface Email {
  from: string;
  to: string[];
  cc: string[];
  bcc: string[];
  subject: string;
  body: string;
  date: Date;
}

export interface AppStore {
  emails: Email[];
}

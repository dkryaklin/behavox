export interface Email {
  id: number;
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

export interface Pagination {
  page: number;
  amount: number;
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmailsService } from './emails.service';
import { Email, AppStore, Filter } from './interfaces';
import finity from 'finity-js';
import clssnms from 'clssnms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isUserEmailsLoaded = false;

  classNames = clssnms('app-container');

  constructor(
    private emailsService: EmailsService,
    private store: Store<AppStore>,
  ) {
    store.select('filter').subscribe((filter: Filter) => this.loadEmails(filter));
  }

  ngOnInit() {
    this.loadEmails();
  }

  loadEmails(filter: Filter = {}) {
    this.emailsService.loadEmails()
    .subscribe((rawData: any) => {
      let data = rawData;
      if (filter.text) {
        data = rawData.filter((item) => {
          return JSON.stringify(item).indexOf(filter.text) !== -1;
        });
      }

      const emails: Email[] = data.map((email, id) => {
        return { ...email, id, date: finity.parse(email.date) };
      });

      emails.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        } else if (a.date < b.date) {
          return -1;
        }
        return 0;
      });

      this.store.dispatch({ type: 'ADD_EMAILS', emails });
      this.store.dispatch({ type: 'SET_PAGE_NUMBER', page: 0 });
      this.store.dispatch({ type: 'SET_SELECTED_EMAIL', email: null });
      if (!this.isUserEmailsLoaded) {
        this.getUserEmails(emails);
      }
    });
  }

  getUserEmails(emails: Email[]) {
    const userEmailsMap = {};
    emails.forEach((emailObj: Email) => {
      const userEmails = [];

      userEmails.push(emailObj.from);
      userEmails.push(...emailObj.to);
      userEmails.push(...emailObj.cc);
      userEmails.push(...emailObj.bcc);

      userEmails.forEach((email) => {
        userEmailsMap[email] = '1';
      });
    });

    this.store.dispatch({ type: 'ADD_USER_EMAILS', userEmails: Object.keys(userEmailsMap)});
    this.isUserEmailsLoaded = true;
  }
}

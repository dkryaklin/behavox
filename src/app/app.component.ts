import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmailsService } from './emails.service';
import { Email, AppStore } from './interfaces';
import finity from 'finity-js';
import clssnms from 'clssnms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  classNames = clssnms('app-container');

  constructor(
    private emailsService: EmailsService,
    private store: Store<AppStore>,
  ) {}

  ngOnInit() {
    this.emailsService.loadEmails()
      .subscribe((data: any) => {
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
      });
  }
}

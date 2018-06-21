import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmailsService } from './emails.service';
import { Email, AppStore } from './interfaces';
import finity from 'finity-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private emailsService: EmailsService,
    private store: Store<AppStore>,
  ) {}

  ngOnInit() {
    this.emailsService.loadEmails()
      .subscribe((data: any) => {
        const emails: Email[] = data.map((email, id) => {
          return { ...email, id, date: finity.parse(email.date).toDateString() };
        });
        this.store.dispatch({ type: 'ADD_EMAILS', emails });
      });
  }
}

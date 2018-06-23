import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import clssnms from 'clssnms';
import { AppStore, Email, Pagination } from '../interfaces';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.scss']
})
export class EmailsListComponent {
  selectedEmailId: number | null;
  emails: Email[];

  classNames = clssnms('emails-list');

  constructor(private store: Store<AppStore>) {
    store.pipe(select('selectedEmail'))
      .subscribe((selectedEmail: Email) => {
        this.selectedEmailId = selectedEmail ? selectedEmail.id : null;
      });

    combineLatest(
      store.select('emails'),
      store.select('pagination'),
    ).subscribe(([ emails, pagination]: [Email[], Pagination]) => {
      const results: Email[] = [];

      const startIndex = pagination.page * pagination.amount;
      let endIndex = startIndex + pagination.amount;
      if (endIndex >= emails.length - 1) {
        endIndex = emails.length - 1;
      }
      for (let i = startIndex; i < endIndex; i++) {
        results.push(emails[i]);
      }

      this.emails = results;
    });
  }

  selectEmail(email: Email) {
    this.store.dispatch({ type: 'SET_SELECTED_EMAIL', email });
  }
}

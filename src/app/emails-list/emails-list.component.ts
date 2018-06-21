import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import clssnms from 'clssnms';
import { AppStore, Email } from '../interfaces';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.scss']
})
export class EmailsListComponent {
  emails: Email[];
  selectedEmailId: number | null;

  classNames = clssnms('emails-list');

  constructor(private store: Store<AppStore>) {
    store.pipe(select('emails'))
      .subscribe((emails: Email[]) => this.emails = emails);
    store.pipe(select('selectedEmail'))
      .subscribe((selectedEmail: Email) => {
        this.selectedEmailId = selectedEmail ? selectedEmail.id : null;
      });
  }

  selectEmail(email: Email) {
    this.store.dispatch({ type: 'SET_SELECTED_EMAIL', email });
  }
}

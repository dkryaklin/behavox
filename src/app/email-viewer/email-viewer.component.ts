import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore, Email } from '../interfaces';
import clssnms from 'clssnms';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.scss'],
})
export class EmailViewerComponent {
  selectedEmail: Email;
  messages: string[];
  messageDeepIndex = 0;

  classNames = clssnms('email-viewer');

  constructor(private store: Store<AppStore>) {
    store.select('selectedEmail').subscribe((selectedEmail: Email) => {
      if (selectedEmail) {
        this.selectedEmail = selectedEmail;
        this.messages = selectedEmail.body.split('-----Original Message-----');
      }
    });
  }
}

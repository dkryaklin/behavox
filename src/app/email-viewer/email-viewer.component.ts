import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore, Email, Message, Filter } from '../interfaces';
import clssnms from 'clssnms';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.scss'],
})
export class EmailViewerComponent {
  selectedEmail: Email;
  messages: Message[];
  messageDeepIndex = 0;
  filter: Filter;

  classNames = clssnms('email-viewer');

  constructor(private store: Store<AppStore>) {
    store.select('filter').subscribe((filter: Filter) => this.filter = filter);

    store.select('selectedEmail').subscribe((selectedEmail: Email) => {
      if (selectedEmail) {
        this.selectedEmail = selectedEmail;
        const messages = selectedEmail.body
          .split(/(---------------------- .+ ---------------------------|-----Original Message-----)/g);

        this.messages = [{message: messages[0]}];

        for (let i = 1; i < messages.length; i = i + 2) {
          const message: Message = {title: messages[i].replace(/-/g, '').trim(), message: messages[i + 1]};
          this.messages.push(message);
        }
      } else {
        this.selectedEmail = null;
        this.messages = [];
      }
    });
  }
}

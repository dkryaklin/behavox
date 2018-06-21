import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStore, Email } from '../interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.css']
})
export class EmailViewerComponent implements OnInit {
  selectedEmail: Observable<Email>;
  selectedEmailString: string;

  constructor(private store: Store<AppStore>) {
    this.selectedEmail = store.pipe(select('selectedEmail'));
    this.selectedEmail.subscribe((email: Email) => this.selectedEmailString = JSON.stringify(email));
  }

  ngOnInit() {
  }

}

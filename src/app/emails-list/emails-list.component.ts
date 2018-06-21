import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import clssnms from 'clssnms';
import { AppStore, Email } from '../interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsListComponent implements OnInit {
  emails: Observable<Email[]>;
  classNames = clssnms('emails-list');

  constructor(private store: Store<AppStore>) {
    this.emails = store.pipe(select('emails'));
  }

  ngOnInit() {
  }

}

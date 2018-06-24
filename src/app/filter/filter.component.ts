import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore, Filter } from '../interfaces';
import clssnms from 'clssnms';
import {FormControl} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterChips: string[];
  userEmails: string[];
  filteredUserEmails: Observable<string[]>;

  classNames = clssnms('filter');
  separatorKeysCodes = [ENTER, COMMA];
  filterCtrl = new FormControl();

  @ViewChild('filterInput') filterInput: ElementRef;

  constructor(private store: Store<AppStore>) {
    store.select('userEmails').subscribe((userEmails: string[]) => this.userEmails = userEmails);
    store.select('filter').subscribe((filter: Filter) => {
      if (filter.text) {
        this.filterChips = [filter.text];
      } else {
        this.filterChips = [];
      }
    });

    this.filteredUserEmails = this.filterCtrl.valueChanges.pipe(
      startWith(null),
      map((email: string | null) => email ? this.filterUserEmails(email) : this.userEmails.slice()));
  }

  addFilter({input, value: text}) {
    if (input) {
      input.value = '';
      this.filterCtrl.setValue(null);
    }
    if (!(text || '').trim()) {
      return;
    }
    this.store.dispatch({ type: 'CHANGE_FILTER_TEXT', text});
  }

  removeFilter() {
    this.store.dispatch({ type: 'RESET_FILTER_TEXT'});
  }

  selectedFilter(args) {
    this.filterInput.nativeElement.value = '';
    this.filterCtrl.setValue(null);
    this.store.dispatch({ type: 'CHANGE_FILTER_TEXT', text: args.option.value});
  }

  filterUserEmails(email: string) {
    return this.userEmails.filter(userEmail =>
      userEmail.toLowerCase().indexOf(email.toLowerCase()) === 0);
  }

}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import clssnms from 'clssnms';
import { AppStore, Email, Pagination, Page } from '../interfaces';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  pages: Page[];
  selectedPage = 0;

  classNames = clssnms('pagination');

  constructor(private store: Store<AppStore>) {
    combineLatest(
      store.select('emails'),
      store.select('pagination'),
    ).subscribe(([ emails, pagination]: [Email[], Pagination]) => {
      const pageAmount = Math.ceil(emails.length / 20);
      this.pages = [];

      for (let i = 0; i < pageAmount; i++) {
        const page: Page = {id: i, label: ''};

        const startIndex = i * pagination.amount + 1;
        let endIndex = startIndex + pagination.amount - 1;
        if (endIndex >= emails.length) {
          endIndex = emails.length;
        }

        page.label = `${startIndex} - ${endIndex} / Page ${i + 1}`;

        this.pages.push(page);
      }
    });
  }

  changePage(selectedPage) {
    this.store.dispatch({ type: 'SET_PAGE_NUMBER', page: selectedPage });
  }

}

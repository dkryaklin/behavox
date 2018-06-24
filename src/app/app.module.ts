import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { emailsReducer } from './reducers/emails';
import { selectedEmailReducer } from './reducers/selectedEmail';
import { paginationReducer } from './reducers/pagination';
import { filterReducer } from './reducers/filter';

import { AppComponent } from './app.component';
import { EmailsListComponent } from './emails-list/emails-list.component';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FilterComponent } from './filter/filter.component';
import { userEmailsReducer } from './reducers/userEmails';

@NgModule({
  declarations: [
    AppComponent,
    EmailsListComponent,
    EmailViewerComponent,
    MessageComponent,
    HeaderComponent,
    PaginationComponent,
    FilterComponent,
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    BrowserModule, BrowserAnimationsModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatSlideToggleModule,
    MatTabsModule, HttpClientModule, MatIconModule, MatExpansionModule,
    MatSelectModule, MatChipsModule, MatInputModule, MatAutocompleteModule,
    StoreModule.forRoot({
      emails: emailsReducer,
      selectedEmail: selectedEmailReducer,
      pagination: paginationReducer,
      filter: filterReducer,
      userEmails: userEmailsReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

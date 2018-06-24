import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { emailsReducer } from './reducers/emails';
import { selectedEmailReducer } from './reducers/selectedEmail';
import { paginationReducer } from './reducers/pagination';

import { AppComponent } from './app.component';
import { EmailsListComponent } from './emails-list/emails-list.component';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailsListComponent,
    EmailViewerComponent,
    MessageComponent,
    HeaderComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatSlideToggleModule,
    MatTabsModule, HttpClientModule, MatIconModule, MatExpansionModule,
    MatSelectModule,
    StoreModule.forRoot({
      emails: emailsReducer,
      selectedEmail: selectedEmailReducer,
      pagination: paginationReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

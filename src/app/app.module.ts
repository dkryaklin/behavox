import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { emailsReducer } from './reducers/emails';

import { AppComponent } from './app.component';
import { EmailsListComponent } from './emails-list/emails-list.component';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailsListComponent,
    EmailViewerComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatSlideToggleModule,
    MatTabsModule, HttpClientModule, StoreModule.forRoot({ emails: emailsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

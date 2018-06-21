import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  private endpoint = 'assets/emails.json';

  constructor(private http: HttpClient) { }

  loadEmails() {
    return this.http.get<Email[]>(this.endpoint);
  }
}

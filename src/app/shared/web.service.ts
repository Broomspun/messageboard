import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';
import {Message} from '../message';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WebService {
  messageChanged  = new Subject<Message>();

  // BASE_URL = 'http://localhost:5000/api/v1';
  BASE_URL = 'https://still-refuge-91726.herokuapp.com/api/v1';

  constructor(private http: HttpClient) { }

  getMessages1(): Observable<any> {
    const messages = [
      {'owner': 'Steven', 'text': 'I am looking for ...'},
      {'owner': 'Evan', 'text': 'Hello'},
      {'owner': 'John', 'text': 'Hi!'},
      {'owner': 'Evan', 'text': 'Now is testing'}];

    return of(messages);
  }

  getMessages(user?: string): Observable<any> {
    user = (user) ? '/' + user : '';
    return this.http.get(this.BASE_URL + `/messages${user}`);
  }

  saveMessage(message: Message): Observable<Message> {
    let result;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    // result = this.http.post<Message>(`${this.BASE_URL}/messages`, JSON.stringify(message), httpOptions);
    result = this.http.post<Message>(`${this.BASE_URL}/messages`, message, httpOptions);

    this.messageChanged.next(message);
    return result;
  }
}

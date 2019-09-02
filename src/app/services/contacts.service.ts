import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Contact } from './model/contacts';




@Injectable({
  providedIn: 'root'
})

export class ContactsService {

  private apiUrl = "api/contacts";
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getContacts (): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl)
      .pipe(
        tap(data => console.log('fetched contacts' + data)),
        catchError(this.handleError)
      );
  }
  
  getContact(id: number): Observable<Contact> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.get<Contact>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError)
    );
  }
  
  addContact (contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact, this.httpOptions).pipe(
      tap((contact: Contact) => console.log(`added contact w/ id=${contact.id}`)),
      catchError(this.handleError)
    );
  }
  
  updateContact (id, contact): Observable<Contact> {
    const url = `${this.apiUrl}/${id}`;
    
    return this.http.post<Contact>(url, contact, this.httpOptions).pipe(
      tap(_ => console.log(`updated contact id=${id}`)),
      catchError(this.handleError)
    );
  }
  
  deleteContact (id): Observable<Contact> {
    const url = `${this.apiUrl}/${id}`;
    debugger
  
    return this.http.delete<Contact>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted contact id=${id}`)),
      catchError(this.handleError)
    );
  }
}

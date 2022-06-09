import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { userData } from '../models/user-data';
import { history } from '../models/history';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private serverUrl: string = `http://localhost:3000`;

  constructor(private http: HttpClient) {}
  // ? Get All Data
  public getAllUsers(): Observable<userData[]> {
    let dataUrl = `${this.serverUrl}/users/list`;
    return this.http
      .get<userData[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  // ? Get Data By Id
  public getUserById(id: string): Observable<userData> {
    let dataUrl = `${this.serverUrl}/users/detail/${id}`;
    return this.http.get<userData>(dataUrl).pipe(catchError(this.handleError));
  }

  // ? Add Data
  public addUser(user: userData): Observable<userData> {
    let data: string = this.serverUrl + `/users/register`;
    return this.http
      .post<userData>(data, user)
      .pipe(catchError(this.handleError));
  }

  // ? Update Data
  public updateUser(user: userData, id: string): Observable<userData> {
    let data: string = this.serverUrl + `/users/update/${id}`;
    return this.http
      .put<userData>(data, user)
      .pipe(catchError(this.handleError));
  }

  // ? Delete Data
  public deleteUser(id: string): Observable<{}> {
    let data: string = this.serverUrl + `/users/delete/${id}`;

    return this.http.delete<{}>(data).pipe(catchError(this.handleError));
  }

  // ? Get Histories
  public getHistories(): Observable<history[]> {
    let dataUrl = `${this.serverUrl}/users/histories`;
    return this.http.get<history[]>(dataUrl).pipe(catchError(this.handleError));
  }

  // ? Error Handling
  public handleError(error: HttpErrorResponse) {
    let errorMassage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMassage = `Error: ${error.error.message}`;
    } else {
      errorMassage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMassage);
  }
}

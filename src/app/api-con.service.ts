import { Injectable } from '@angular/core'
import { Observable, of, throwError } from 'rxjs'

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http'

import { User } from './user.model'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}

const apiUrl = 'http://localhost:3000/api'

@Injectable({
  providedIn: 'root',
})

export class ApiConService {
  constructor(private http: HttpClient) {

  }
  addUser(user: User): Observable<User> {
    return this.http
      .post<User>(apiUrl + "/User/registration", user, httpOptions)

  }

  getUser(): Observable<User> {
    return this.http.get<User>(apiUrl + "/User/login")
  }

}

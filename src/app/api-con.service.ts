import { Injectable } from '@angular/core'
import { Observable, of, throwError } from 'rxjs'

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http'

import { catchError, tap, map } from 'rxjs/operators'
import { User } from './user.model'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}

const apiUrl = 'http://localhost:3000/api/registration/NewUser'

@Injectable({
  providedIn: 'root',
})

export class ApiConService {
  constructor(private http: HttpClient) {

  }
  addUser(user: User) {
    return this.http
      .post<User>(apiUrl, user).subscribe(Response => console.log(Response));

  }
}

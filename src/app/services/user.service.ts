import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { User } from '../models/UserModel';
import {environment} from '../../environments/environment';

import { auth_response } from '../models/auth.response';
@Injectable({
  providedIn: 'root'
})
export class UserService {


// Node/Express API
// REST_API: string = 'http://localhost:3000/api';
private _loadProfileUrl = `${environment.api_url}/users/loadprofile`;
private _loadeditprofileUrl = `${environment.api_url}/users/loadeditprofile`;


// Http Header
httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  //getProfile
  loadProfile(user: any) {
     return this.http.get<any>(this._loadProfileUrl , user)

   }
   //updateProfile
   loadeditprofile(user: any) {
    return this.http.put<any>(this._loadeditprofileUrl , user)

  }

//   // Add User
// create(data: User): Observable<any> {
//   let API_URL = `${this.REST_API} /`;
//   return this.http.post(API_URL, data)
//     .pipe(
//       catchError(this.handleError)
//     )
// }

// //find user details
// getById(data: User): Observable<any> {
//   let API_URL = `${this.REST_API}/:userId`;
//   return this.http.get(API_URL, { headers: this.httpHeaders })
//     .pipe(
//       catchError(this.handleError)
//     )
// }
// // Update User
// update(id:any, data: User): Observable<any> {
//   let API_URL = `${this.REST_API}/update_user/${id}`;
//   return this.http.put(API_URL, data, { headers: this.httpHeaders })
//     .pipe(
//       catchError(this.handleError)
//     )
// }

// // Delete
// delete(id:any ,data: User): Observable<any> {
//   let API_URL = `${this.REST_API}/delete_user/${id}`;
//   return this.http.delete(API_URL, { headers: this.httpHeaders}).pipe(
//       catchError(this.handleError)
//     )
// }
// // Error (handle declaration)
// handleError(error: HttpErrorResponse) {
//   let errorMessage = '';
//   if (error.error instanceof ErrorEvent) {
//     // Handle client error
//     errorMessage = error.error.message;
//   } else {
//     // Handle server error
//     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//   }
//   console.log(errorMessage);
//   return throwError(errorMessage);
// }



}

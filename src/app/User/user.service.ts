import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { JSONResponse } from '../JsonResponse';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:54992/User/";

  list(): Observable<JSONResponse> {
    return this.http.get(this.url+"List") as Observable <JSONResponse>
  }
  get(id: number): Observable<JSONResponse> {
    return this.http.get(this.url+"Get/"+id) as Observable<JSONResponse>
  }
  create(user: User): Observable<JSONResponse> {
    return this.http.post(this.url+"Create", user) as Observable<JSONResponse>;
  }
  change(user: User): Observable<JSONResponse> {
    return this.http.post(this.url+"Change", user) as Observable<JSONResponse>;
  }
  remove(user: User): Observable<JSONResponse> {
    return this.http.post(this.url+"Remove", user) as Observable<JSONResponse>;
  }
  
  constructor(private http: HttpClient) { }
}

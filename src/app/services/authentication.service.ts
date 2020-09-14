import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_AUTH_URL = "https://immense-citadel-91115.herokuapp.com/api/Users/login";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }
  login(credantials): Observable<any> {
    return this.http.post(API_AUTH_URL, credantials);
  }
}

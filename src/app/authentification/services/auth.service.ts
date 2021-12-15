import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getToken(): any {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/api/auth/signin`;
    const data = this.http.post<any>( url, { email, password }, this.httpOptions)
    .pipe( map( (result: any ) => {
      return result
    }));
    return data;
  }

  signUp(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/register`;
    return this.http.post<any>(url, { email, password });
  }
}

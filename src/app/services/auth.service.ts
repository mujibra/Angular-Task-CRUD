import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  serverUrl = `http://localhost:3000/users/login`;
  constructor(private http: HttpClient) {}

  proceedLogin(usercred: any) {
    return this.http.post(this.serverUrl, usercred);
  }
  isLogin() {
    return !!localStorage.getItem('access_token');
  }
}

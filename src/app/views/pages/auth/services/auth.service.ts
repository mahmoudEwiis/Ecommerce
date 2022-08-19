import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from './localstorage.service';
environment.api
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private _token: LocalstorageService,
    private router: Router
  ) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.api}v1/auth/login`, { email, password });
  }

  register(name: string, email: string, password: string): Observable<any> {
    let avatar = 'https://api.escuelajs.co/api/v1/files/8483.jpg'
    return this.http.post<any>(`${environment.api}v1/users/`, { name, email, password, avatar });
  }

  loggedIn() {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));
      if (Math.floor(new Date().getTime() / 1000) >= tokenDecode.exp) {
        return false;
      }
      else {
        return true;
      }
    }
    return false;
  }

  logout() {
    this._token.removeToken();
    this.router.navigate(['/auth']);
  }
}

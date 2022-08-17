import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
environment.api
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    // private token: LocalstorageService,
    private router: Router
  ) { }
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.api}v1/auth/login`, { email, password });
  }
  logout() {
    // this.token.removeToken();
    this.router.navigate(['/login']);
  }
}

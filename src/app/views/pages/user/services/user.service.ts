import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalstorageService } from '../../auth/services/localstorage.service';

LocalstorageService
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private _http: HttpClient,
    private _localstorageService: LocalstorageService,
  ) { }

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': "Bearer " + this._localstorageService.getToken()
  //   })
  // };

  getUser(): Observable<any> {
    return this._http.get<any>(`${environment.api}v1/auth/profile`);
  }
  /*
    ----------------------------
    ===== Api Not Work =========
    ----------------------------
  */ 
  // updateUser(user: any): Observable<any> {
  //   return this._http.put<any>(`${environment.api}/v1/users/1`, user);
  // }
}

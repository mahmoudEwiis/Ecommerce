import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const TOKEN = 'jwtToken';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  token$: BehaviorSubject<any> = new BehaviorSubject(this.getToken());

  constructor() { }
  setToken(data: any) {
    localStorage.setItem(TOKEN, data);
  }

  getToken(): string {
    return localStorage.getItem(TOKEN)!;
  }

  removeToken() {
    localStorage.removeItem(TOKEN);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }
  getProduct(number:number): Observable<any> {
    return this._HttpClient.get<any>(`${environment.api}v1/products?offset=${number}&limit=20`)
  }
  getSingleProduct(id:number): Observable<any> {
    return this._HttpClient.get<any>(`${environment.api}v1/products/${id}`)
  }
}

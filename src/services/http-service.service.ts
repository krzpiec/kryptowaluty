
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getItemById(id: any)
  {
    return this.http.get<any>('https://api.coincap.io/v2/assets/bitcoin');
  }

  getPosts(): Observable<any> {
    return this.http.get<any>('https://api.coincap.io/v2/assets');
  }


}

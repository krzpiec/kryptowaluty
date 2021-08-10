
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }
  path:string = "https://api.coincap.io/v2/assets/";


  getMarketPlace(id:any){
    this.path = "https://api.coincap.io/v2/assets/";
    this.path += id;
    this.path += "/markets"
    return this.http.get<any>(this.path);
  }
  getItemById(id: any)
  {
    this.path = "https://api.coincap.io/v2/assets/";
   this.path +=id;
    return this.http.get<any>(this.path);
  }

  getPosts(): Observable<any> {
    return this.http.get<any>('https://api.coincap.io/v2/assets');
  }


}

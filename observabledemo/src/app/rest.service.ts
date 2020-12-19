import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }


  getDetails(){
    return this.httpClient.get('http://jsonplaceholder.typicode.com/albums');
  }

}

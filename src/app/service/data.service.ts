import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
var url='http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getAllPerson()
  {
    return this.http.get(url+'news');
  }
}

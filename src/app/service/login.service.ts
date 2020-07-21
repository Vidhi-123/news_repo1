import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
private user='http://localhost:3000/user/';
  constructor(private _http:HttpClient) { }
  getUserByEmailId(item){
  let body=JSON.stringify(item);
  let head1=new HttpHeaders().set('Content-Type','application/json')
  return this._http.post(this.user,body,{headers:head1});
}
}

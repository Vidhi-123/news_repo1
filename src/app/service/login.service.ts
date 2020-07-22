import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
private user='http://localhost:3000/user/';
  constructor(private _http:HttpClient) { }
  getUserByEmailId(email_id){
  
  return this._http.get(this.user+email_id);
}
add_user(item)
{
  let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.user,body,{headers:head1});
}
}

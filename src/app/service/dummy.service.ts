import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private _http:HttpClient) { }
  private url="http://localhost:3000/news";

  getAllBatches()
  {
    return this._http.get(this.url);
  }
}

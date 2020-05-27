import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CountryService {
 apikey = '27e479dc85bd4901b77fa0ac80c7446a';
  constructor(private http: HttpClient) { }
  getAustralia(){
     return this.http.get('/v2/top-headlines?country=au&apiKey='+this.apikey);
  }
  
  getAmerica(){
     return this.http.get('/v2/top-headlines?country=us&apiKey='+this.apikey);
  }
  
  getJapan(){
     return this.http.get('/v2/top-headlines?country=jp&apiKey='+this.apikey);
  }
  
  getChina(){
     return this.http.get('/v2/top-headlines?country=cn&apiKey='+this.apikey);
  }
  getCanada(){
     return this.http.get('/v2/top-headlines?country=ca&apiKey='+this.apikey);
  }
  getNewzealand(){
     return this.http.get('/v2/top-headlines?country=nz&apiKey='+this.apikey);
  }
  getRussia(){
     return this.http.get('/v2/top-headlines?country=ru&apiKey='+this.apikey);
  }
  getFrance(){
     return this.http.get('/v2/top-headlines?country=fr&apiKey='+this.apikey);
  }
  getMalaysia(){
     return this.http.get('/v2/top-headlines?country=my&apiKey='+this.apikey);
  }



}

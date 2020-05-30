import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SourceService {
  apikey = '27e479dc85bd4901b77fa0ac80c7446a';
  //another api key : - 8ec24b1c0bf64ac7817a3da65e708916
  constructor(private http: HttpClient) { }
  getTopnewsByAbcnews(){
    return this.http.get('/v2/top-headlines?sources=abc-news&apiKey='+this.apikey);
  }
  getTopnewsByBbcnews(){
    return this.http.get('/v2/top-headlines?sources=bbc-news&apiKey='+this.apikey);
  }
  getTopnewsByBuzzfeddnews(){
    return this.http.get('/v2/top-headlines?sources=buzzfeed&apiKey='+this.apikey);
  }
  getTopnewsByCnnnews(){
    return this.http.get('/v2/top-headlines?sources=cnn&apiKey='+this.apikey);
  }
  getTopnewsByEspn_cric_sport(){
    return this.http.get('/v2/top-headlines?sources=espn-cric-info&apiKey='+this.apikey);
  }
  getTopnewsByFoxnews(){
    return this.http.get('/v2/top-headlines?sources=fox-news&apiKey='+this.apikey);
  }
  getTopnewsBymtvnews(){
    return this.http.get('/v2/top-headlines?sources=mtv-news&apiKey='+this.apikey);
  }
  getTopnewsByNbcnews(){
    return this.http.get('/v2/top-headlines?sources=nbc-news&apiKey='+this.apikey);
  }
  getTopnewsByNews24(){
    return this.http.get('/v2/top-headlines?sources=news24&apiKey='+this.apikey);
  }
}

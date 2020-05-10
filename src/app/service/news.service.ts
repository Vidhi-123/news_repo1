import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apikey = 'b034181ec0f14633803427242ca73005';
  constructor(private http: HttpClient  ) { }
  getGeneralArticles(){
    // return this.http.get('http://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey='+this.apikey);
     return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.apikey);
  }
  getArticleByBusiness()
  {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.apikey+'&category=business');
  }
  getArticleByentertainment()
  {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.apikey+'&category=entertainment');
  }
  getArticleByHealth()
  {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.apikey+'&category=health');
  }
  getArticleByScience()
  {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.apikey+'&category=science');
  }
  getArticleBySports()
  {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.apikey+'&category=sports');
  }
  getArticleByTechnology()
  {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.apikey+'&category=technology');
  }
  getArticlesById(source: string){
    return this.http.get('http://newsapi.org/v2/top-headlines?sources'+ source+'&apiKey='+this.apikey);
  }
}


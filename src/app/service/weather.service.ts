import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import {Pipe} from '@angular/core';
@Pipe({name: 'round'})
export class RoundPipe {
  transform (input:number) {
    return Math.floor(input);
  }
}
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apikey = '7e0bb977f9a5e9d6e76c14a70c74dac2';
  constructor(private http: HttpClient ) { }
  getInfo()
  {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=vadodara&appid='+this.apikey);
  }
}

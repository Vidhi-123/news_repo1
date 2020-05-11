import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import dateFormat from 'dateFormat';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  info:Object;
  now =new Date();
  time:String;
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.weatherService.getInfo().subscribe(data => this.info=data);
    this.time=this.now.getHours()+":"+this.now.getMinutes();
  }

}

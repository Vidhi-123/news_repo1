import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
declare var require: any
const VanillaTilt = require('vanilla-tilt');


@Component({
  selector: 'app-design-for-news',
  templateUrl: './design-for-news.component.html',
  styleUrls: ['./design-for-news.component.css']
})
export class DesignForNewsComponent implements OnInit {

  constructor(private data:DataService) { }
  product:any[]=[];
  ngOnInit() {
    this.data.getAllPerson().subscribe(
      (data:any)=>{
        this.product=data;
        console.log(this.product);
      }
    );
    VanillaTilt.init(document.querySelectorAll(".box"), {
      max: 25,
      speed: 400
    });

  }

}

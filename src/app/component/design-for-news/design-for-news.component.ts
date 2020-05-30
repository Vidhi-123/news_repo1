import { Component, OnInit } from '@angular/core';
declare var require: any
const VanillaTilt = require('vanilla-tilt');


@Component({
  selector: 'app-design-for-news',
  templateUrl: './design-for-news.component.html',
  styleUrls: ['./design-for-news.component.css']
})
export class DesignForNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    VanillaTilt.init(document.querySelectorAll(".box"), {
      max: 25,
      speed: 400
    });

  }

}

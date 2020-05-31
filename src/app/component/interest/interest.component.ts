import { Component, OnInit } from '@angular/core';
declare var require: any
const VanillaTilt = require('vanilla-tilt');

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    VanillaTilt.init(document.querySelectorAll(".box"), {
      max: 25,
      speed: 400
    });
  
  }

}

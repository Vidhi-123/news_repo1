import { Component, OnInit } from '@angular/core';
declare var require: any
const VanillaTilt = require('vanilla-tilt');
@Component({
  selector: 'app-countrycat',
  templateUrl: './countrycat.component.html',
  styleUrls: ['./countrycat.component.css']
})
export class CountrycatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    VanillaTilt.init(document.querySelectorAll(".box"), {
      max: 25,
      speed: 400
    });
  }

}

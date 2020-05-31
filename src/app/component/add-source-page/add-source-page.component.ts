import { Component, OnInit } from '@angular/core';
declare var require: any
const VanillaTilt = require('vanilla-tilt');

@Component({
  selector: 'app-add-source-page',
  templateUrl: './add-source-page.component.html',
  styleUrls: ['./add-source-page.component.css']
})
export class AddSourcePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    VanillaTilt.init(document.querySelectorAll(".box"), {
      max: 25,
      speed: 400
    });
 
  }

}

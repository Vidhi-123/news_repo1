import { Component, OnInit } from '@angular/core';
import { AOS } from "aos";
@Component({
  selector: 'app-design-for-news',
  templateUrl: './design-for-news.component.html',
  styleUrls: ['./design-for-news.component.css']
})
export class DesignForNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}

import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sports: Array<any>;
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getArticleBySports().subscribe(data => this.sports=data['articles']);
  }

}

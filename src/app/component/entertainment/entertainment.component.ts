import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  entertainment: Array<any>;
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getArticleByentertainment().subscribe(data => this.entertainment=data['articles']);
  }

}

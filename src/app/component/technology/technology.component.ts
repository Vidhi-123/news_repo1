import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technology: Array<any>;
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getArticleByTechnology().subscribe(data => this.technology=data['articles']);
  }

}

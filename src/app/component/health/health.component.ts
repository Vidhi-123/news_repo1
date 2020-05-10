import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  health: Array<any>;
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getArticleByHealth().subscribe(data => this.health=data['articles']);
  }

}

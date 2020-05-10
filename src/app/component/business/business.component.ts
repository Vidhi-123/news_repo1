import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  business: Array<any>;
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getArticleByBusiness().subscribe(data => this.business=data['articles']);
  }

}

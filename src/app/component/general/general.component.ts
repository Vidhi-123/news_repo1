import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  general: Array<any>;
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getGeneralArticles().subscribe(data => this.general=data['articles']);
  }

}

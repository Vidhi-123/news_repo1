import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  science: Array<any>=[];
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getArticleByScience().subscribe((data:any) =>{ 

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150 )
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.science.push(data.articles[i]);
        }
        else
        this.science.push(data.articles[i]);
      }
    }

    });
  }

}

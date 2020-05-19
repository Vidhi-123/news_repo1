import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sports: Array<any>=[];
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getArticleBySports().subscribe((data:any) =>{ 

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150 )
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.sports.push(data.articles[i]);
        }
        else
        this.sports.push(data.articles[i]);
      }
    }

    });
  }

}

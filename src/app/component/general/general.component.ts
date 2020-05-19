import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  general: Array<any>=[];
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getGeneralArticles().subscribe((data:any) =>{ 

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.general.push(data.articles[i]);
        }
        else
        this.general.push(data.articles[i]);
      }
    }

    });
   
  }

}

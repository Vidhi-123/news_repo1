import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  item:string;
  yoga: Array<any>=[];
  donaldTrump: Array<any>=[];
  Psychology: Array<any>=[];
  constructor(private act_router:ActivatedRoute,private newsService:NewsService) { }

  ngOnInit() {
    this.item = this.act_router.snapshot.params["name"];
    //console.log(this.item);
    this.newsService.getArticleByYoga().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.yoga.push(data.articles[i]);
        }
      
        else
        this.yoga.push(data.articles[i]);
      }

    }
    });
    this.newsService.getArticleByTrump().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.donaldTrump.push(data.articles[i]);
        }
      
        else
        this.donaldTrump.push(data.articles[i]);
      }

    }
    });
    this.newsService.getArticleByPsychology().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.Psychology.push(data.articles[i]);
        }
      
        else
        this.Psychology.push(data.articles[i]);
      }

    }
    });
  }

}

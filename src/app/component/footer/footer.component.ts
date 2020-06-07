import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  articles: Array<any>=[];
  business:Array<any>=[];
  
constructor(private newsService:NewsService,private _router:Router) { }



ngOnInit(): void {

this.newsService.getGeneralArticles().subscribe(
    (data:any)=>{
     // console.log(data);
      
      
      
      
      //console.log(data.articles1);

      data.articles.sort(
        (a,b) => b.publishedAt.localeCompare(a.publishedAt)
      )
      
      // this.articles1.push(JSON.parse(JSON.stringify(data.articles[0])));
      



        for(let i=0;i<8;i++)
        {
      
        
          if(data.articles[i].description.length>=100 || data.articles[i].title.length>=40)
          {
            
            
            data.articles[i].title=data.articles[i].title.substr(0,40)+'...';  
            data.articles[i].description=data.articles[i].description.substr(0,100) + '...';
           // console.log(data.articles[i].description);
            this.articles.push(data.articles[i]);
          }
          else
          {
            
          this.articles.push(data.articles[i]);
          }
        
      }

        
    }
      
    
  )

 


  


  }

}

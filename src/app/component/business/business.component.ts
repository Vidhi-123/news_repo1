import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import { DummyService } from 'src/app/service/dummy.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  business: Array<any>=[];
  constructor(private newsService:NewsService,private dummySer:DummyService) { }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }


  ngOnInit() {

    this.dummySer.getAllBatches().subscribe(
      (data:any[])=>
      {
        console.log(data);
      }
    );

    this.newsService.getArticleByBusiness().subscribe((data:any) =>{ 
      console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.business.push(data.articles[i]);
        }
      
        else
        this.business.push(data.articles[i]);
      }

    }
    });
    
  }

}

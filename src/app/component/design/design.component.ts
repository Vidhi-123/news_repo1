import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  item1:string;
  news:Array<any>=[];
  yoga: Array<any>=[];
  donaldTrump: Array<any>=[];
  Psychology: Array<any>=[];
  covid:Array<any>=[];
  lifestyle:Array<any>=[];
  startups:Array<any>=[];
  science:Array<any>=[];
  politics:Array<any>=[];
  finance:Array<any>=[];
  food:Array<any>=[];
  travel:Array<any>=[];
  fashion:Array<any>=[];
  investing:Array<any>=[];
  stock:Array<any>=[];
  movies:Array<any>=[];
  constructor(private act_router:ActivatedRoute,private newsService:NewsService) { }

  ngOnInit() {
    this.item1 = this.act_router.snapshot.params["name"];
    //console.log(this.item1);
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
    
    this.newsService.getArticleByLifeStyle().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.lifestyle.push(data.articles[i]);
        }
      
        else
        this.lifestyle.push(data.articles[i]);
      }

    }
    });
    this.newsService.getArticleByPolitics().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.politics.push(data.articles[i]);
        }
      
        else
        this.politics.push(data.articles[i]);
      }

    }
    });
    this.newsService.getArticleByFood().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.food.push(data.articles[i]);
        }
      
        else
        this.food.push(data.articles[i]);
      }

    }
    });
    this.newsService.getArticleByStock().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.stock.push(data.articles[i]);
        }
      
        else
        this.stock.push(data.articles[i]);
      }

    }
    });
    this.newsService.getArticleByMovies().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.movies.push(data.articles[i]);
        }
      
        else
        this.movies.push(data.articles[i]);
      }

    }
    });
    this.newsService.getArticleByFashion().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.fashion.push(data.articles[i]);
        }
      
        else
        this.fashion.push(data.articles[i]);
      }

    }
    });
    this.newsService.getArticleByInvesting().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.investing.push(data.articles[i]);
        }
      
        else
        this.investing.push(data.articles[i]);
      }

    }
    });
    this.newsService.getArticleByTravel().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.travel.push(data.articles[i]);
        }
      
        else
        this.travel.push(data.articles[i]);
      }

    }
    });
     this.newsService.getArticleByFinance().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.finance.push(data.articles[i]);
        }
      
        else
        this.finance.push(data.articles[i]);
      }

    }
    });
    this.newsService.getArticleByStartups().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.startups.push(data.articles[i]);
        }
      
        else
        this.startups.push(data.articles[i]);
      }

    }
    });
    this.newsService.getArticleByScience().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
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
     this.newsService.getArticleByCovid().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.covid.push(data.articles[i]);
        }
      
        else
        this.covid.push(data.articles[i]);
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
    if(this.item1=='yoga')
    {
      this.news=this.yoga;
    }
    else if(this.item1=='covid')
    {
      this.news=this.covid;
    }
    else if(this.item1=='Trump')
    {
      this.news=this.donaldTrump;
    }
    else if(this.item1=='lifestyle')
    {
      this.news=this.lifestyle;
    }
    else if(this.item1=='startups')
    {
      this.news=this.startups;
    }
    else if(this.item1=='startups')
    {
      this.news=this.startups;
    }
    else if(this.item1=='Psychology')
    {
      this.news=this.Psychology;
    }
    else if(this.item1=='science')
    {
      this.news=this.science;
    }
    else if(this.item1=='politics')
    {
      this.news=this.politics;
    }
    else if(this.item1=='finance')
    {
      this.news=this.finance;
    }
    else if(this.item1=='food')
    {
      this.news=this.food;
    }
    else if(this.item1=='travel')
    {
      this.news=this.travel;
    }
    else if(this.item1=='fashion')
    {
      this.news=this.fashion;
    }
    else if(this.item1=='investing')
    {
      this.news=this.investing;
    }
    else if(this.item1=='stock')
    {
      this.news=this.stock;
    }
    else if(this.item1=='movies')
    {
      this.news=this.movies;
    }
    

    

    
  }
 

}

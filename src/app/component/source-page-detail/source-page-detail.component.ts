import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SourceService } from 'src/app/service/source.service';
@Component({
  selector: 'app-source-page-detail',
  templateUrl: './source-page-detail.component.html',
  styleUrls: ['./source-page-detail.component.css']
})
export class SourcePageDetailComponent implements OnInit {
  abcnews: Array<any>=[];
  bbcnews: Array<any>=[];
  buzzfeed: Array<any>=[];
  cnn: Array<any>=[];
  espn_cric_info: Array<any>=[];
  fox_news: Array<any>=[];
  mtv_news: Array<any>=[];
  nbc_news: Array<any>=[];
  news24: Array<any>=[];
  item:string;
  constructor(private act_router:ActivatedRoute,private sourceService:SourceService) { }

  ngOnInit() {
    this.item = this.act_router.snapshot.params["name"];
    console.log(this.item);
    this.sourceService.getTopnewsByAbcnews().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.abcnews.push(data.articles[i]);
        }
      
        else
        this.abcnews.push(data.articles[i]);
      }

    }
    });
    this.sourceService.getTopnewsByBbcnews().subscribe((data:any) =>{ 
      console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.bbcnews.push(data.articles[i]);
        }
      
        else
        this.bbcnews.push(data.articles[i]);
      }

    }
    });
    this.sourceService.getTopnewsByBuzzfeddnews().subscribe((data:any) =>{ 
      console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.buzzfeed.push(data.articles[i]);
        }
      
        else
        this.buzzfeed.push(data.articles[i]);
      }

    }
    });
    this.sourceService.getTopnewsByCnnnews().subscribe((data:any) =>{ 
      console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.cnn.push(data.articles[i]);
        }
      
        else
        this.cnn.push(data.articles[i]);
      }

    }
    });
    this.sourceService.getTopnewsByEspn_cric_sport().subscribe((data:any) =>{ 
      console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.espn_cric_info.push(data.articles[i]);
        }
      
        else
        this.espn_cric_info.push(data.articles[i]);
      }

    }
    });
    this.sourceService.getTopnewsByCnnnews().subscribe((data:any) =>{ 
      console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.cnn.push(data.articles[i]);
        }
      
        else
        this.cnn.push(data.articles[i]);
      }

    }
    });
    this.sourceService.getTopnewsByFoxnews().subscribe((data:any) =>{ 
      console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.fox_news.push(data.articles[i]);
        }
      
        else
        this.fox_news.push(data.articles[i]);
      }

    }
    });
    this.sourceService.getTopnewsByCnnnews().subscribe((data:any) =>{ 
      console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.cnn.push(data.articles[i]);
        }
      
        else
        this.cnn.push(data.articles[i]);
      }

    }
    });
    this.sourceService.getTopnewsBymtvnews().subscribe((data:any) =>{ 
      console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.mtv_news.push(data.articles[i]);
        }
      
        else
        this.mtv_news.push(data.articles[i]);
      }

    }
    });
    this.sourceService.getTopnewsByCnnnews().subscribe((data:any) =>{ 
      console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.cnn.push(data.articles[i]);
        }
      
        else
        this.cnn.push(data.articles[i]);
      }

    }
    });
    this.sourceService.getTopnewsBymtvnews().subscribe((data:any) =>{ 
      console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.mtv_news.push(data.articles[i]);
        }
      
        else
        this.mtv_news.push(data.articles[i]);
      }

    }
    });
    this.sourceService.getTopnewsByNbcnews().subscribe((data:any) =>{ 
      console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.nbc_news.push(data.articles[i]);
        }
      
        else
        this.nbc_news.push(data.articles[i]);
      }

    }
    });
    this.sourceService.getTopnewsByNews24().subscribe((data:any) =>{ 
      console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.news24.push(data.articles[i]);
        }
      
        else
        this.news24.push(data.articles[i]);
      }

    }
    });
    
  }

}

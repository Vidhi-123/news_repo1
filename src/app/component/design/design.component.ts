import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';
import { IntrestService } from 'src/app/service/intrest.service';
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
  constructor(private _ser:IntrestService,private act_router:ActivatedRoute,private newsService:NewsService) { }

  ngOnInit() {
    // this.item1 = this.act_router.snapshot.params["name"];
    let user_id=Number(localStorage.getItem('user_id'));
    //console.log(this.item1);

    this._ser.getIntrestByUserId(user_id).subscribe(
      (data:any[])=>
      {
        for(let i=0;i<data.length;i++)
        {
          if(data[i].category_name=="covid")
          {
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
                  this.news.push(data.articles[i]);
                }
              
                else
                this.news.push(data.articles[i]);
              }
        
            }
            });
          }
          else if(data[i].category_name="yoga")
          {
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
                  this.news.push(data.articles[i]);
                }
              
                else
                this.news.push(data.articles[i]);
              }
        
            }
            });
          }
          else if(data[i].category_name=="lifestyle")
          {
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
                  this.news.push(data.articles[i]);
                }
              
                else
                this.news.push(data.articles[i]);
              }
        
            }
            });
          }
          else if(data[i].category_name=="politics")
          {
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
                  this.news.push(data.articles[i]);
                }
              
                else
                this.news.push(data.articles[i]);
              }
        
            }
            });
          }
          else if(data[i].category_name=="food")
          {

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
          }
          else if(data[i].category_name=="stock market")
          {
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
                  this.news.push(data.articles[i]);
                }
              
                else
                this.news.push(data.articles[i]);
              }
        
            }
            });
          }
          else if(data[i].category_name=="movies")
          {
  
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
                  this.news.push(data.articles[i]);
                }
              
                else
                this.news.push(data.articles[i]);
              }
        
            }
            });
          
          }
          else if(data[i].category_name=="fashion")
          {

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
                  this.news.push(data.articles[i]);
                }
              
                else
                this.news.push(data.articles[i]);
              }
        
            }
            });
          }
          else if(data[i].category_name=="investment")
          {
 
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
                  this.news.push(data.articles[i]);
                }
              
                else
                this.news.push(data.articles[i]);
              }
        
            }
            });
          }
          else if(data[i].category_name=="travel")
          {
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
                  this.news.push(data.articles[i]);
                }
              
                else
                this.news.push(data.articles[i]);
              }
        
            }
            });
          }
          else if(data[i].category_name=="finance")
          {
 
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
                  this.news.push(data.articles[i]);
                }
              
                else
                this.news.push(data.articles[i]);
              }
        
            }
            });
          }
          else if(data[i].category_name=="startup")
          {

  
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
                  this.news.push(data.articles[i]);
                }
              
                else
                this.news.push(data.articles[i]);
              }
        
            }
            });
          }
          else if(data[i].category_name=="science")
          {

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
                  this.news.push(data.articles[i]);
                }
              
                else
                this.news.push(data.articles[i]);
              }
        
            }
            });
           
          }
          else if(data[i].category_name=="donald trump")
          {
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
          }
          else if(data[i].category_name=="psychology")
          {

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
      }
    );
    
  }
 

}

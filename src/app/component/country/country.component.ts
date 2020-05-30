import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/service/country.service'
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
item:string;
aus: Array<any>=[];
usa: Array<any>=[];
jap: Array<any>=[];
can: Array<any>=[];
china: Array<any>=[];
rus: Array<any>=[];
newzea: Array<any>=[];
france: Array<any>=[];
malaysia: Array<any>=[];
  constructor(private act_router:ActivatedRoute,private country:CountryService) { }

  ngOnInit() {
    this.item = this.act_router.snapshot.params["name"];
    this.country.getAustralia().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.aus.push(data.articles[i]);
        }
      
        else
        this.aus.push(data.articles[i]);
      }

    }
    });

  this.country.getAmerica().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.usa.push(data.articles[i]);
        }
      
        else
        this.usa.push(data.articles[i]);
      }

    }
    });

    this.country.getJapan().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.jap.push(data.articles[i]);
        }
      
        else
        this.jap.push(data.articles[i]);
      }

    }
    });



this.country.getCanada().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.can.push(data.articles[i]);
        }
      
        else
        this.can.push(data.articles[i]);
      }

    }
    });



    this.country.getChina().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.china.push(data.articles[i]);
        }
      
        else
        this.china.push(data.articles[i]);
      }

    }
    });



    this.country.getNewzealand().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.newzea.push(data.articles[i]);
        }
      
        else
        this.newzea.push(data.articles[i]);
      }

    }
    });


     this.country.getRussia().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.rus.push(data.articles[i]);
        }
      
        else
        this.rus.push(data.articles[i]);
      }

    }
    });



     this.country.getFrance().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.france.push(data.articles[i]);
        }
      
        else
        this.france.push(data.articles[i]);
      }

    }
    });

   this.country.getMalaysia().subscribe((data:any) =>{ 
      //console.log(data);

      for(let i=0;i<data.articles.length;i++)
      {
        if(data.articles[i].description!=null)
        {
        
        if(data.articles[i].description.length>=150)
        {
          data.articles[i].description=data.articles[i].description.substr(0,150) + '...';
          console.log(data.articles[i].description);
          this.malaysia.push(data.articles[i]);
        }
      
        else
        this.malaysia.push(data.articles[i]);
      }

    }
    });













  }

}

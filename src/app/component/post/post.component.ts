import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
obj:any;
  item:string;
  constructor(private act_router:ActivatedRoute,private newsSer:NewsService) { }

  ngOnInit() {
    this.item = this.act_router.snapshot.params["itemName"];
    console.log(this.item);
    this.obj=JSON.parse(this.item);
    console.log(this.obj);
    
  }

}

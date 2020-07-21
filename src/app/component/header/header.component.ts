import { Component, OnInit } from '@angular/core';
import { IntrestService } from 'src/app/service/intrest.service';
import { Router } from '@angular/router';
import { user } from '../login/user';
import { global } from '../global';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [global]
})
export class HeaderComponent implements OnInit {

  flag:boolean=true;

  constructor(private _ser:IntrestService,private _router:Router,private _global:global) { }


  onClickDrp(){
	document.getElementById('drp').classList.add('active');
	document.getElementById('in').classList.remove('active');
  document.getElementById('de').classList.remove('active');
	  document.getElementById('ho').classList.remove('active');
  }

  onClickde()
  {
    document.getElementById('drp').classList.remove('active');
	document.getElementById('in').classList.remove('active');
  document.getElementById('de').classList.add('active');
	  document.getElementById('ho').classList.remove('active');
  }


  onClickHo(){
	document.getElementById('ho').classList.add('active');
	document.getElementById('in').classList.remove('active');
	document.getElementById('de').classList.remove('active');
	  document.getElementById('drp').classList.remove('active');
  }
  onClickIn()
  {
	  document.getElementById('in').classList.add('active');
    document.getElementById('de').classList.remove('active');
	  document.getElementById('ho').classList.remove('active');
	  document.getElementById('drp').classList.remove('active');
  }
  
  onLogOut()
  {
    
    localStorage.clear();
    let user_id=localStorage.getItem('user_id');
    console.log(user_id);
    this._global.header_flag=false;
    this._router.navigate(['']);
  }

  

  ngOnInit() {
  
    let user_id=localStorage.getItem('user_id');
    console.log(user_id);
    
    if(user_id!=null)
    {
      this._ser.getIntrestByUserId(user_id).subscribe(
        (data:any[])=>
        {
          console.log(data);
          if(data.length>0)
          {
            this._global.header_flag=true;
    
          }
          
        }
      );
    }
    else
    {
      this._global.header_flag=false;
    }
    
  }

}

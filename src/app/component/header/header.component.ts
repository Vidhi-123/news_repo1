import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor() { }


  onClickDrp(){
	document.getElementById('drp').classList.add('active');
	document.getElementById('in').classList.remove('active');
	 
	  document.getElementById('ho').classList.remove('active');
  }




  onClickHo(){
	document.getElementById('ho').classList.add('active');
	document.getElementById('in').classList.remove('active');
	
	  document.getElementById('drp').classList.remove('active');
  }
  onClickIn()
  {
	  document.getElementById('in').classList.add('active');
	
	  document.getElementById('ho').classList.remove('active');
	  document.getElementById('drp').classList.remove('active');
  }
  
  

  ngOnInit() {
	
  }

}

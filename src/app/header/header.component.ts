import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   email:any;
   active=false;
  constructor( private serverService:ServerService) { }

  ngOnInit() {
    this.email=localStorage.getItem('email');
  }
  
  loggout()
  {
    this.serverService.loggout();
  }
   activate()
   {
     this.active=true;
   }
}

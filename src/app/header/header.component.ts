import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   email:any;
   tk:any;
   active=false;
   firstName:any;
   lastName:any;
  constructor( private serverService:ServerService) { }

  ngOnInit() {
    this.email=localStorage.getItem('email');
    this.serverService.getprofileitem()
    .subscribe(
      response =>{
        this.tk=response;
        console.log(this.tk)
        this.firstName=this.tk.firstName;
        this.lastName=this.tk.lastName;
   
      }
    )
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

import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
 constructor(private serverService: ServerService
  ,    private router:Router){}


  canActivate():boolean{
    if(this.serverService.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/login'])
      return false;
    }
  }
  }
  


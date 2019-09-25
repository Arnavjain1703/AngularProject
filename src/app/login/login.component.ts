import { Component, OnInit } from '@angular/core';
import { FormGroup,  NgForm } from '@angular/forms';
import { ServerService } from '../server.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
show=false;
admiShow=false;
tk:any;
  constructor(private serverService:ServerService) { }

  ngOnInit() {
    
}

adminShow()
{
this.admiShow=true;
this.show=false
}
userShow()
{
this.show=true;
this.admiShow=false;
}

onSubmit(form:NgForm)
{
 const value = form.value;
 const email = form.value.email;
 console.log(email); 
 localStorage.setItem('email',email);
  console.log(JSON.stringify(form.value));
  this.serverService.login(value.email,value.password)
  .subscribe(
    (response) =>
    {   this.tk=response
       console.log(this.tk.userId);  
        const userId =this.tk.userId;
        const role =this.tk.role;
        localStorage.setItem('userId',userId); 
        localStorage.setItem('role',role)
        const token = this.tk.token;
       console.log(token);
       localStorage.setItem('token',token);

    }                                                
       
  );
  

  
}

}

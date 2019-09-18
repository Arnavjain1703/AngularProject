import { Component, OnInit } from '@angular/core';
import { FormGroup,  NgForm } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
show=false;
admiShow=false;
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
  console.log(JSON.stringify(form.value));
  this.serverService. login(value.email,value.password,value.admin)
  .subscribe(
    (response) => console.log(response),
    (error) => console.log(error),
)
  
}

}

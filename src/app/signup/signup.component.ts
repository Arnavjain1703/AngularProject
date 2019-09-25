import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  display=false;

  constructor(private serverService:ServerService) { }


  ngOnInit() {
  }
onSubmit(form:NgForm)
{

this.display=true;
  const value = form.value;
  console.log(JSON.stringify(form.value));
  this.serverService. signUp(value.firstName,value.lastName,value.email,value.password,value.admin,value.confirmPassword)
  .subscribe(
    (response) =>
    {
      console.log(response)
    },
    (error) => console.log(error)
  
  )

form.reset();
  
}
}

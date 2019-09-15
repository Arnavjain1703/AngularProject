import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
onSubmit(form:NgForm)
{
  const email=form.value.email;
  const firstName=form.value.first-name;
  const lastName=form.value.last-name;
  const password=form.value.password;
}
OnSubmit(form:NgForm)
{
  const Email=form.value.Email;
  const FirstName=form.value.First-name;
  const LastName=form.value.Last-name;
  const Password=form.value.Password;
}
}

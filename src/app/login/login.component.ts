import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { hostViewClassName } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm1:FormGroup;
loginForm2:FormGroup;
  constructor() { }

  ngOnInit() {
    let userName="";
    let userMail="";
    let userPassword="";
    let adminName="";
    let adminPassword="";
    let adminMail="";
    this.loginForm1=new FormGroup({
    'name':new FormControl(userName,Validators.required),
    'Email':new FormControl(userMail,Validators.required),
     'password':new FormControl(userPassword,Validators.required),

    });
    this.loginForm2=new FormGroup({
      'Name':new FormControl(adminName,Validators.required),
      'email':new FormControl(adminMail,Validators.required),
       'Password':new FormControl(adminPassword,Validators.required)
    });
  }
}



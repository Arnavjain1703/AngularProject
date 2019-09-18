import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
 @Injectable()
export class  ServerService
{
  constructor(private http :HttpClient){}
  signUp(firstName:string,lastName:string,email:string,password:string,admin:string)
  {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    console.log(JSON.stringify({firstName,lastName,email,password,admin}));
    return  this.http.post('http://10.10.151.253:8080/user/signUp',JSON.stringify({firstName,lastName,email,password,admin}),
    {headers:headers});
  }

  login(email:string ,password:string,admin:string)
  {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    console.log(JSON.stringify({email,password,admin}));
    return  this.http.post('http://10.10.151.253:8080/user/login',JSON.stringify({email,password,admin}),
    {headers:headers});
  }
}
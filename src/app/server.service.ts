import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CourseUserService } from './courseuser.service';
import { CourseService } from './course.service';
import { CourseUser } from './shared/courseuser.module';
import { UserCartService } from './usercart.service';
 @Injectable()
export class  ServerService
{  body:{}; 
  tk:any;
  courses:CourseUser[]
  private rootUrl="http://10.10.151.253:8080"
  
  constructor(private http :HttpClient,
              private courseuserService:CourseUserService,
              private userCartService:UserCartService
    ){}
  signUp(firstName:string,lastName:string,email:string,password:string ,admin:string,confirmPassword:string)
  {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    console.log(JSON.stringify({firstName,lastName,email,password,admin,}));
    return  this.http.post(this.rootUrl+'/user/signUp',JSON.stringify({firstName,lastName,email,password,confirmPassword,admin}),
    {headers:headers});
  }

  login(email:string ,password:string)
  { 
    const headers = new HttpHeaders({'Content-Type':'application/json',});
    console.log(JSON.stringify({email,password}));
    return  this.http.post(this.rootUrl+'/user/login',JSON.stringify({email,password}),
    {headers:headers});
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  loggout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('userId')
  }
  getallCourses()
  {
    return this.http.get(this.rootUrl+'/home')
    .subscribe(
      response=>
      {  
        
        this.tk=response;
        this.courses=this.tk;
        console.log(this.courses);
    
        this.courseuserService.setCourses(this.courses);
      }
       

    )
  }

  getUserCart()
  {
     const token =localStorage.getItem('token')
             console.log(localStorage.getItem('token'))
     const headers =new HttpHeaders(
       {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token,
       });
       return  this.http.get(this.rootUrl+'/cart/view',{headers:headers})
        .subscribe(
          response=>
          {
            console.log(response)
            this.tk=response;
            this.courses=this.tk;
            console.log(this.courses);
            this.userCartService.setCourses(this.courses);
          }
        );
  
       }
     
  
  cartDelete(courseId:number)
  {
    const token =localStorage.getItem('token')
    console.log(token);
    const headers = new HttpHeaders(
      {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token,
      }
    );
    return this.http.post(this.rootUrl+'/cart/removeCourses/'+courseId,this.body,{headers:headers})
    .subscribe(
      response =>
      {
        console.log(response);
      }
    )
  }
   
  userCart(courseId:number)
  {
    const token= localStorage.getItem('token')
    console.log(typeof(token))
    const headers = new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Authorization': 'Bearer ' + token
    });
       console.log({headers:headers});
       return this.http.post(this.rootUrl+'/cart/addCourse/'+courseId,this.body,{headers: headers})
      .subscribe(
        res=>
        {
          console.log(res);
        },
        err=>
        {
          console.log(err);   
        }

      );
  
  }
}
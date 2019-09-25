import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CourseUserService } from './courseuser.service';
import { CourseService } from './course.service';
import { CourseUser } from './shared/courseuser.module';
 @Injectable()
export class  ServerService
{   
  tk:any;
  courses:CourseUser[]
  private rootUrl="http://10.10.151.253:8080"
  
  constructor(private http :HttpClient,
              private courseuserService:CourseUserService,
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
     
  }
    
   
  userCart(courseId:number)
  {
    const token= localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':token,
    })
      console.log(this.rootUrl+'/cart/addCourse'+'/'+courseId);
      return this.http.post(this.rootUrl+'/cart/addCourse/'+courseId,{headers:headers});
  
  }
}
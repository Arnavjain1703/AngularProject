import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CourseUserService } from './courseuser.service';
import { CourseService } from './course.service';
import { CourseUser } from './shared/courseuser.module';
import { UserCartService } from './usercart.service';
import { MyCourseService } from './mycourse.sercice';
 @Injectable()
export class  ServerService
{  body:{}; 
  tk:any;
  courses:CourseUser[]
  private rootUrl="https://b54338ee.ngrok.io"
  
  
  constructor(private http :HttpClient,
              private courseuserService:CourseUserService,
              private userCartService:UserCartService,
              private myCourseService:MyCourseService,
              private courseService:CourseService,
    ){}
  // signUp(firstName:string,lastName:string,email:string,password:string ,admin:string,confirmPassword:string)
  // {
  //   const headers = new HttpHeaders({'Content-Type':'application/json'});
  //   console.log(JSON.stringify({firstName,lastName,email,password,admin,}));
  //   return  this.http.post(this.rootUrl+'/user/signUp',JSON.stringify({firstName,lastName,email,password,confirmPassword,admin}),
  //   {headers:headers});
  // }

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
       console.log(headers);
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


     getMyCoursesUser()
     {
       const token =localStorage.getItem('token')
         const headers=new HttpHeaders(
           {
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + token,
           }
         );
         return this.http.get(this.rootUrl+'/myCourse/view',{headers:headers})
         .subscribe(
                    response=>{
             console.log(response)
               this.tk=response;
               this.courses=this.tk
               this.myCourseService.setCourses(this.courses);
             
                    }
         )
     }

     getadminCourse()
     {
      const token =localStorage.getItem('token')
      const headers=new HttpHeaders(
        {
         'Content-Type':'application/json',
         'Authorization': 'Bearer ' + token,
        }
      );
      return this.http.get(this.rootUrl+'/course/uploadedByMe',{headers:headers})
      .subscribe(
        response =>{
          this.tk=response;
          this.courses=this.tk;
          this.courseService.setCourses(this.courses);
        }
      )

     }
  
  cartDelete(courseId:number)
  {
    const token =localStorage.getItem('token')
    console.log(courseId);
    const headers = new HttpHeaders(
      {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token,
      }
    );
    return this.http.post(this.rootUrl+'/cart/removeCourse/'+courseId,this.body,{headers:headers})
    .subscribe(
      (response) =>
      {
        console.log(response);
      },
      (error)=>
      {
          console.log(error.error.text)
          alert(error.error.text)
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
         (response)=>
         {
           console.log(response)
         },
         (error) => {
          alert(error.error.text);
         }

      );
  
  }

  

  userCourse(courseId:number)
  {
    const token= localStorage.getItem('token')
    console.log(typeof(token))
    const headers = new HttpHeaders({
      'Content-Type':'application/json;charset=UTF-8',
      'Authorization': 'Bearer ' + token
    });
       console.log({headers:headers});
       return this.http.post(this.rootUrl+'/myCourse/purchase/'+courseId,this.body,{headers: headers})
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
  addcourses(courseName:string,category:string,courseDetail:string,imageUrl:string,courseUrl:string,price:number)
  {    
       const token=localStorage.getItem('token')
       const headers=new HttpHeaders(
         
      {
        'Content-Type':'application/json;charset=UTF-8',
        'Authorization': 'Bearer ' + token
      }
      )
       return this.http.post(this.rootUrl+'/course/upload',JSON.stringify({courseName,category,courseDetail,imageUrl,courseUrl,price}),{headers:headers})
       .subscribe
       (
         response=>
         {
           console.log(response);
         }
       )
  }
    updateCourse(courseName:string,category:string,courseDetail:string,imageUrl:string,courseUrl:string,price:number,courseId:number)
    {
      const token=localStorage.getItem('token')
      const headers=new HttpHeaders(
        
     {
       'Content-Type':'application/json;charset=UTF-8',
       'Authorization': 'Bearer ' + token
     }
     )
    
      return this.http.patch(this.rootUrl+'/course/update/'+courseId,JSON.stringify({courseName,category,courseDetail,imageUrl,courseUrl,price}),{headers:headers})
      .subscribe
      (
        response=>
        {
          console.log(response);
        }
      ) 
    }

    onDelete()
    {
      const token=localStorage.getItem('token')
         const headers=new HttpHeaders(
           {
             'content-Type':'application/json',
              'Authorization':'Bearer '+token
           }
         );
         console.log(headers)
         return this.http.delete(this.rootUrl+'/user/deleteAccount' ,{headers:headers})
         .subscribe
         (
           response=>
           {
             console.log(response);
           }
         )
    }

    signUp(firstName:string,lastName:string,email:string,password:string ,admin:string,confirmPassword:string)
    {
      const headers = new HttpHeaders({'Content-Type':'application/json'});
      console.log(JSON.stringify({firstName,lastName,email,password,admin,}));
      return  this.http.post(this.rootUrl+'/user/signUp',JSON.stringify({firstName,lastName,email,password,confirmPassword,admin}),
      {headers:headers});
    }

    otpSend(otp:string)
    {     
      const headers=new HttpHeaders(
        {
          'content-Type':'application/json'
        }
      );


              console.log(JSON.stringify({otp}));
         console.log(this.rootUrl+'/user/verifyEmail/'+localStorage.getItem('userId'));       
         return this.http.post(this.rootUrl+'/user/verifyEmail/'+localStorage.getItem('userId'),JSON.stringify({otp}),{headers:headers});
            
    }

    resend()
    {
      return this.http.get(this.rootUrl+'/user/resendOtp/'+localStorage.getItem('userId'));
    }

    getprofileitem()
    {
      const token =localStorage.getItem('token')
      const headers=new HttpHeaders(
        {
         'Content-Type':'application/json',
         'Authorization': 'Bearer ' + token,
        }
      );
      return this.http.get(this.rootUrl+'/user/me',{headers:headers})
    }

    updateProfile(firstName:string,lastName:string)
  {
     const token =localStorage.getItem('token')
        const headers=new HttpHeaders(
              {
              'Content-Type':'application/json',
              'Authorization': 'Bearer ' + token,
              }
            );
            return this.http.patch( this.rootUrl+'/user/update/profile',{firstName,lastName},{headers:headers})
  }
  
}
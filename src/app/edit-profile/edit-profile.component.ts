 import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormControl, Validators } from '@angular/forms';
 import { HttpHeaders, HttpClient } from '@angular/common/http';

 @Component({
   selector: 'app-edit-profile',
   templateUrl: './edit-profile.component.html',
   styleUrls: ['./edit-profile.component.css']
 })

 export class EditProfileComponent implements OnInit  {
 userForm:FormGroup
 tk:any;
// form:FormGroup
// tk:any;
//   constructor(private http:HttpClient) { }

//   ngOnInit() {

//       const token =localStorage.getItem('token')
//       const headers=new HttpHeaders(
//         {
//          'Content-Type':'application/json',
//          'Authorization': 'Bearer ' + token,
//         }
//       );
//       return this.http.get('https://3d3c38ba.ngrok.io/user/me',{headers:headers})
//       .subscribe(
//         response =>{
//           this.tk=response;
//           console.log(this.tk.role)
      
//         }
//       )
//   }




//   onSubmit()
//   {
//     const firstName=this.userForm.value.firstName;
//     const  lastName=this.userForm.value.lastName;
//     const  password=this.userForm.value.password;

//     const token =localStorage.getItem('token')
//       const headers=new HttpHeaders(
//         {
//          'Content-Type':'application/json',
//          'Authorization': 'Bearer ' + token,
//         }
//       );
//       return this.http.post('https://3d3c38ba.ngrok.io/user/me',{firstName,lastName,password},{headers:headers})
//       .subscribe(
//         response =>{
//           this.tk=response;
//           console.log(this.tk.role)
      
//         }
//       )

//   }
//   private initForm()
//   {
//       let firstName="this.tk.firstName";
//       let lastName="this.tk.lastName";
//       let password="this.tk.password";
  

//     this.userForm=new FormGroup({
//       'firstName': new FormControl(firstName,Validators.required),
//       'lastName':new FormControl(lastName,Validators.required),
//       ' password':new FormControl(password,Validators.required),
     
//     })
//   }

// }



constructor(private http:HttpClient) { }
 
  ngOnInit() {

    
      this.initForm();

   }
  
    
   
  onSubmit()
  {
    
     const firstName=this.userForm.value.firstName;
     const lastName=this.userForm.value.lastName;
     const  password=this.userForm.value.password;
     
  console.log(firstName);
 
   
  }
  private initForm()
  {
    let firstName='hello';
    let  lastName='but';
    let  password='tata';
  
    this.userForm=new FormGroup({
      'firstName': new FormControl(firstName,Validators.required),
      'lastName':new FormControl(lastName,Validators.required),
      'password':new FormControl(password,Validators.required),
    
    })
  }

}

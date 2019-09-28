 import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServerService } from '../server.service';

 @Component({
   selector: 'app-edit-profile',
   templateUrl: './edit-profile.component.html',
   styleUrls: ['./edit-profile.component.css']
 })

 export class EditProfileComponent implements OnInit  {
 userForm:FormGroup;
 tk:any;
 



constructor(private serverService:ServerService) { }
 
  ngOnInit() {
   
    this.serverService.getprofileitem()
           .subscribe(
             response =>{
               this.tk=response;
               console.log(this.tk)
    this.initForm();
          
             }
           )
      }
    
    

   
      Delete()
      {
           this.serverService.onDelete()
      }  
    
   
  onSubmit()
  {
    
     const firstName=this.userForm.value.firstName;
     const lastName=this.userForm.value.lastName;
    this.serverService.updateProfile(firstName,lastName)
          .subscribe(
                response =>{
                 
                  console.log(response)
           
              }
            )
     
         }
 
   
  
  private initForm()
  {
    let firstName=this.tk.firstName;
    let  lastName=this.tk.lastName;
  
    this.userForm=new FormGroup({
      'firstName': new FormControl(firstName,Validators.required),
      'lastName':new FormControl(lastName,Validators.required),
    
    })
  }

}

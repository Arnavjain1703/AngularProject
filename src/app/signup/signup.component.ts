import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../server.service';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from  'ngx-ui-loader';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  display=false;
  tk:any;
  error:any;
  otp=false;

  constructor(private serverService:ServerService,private ngxService: NgxUiLoaderService) { }


  ngOnInit() {
  }
onSubmit(form:NgForm)
{
  this.ngxService.start();
this.display=true;
  const value = form.value;
  console.log(JSON.stringify(form.value));
  this.serverService. signUp(value.firstName,value.lastName,value.email,value.password,value.admin,value.confirmPassword)
  .subscribe(
    (response) =>
    {     
  
        this.ngxService.stop(); 
      this.tk=response;
      console.log(this.tk)
       localStorage.setItem('userId',this.tk.userId)
      Swal.fire({
        title:this.tk.message,
        type:"success",
        showConfirmButton:false,
        timer:4000
      })
           this.otp=true;
    },
    (error) =>{ console.log(error.error.message)
                this.ngxService.stop(); 

               this.error=error
               Swal.fire({
                 title:this.error.error.message,
                 type:"error",
                 showConfirmButton:false,
                 timer:4000
               })
    }
  
  )


  
}
onSubmitotp(form:NgForm)
{
  this.ngxService.start();

const value=form.value
console.log(JSON.stringify(form.value));

this.serverService.otpSend(value.otp)

.subscribe
(
  response=>
  {
    console.log(response);
    this.ngxService.stop(); 

  },

  (error) =>{ console.log(error.error.message)
    this.ngxService.stop(); 

   this.error=error
   Swal.fire({
     title:this.error.error.text,
     type:"success",
     showConfirmButton:false,
     timer:4000
   })
}
)
}
resendOtp()
{
  this.ngxService.start();

  this.serverService.resend()
  .subscribe(
    response=>
  {
      this.ngxService.stop(); 
      console.log(response);
  },
  (error) =>{ console.log(error.error.message)
    this.ngxService.stop(); 

   this.error=error
   Swal.fire({
     title:this.error.error.text,
     type:"success",
     showConfirmButton:false,
     timer:4000
   })
}
  )
}
}




import { Component, OnInit, Input } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { UserCartService } from 'src/app/usercart.service';
import { MyCourseService } from 'src/app/mycourse.sercice';
import { ServerService } from 'src/app/server.service';
import { HttpHeaders } from '@angular/common/http';

 @Component({
   selector: 'app-user-course-item',
   templateUrl: './user-course-item.component.html',
   styleUrls: ['./user-course-item.component.css']
})
export class UserCourseItemComponent implements OnInit {
    
    add=false;
    buy=false;
    descrip=false;
    
  @Input () course:CourseUser;
  @Input()index:number;
  constructor(private acService:UserCartService,private mcService:MyCourseService, private serverService:ServerService
        ) { }

  ngOnInit() {
        
  }
  
  onAddToCart(){
        
        {
  this.acService.addCourse(this.course);
  this.add=true;
   this.serverService.userCart(this.course.courseId);
    
  
        }
}
  onAddToMyCourse()
  {
        this.mcService.addMyCourseUser(this.course);
        this.buy=true;
        this.serverService. userCourse(this.course.courseId)
  }
  description()
  {
        this.descrip=true;
  }
  undescription()
  {
    this.descrip=false
  }
  
  
}

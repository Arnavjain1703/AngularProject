
import { Component, OnInit, OnDestroy } from '@angular/core';

import {Subscription} from 'rxjs';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { CourseUserService } from 'src/app/courseuser.service';
import { ServerService } from 'src/app/server.service';


 @Component({
   selector: 'app-user-course-list',
   templateUrl: './user-course-list.component.html',
   styleUrls: ['./user-course-list.component.css']
 })
export class UserCourseListComponent implements OnInit  {
  private subscription:Subscription;
  res:any;
  role:any;
  instruct=false;
  // this.role=localStorage.getItem('role');

  

  courses:CourseUser[];
  constructor(private courseService:CourseUserService,
               private serverService:ServerService) { }

  ngOnInit() {
    this.role=localStorage.getItem('role');
  
    this.courses=this.courseService. getCoursesUser();
    console.log(this.role);
    if(this.role === 'Instructor') {
      this.instruct = true;
  }
  
  this.serverService.getallCourses();
this.subscription=this.courseService.coursesUserChanged
.subscribe((courses:CourseUser[])=>{
  this.courses=courses;

}
);
 console.log(this.courseService. getCoursesUser())
}


 ngOnDestroy()
 {
   this.subscription.unsubscribe();
 }

}

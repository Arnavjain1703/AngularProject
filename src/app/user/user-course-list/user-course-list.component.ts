
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
  courses:CourseUser[];
  constructor(private courseService:CourseUserService,
               private serverService:ServerService) { }

  ngOnInit() {
    this.courses=this.courseService. getCoursesUser();

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

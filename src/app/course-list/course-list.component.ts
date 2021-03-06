import { Component, OnInit } from '@angular/core';
import { CourseUser } from '../shared/courseuser.module';
import { CourseService } from '../course.service';
import {Subscription} from 'rxjs';
import { ServerService } from '../server.service';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit  {
  show=false;
 subscription:Subscription;
 public  courses:CourseUser[];
  constructor(private courseService:CourseService,
              private serverService:ServerService,
   ) { }

  ngOnInit() {
    this.subscription=this.courseService.coursesChanged
.subscribe((courses:CourseUser[])=>{
  this.courses=courses;
})
 this.serverService.getadminCourse();
this.courses=this.courseService.getCourses();
  }
shows()
{
 this.show=!this.show;
}

}


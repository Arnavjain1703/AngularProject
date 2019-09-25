import { Component, OnInit } from '@angular/core';
import { CourseUser } from '../shared/courseuser.module';
import { CourseService } from '../course.service';
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit  {
  show=false;
 subscription=Subscription;
 public  courses:CourseUser[];
  constructor(private courseService:CourseService,
   ) { }

  ngOnInit() {

// this.dataStorageService.getCourses() .subscribe(
// (response:Response)=>
//   {
//         this.courses = response.json;
//  this.courseService.setCourses (this.courses);}
//n); 
this.courses=this.courseService. getCourses();
}
shows()
{
 this.show=!this.show;
}


}

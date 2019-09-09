import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from '../shared/course.module';
import { CourseService } from '../course.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit  {
 subscription=Subscription;
  courses:Course[];
  constructor(private courseService:CourseService) { }

  ngOnInit() {
// this.subscription=this.courseService.courseChanged
// .subscribe((courses:Course[])=>{
// this.courses=courses
// }
// );
this.courses=this.courseService.getCourses();
}

// ngOnDestroy()
// {
//   this.subscription.unsubscribe()
// }

}

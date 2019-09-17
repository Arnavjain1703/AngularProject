import { Component, OnInit, OnDestroy } from '@angular/core';
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
  courses:CourseUser[];
  constructor(private courseService:CourseService) { }

  ngOnInit() {
// this.subscription=this.courseService.courseChanged
// .subscribe((courses:Course[])=>{
// this.courses=courses
// }
// );
this.courses=this.courseService.getCourses();
}
shows()
{
 this.show=!this.show;
}

// ngOnDestroy()
// {
//   this.subscription.unsubscribe()
// }

}

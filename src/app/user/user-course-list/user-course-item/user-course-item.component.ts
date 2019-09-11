


import { Component, OnInit, Input } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { UserCartService } from 'src/app/usercart.service';

 @Component({
   selector: 'app-user-course-item',
   templateUrl: './user-course-item.component.html',
   styleUrls: ['./user-course-item.component.css']
})
export class UserCourseItemComponent implements OnInit {

  @Input () course:CourseUser;
  @Input()index:number;
  constructor(private acService:UserCartService) { }

  ngOnInit() {
  }
  onAddToCart(){
  this.acService.addCourse(this.course);
  }
}

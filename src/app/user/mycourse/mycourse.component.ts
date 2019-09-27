import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { MyCourseService } from 'src/app/mycourse.sercice';
import { ServerService } from 'src/app/server.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.css']
})
export class MycourseComponent implements OnInit  {
  private subscription:Subscription;
  
  courses:CourseUser[];
  constructor(private courseService:MyCourseService,
               private serverService:ServerService) { }

  

  ngOnInit() {
this.courses=this.courseService. getMyCoursesUser();

this.serverService.getMyCoursesUser();
this.subscription=this.courseService.MyCourseChanged
.subscribe((courses:CourseUser[])=>{
this.courses=courses;


  })
}

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}







  
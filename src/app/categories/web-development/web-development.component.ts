import { Component, OnInit } from '@angular/core';
 import { CourseUser } from 'src/app/shared/courseuser.module';
 import {  DevelopmentService } from 'src/app/development.service';


@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.css']
})
export class WebDevelopmentComponent implements OnInit {
  courses:CourseUser[];

   constructor(private developmentService:DevelopmentService) { }
  

  ngOnInit() {
    this.courses=this.developmentService. getWebCourse();
  }

}


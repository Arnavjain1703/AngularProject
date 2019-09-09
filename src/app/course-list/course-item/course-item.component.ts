import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/shared/course.module';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input () course:Course;
  @Input()index:number;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { CourseUserService } from '../courseuser.service';

import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  id:number;
  editMode=false;
  courseForm:FormGroup;

  constructor( private courseService:CourseService,
              private courseUserService:CourseUserService,

               private route:ActivatedRoute,
               private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe( (params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id'] !=null;
      this.initForm();
    });
  }
  onCancle()
  {
    this.router.navigate(['/courselist']);
  }
  onSubmit()
  {if(this.editMode)
    {
      this.courseService.updateCourse(this.id,this.courseForm.value);
      this.courseUserService.updateCourseUser(this.id,this.courseForm.value);

    }
    else{
      this.courseService.addCourse(this.courseForm.value);
      this.courseUserService.addCourseUser(this.courseForm.value);

    }
   this.onCancle();
  }
  private initForm()
  {
    let courseName='';
    let courseDescription='';
    let courseImagePath='';
    let coursePrice='';
    if(this.editMode)
    {
      const course=this.courseService.getCourse(this.id)
      courseName=course.name;
      courseDescription=course.description;
      courseImagePath=course.imagePath;
      coursePrice=course.price;
    }
    this.courseForm=new FormGroup({
      'name': new FormControl(courseName,Validators.required),
      'imagePath':new FormControl(courseImagePath,Validators.required),
      'description':new FormControl(courseDescription,Validators.required),
      'price':new FormControl(coursePrice,Validators.required)
     
    })
  }

}

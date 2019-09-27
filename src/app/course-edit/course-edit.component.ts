import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { CourseUserService } from '../courseuser.service';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerService } from '../server.service';


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
              private serverService:ServerService,
              

               private route:ActivatedRoute,
               private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe( (params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id'] !=null;
      this.initForm();});
      if(!this.editMode)
      {
        
      }

      
     
      
      

    
  }
  onCancle()
  {
    this.router.navigate(['/courselist']);
  }
  
    onDelete()
    {
      
    }
    
   
  onSubmit()
  {
    
     const courseName=this.courseForm.value.courseName;
     const category=this.courseForm.value.category;
     const courseDetail=this.courseForm.value.courseDetail;
     const imageUrl= this.courseForm.value.imageUrl;
     const courseUrl=this.courseForm.value.courseUrl;
     const  price=  this.courseForm.value.price;
     const course= this.courseService.getCourse(this.id)
    
    if(this.editMode)
    {
      this.courseService.updateCourse(this.id,this.courseForm.value);
      this.courseUserService.updateCourseUser(this.id,this.courseForm.value);
      this.serverService.updateCourse(courseName,category,courseDetail,imageUrl,courseUrl,price,course.courseId);


    }
    else{
      this.courseService.addCourse(this.courseForm.value);
      this.courseUserService.addCourseUser(this.courseForm.value);
      this.serverService.addcourses(courseName,category,courseDetail,imageUrl,courseUrl,price)
    }
   this.onCancle();
  }
  private initForm()
  {
    let courseName='';
    let courseDetail='';
    let imageUrl='';
    let price=0;
    let category='';
    let courseUrl='';
  
    if(this.editMode)
    {
      const course=this.courseService.getCourse(this.id)
      courseName=course.courseName;
      courseDetail=course.courseDetail;
      imageUrl=course.imageUrl;
      price=course.price;
      category=course.category;
      courseUrl=course.courseUrl;
    
    }
    this.courseForm=new FormGroup({
      'courseName': new FormControl(courseName,Validators.required),
      'imageUrl':new FormControl(imageUrl,Validators.required),
      'courseDetail':new FormControl(courseDetail,Validators.required),
      'price':new FormControl(price,Validators.required),
       'category':new FormControl(category),
       'courseUrl':new FormControl(courseUrl,Validators.required)
     
    })
  }

}

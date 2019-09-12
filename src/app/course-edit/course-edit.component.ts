import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { CourseUserService } from '../courseuser.service';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { DevelopmentService } from '../development.service';
import { MyMusicService } from '../services/music.service';
import { MyDesignService } from '../services/designing.service';
import { MyCraftService } from '../services/carft.service';


@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  id:number;
  editMode=false;
  webmode=false;
  DesignMode=false;
  CraftMode=false;
  MusicMode=false;
  courseForm:FormGroup;

  constructor( private courseService:CourseService,
              private courseUserService:CourseUserService,
              private developmentService:DevelopmentService,
              private mymusic:MyMusicService,
              private mydesign:MyDesignService,
              private mycraft :MyCraftService,

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
  onAddToWeb()
  {
    this.webmode=true;
  }
  onAddDesign()
    {
      this.DesignMode=true;
    }
    onAddCraft()
    {
      this.CraftMode=true;
    }
    onAddMusic()
    {
      this.MusicMode=true;
    }
    
  
  onSubmit()
  {
    if(this.webmode)
    {
      this.developmentService.AddTOWeb(this.courseForm.value),
      this.webmode=false;
    }
    if(this.DesignMode)
    {
     this.mydesign.addDesign(this.courseForm.value),
     this.DesignMode=false;
    }
    if(this.CraftMode)
    {
      this.mycraft.addCraft(this.courseForm.value),
      this.CraftMode=false;
    }
    if(this.MusicMode)
    {
      this.mymusic.addMusic(this.courseForm.value)
      this.MusicMode=false;
    }
    
        
      
    
    if(this.editMode)
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

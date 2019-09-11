import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import { CourseService } from './course.service';
import { CourseUserService } from './courseuser.service';

import { CourseEditComponent } from './course-edit/course-edit.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserCourseListComponent } from './user/user-course-list/user-course-list.component';
import { UserCourseComponent } from './user/user-course/user-course.component';
import { UserCourseItemComponent } from './user/user-course-list/user-course-item/user-course-item.component';
import { UsercartComponent } from './user/usercart/usercart.component';
import { UserCartService } from './usercart.service';
import { UsercartitemComponent } from './user/usercart/usercartitem/usercartitem.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseItemComponent,
    CourseEditComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    UserCourseListComponent,
    UserCourseComponent,
    UserCourseItemComponent,
    UsercartComponent,
    UsercartitemComponent,
    
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [CourseService,CourseUserService,UserCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

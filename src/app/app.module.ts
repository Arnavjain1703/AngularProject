import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import { CourseService } from './course.service';
import { CourseEditComponent } from './course-edit/course-edit.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserCourseListComponent } from './user/user-course-list/user-course-list.component';
import { UserCourseItemComponent } from './user/user-course-item/user-course-item.component';
import { UserCourseComponent } from './user/user-course/user-course.component';


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
    UserCourseItemComponent,
    UserCourseComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

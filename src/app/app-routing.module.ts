import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { LoginComponent } from './login/login.component';
import { UserCourseComponent } from './user/user-course/user-course.component';
import { UserCourseListComponent } from './user/user-course-list/user-course-list.component';
import { UsercartComponent } from './user/usercart/usercart.component';
const appRoutes: Routes=[
    {path: 'courselist', component:CourseListComponent},
    {path:'courselist/:id/edit',component:CourseEditComponent},
    {path:'new',component:CourseEditComponent},
    {path:'login',component:LoginComponent},
    {path:'usercourse',component:UserCourseComponent},
    {path:'usercourse/usercourselist',component:UserCourseListComponent},
    {path:'usercart',component:UsercartComponent}
]
@NgModule(
    {
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
    }
    )
    
    export class AppRoutingModule
    {
    
    }
     
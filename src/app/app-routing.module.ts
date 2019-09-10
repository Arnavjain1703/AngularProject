import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes=[
    {path: 'courselist', component:CourseListComponent},
    {path:'courselist/:id/edit',component:CourseEditComponent},
    {path:'new',component:CourseEditComponent},
    {path:'login',component:LoginComponent}
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
     
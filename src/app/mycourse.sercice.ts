import { CourseUser } from './shared/courseuser.module';
import { Subject } from 'rxjs';


export class MyCourseService
{   
    MyCourseChanged=new Subject<CourseUser[ ]>();

    private courses: CourseUser[]=[
        
    ]
    getMyCoursesUser()
    {
        return this.courses.slice();
    }
    addMyCourseUser(course:CourseUser)
{
 this.courses.push(course);
  this.MyCourseChanged.next(this.courses.slice())
}
     setCourses(courses:CourseUser[])
     {
         this.courses=courses;
         this.MyCourseChanged.next(this.courses.slice())
          
     }
}
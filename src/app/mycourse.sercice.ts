import { CourseUser } from './shared/courseuser.module';


export class MyCourseService
{
    private courses: CourseUser[]=[
        
    ]
    getMyCoursesUser()
    {
        return this.courses.slice();
    }
    addMyCourseUser(course:CourseUser)
{
 this.courses.push(course);
//  this.coursesUserChanged.next(this.courses.slice())
}
}
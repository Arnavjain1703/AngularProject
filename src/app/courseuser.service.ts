import { Subject } from 'rxjs';
import { CourseUser } from './shared/courseuser.module';



export class CourseUserService {
    coursesUserChanged=new Subject<CourseUser[ ]>();

private courses: CourseUser[]=[
    new CourseUser( 233233,'A test Recipe','bvdfd','this is simple test,',83247,'rfnmrjkenrfekjnf','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg','bncafjnvckdfk')
]

getCoursesUser()
{
    return this.courses.slice();
}
getCourseUser(index:number)
{
    return this.courses.slice()[index];
}
addCourseUser(course:CourseUser)
{
 this.courses.push(course);
 this.coursesUserChanged.next(this.courses.slice())
}
updateCourseUser(index:number,newCourse:CourseUser)
{
  this.courses[index]=newCourse;
  this.coursesUserChanged.next(this.courses.slice())

}
deleteCourseUser(index:number){
    this.courses.splice(index,1);
 this.coursesUserChanged.next(this.courses.slice());


}
setCourses(courses:CourseUser[])
{
    console.log(courses);
   this.courses=courses;
 this.coursesUserChanged.next(this.courses.slice());

}


}
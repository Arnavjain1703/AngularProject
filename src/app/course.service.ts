
import { Subject } from 'rxjs';
import { Course } from './shared/course.module';


export class CourseService{
    coursesChanged=new Subject<Course[]>();

private courses: Course[]=[
    new Course('web bootcamp','this course is for web development','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg',' 446'),
]
getCourses()
{
    return this.courses.slice();
}
getCourse(index:number)
{
    return this.courses.slice()[index];
}
addCourse(course:Course)
{
 this.courses.push(course);
 this.coursesChanged.next(this.courses.slice())
}
updateCourse(index:number,newCourse:Course)
{
  this.courses[index]=newCourse;
  this.coursesChanged.next(this.courses.slice())

}
deleteCourse(index:number){
    this.courses.splice(index,1);
 this.coursesChanged.next(this.courses.slice());


}
}
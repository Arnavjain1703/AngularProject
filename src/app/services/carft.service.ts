import { CourseUser } from '../shared/courseuser.module';




export class MyCraftService
{
    private courses: CourseUser[]=[
        new CourseUser('web bootcamp','this course is for web development','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg',' 446'),
    ]
    getCraft()
    {
        return this.courses.slice();
    }
    addCraft(course:CourseUser)
{
 this.courses.push(course);
//  this.coursesUserChanged.next(this.courses.slice())
}

}
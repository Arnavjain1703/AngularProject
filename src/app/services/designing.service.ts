import { CourseUser } from '../shared/courseuser.module';


export class MyDesignService
{
    private courses: CourseUser[]=[
        new CourseUser('web bootcamp','this course is for web development','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg',' 446'),
    ]
    getDesign()
    {
        return this.courses.slice();
    }
    addDesign(course:CourseUser)
{
 this.courses.push(course);

}
}
import { CourseUser } from '../shared/courseuser.module';


export class MyMusicService
{
    private courses: CourseUser[]=[
        new CourseUser('web bootcamp','this course is for web development','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg',' 446'),
    ]
    getMusic()
    {
        return this.courses.slice();
    }
    addMusic(course:CourseUser)
{
 this.courses.push(course);
//  this.coursesUserChanged.next(this.courses.slice())
}
}
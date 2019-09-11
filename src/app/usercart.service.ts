import { CourseUser } from './shared/courseuser.module';
import { Subject } from 'rxjs';

export class UserCartService{
    cartChanged= new Subject<CourseUser[]>();
   private courses:CourseUser[]=[   

    new CourseUser('wecndcbceucbbootcamp','this course is for web development','http://foodtalk4you.com/wp-content/uploads/2017/01/Recipes-Banner.jpg',' 446'),

    ];
  getUserCart()
  {
      return this.courses.slice();
  } 
  addCourse(course:CourseUser){
    this.courses.push(course);
    this.cartChanged.next(this.courses.slice());
}
}

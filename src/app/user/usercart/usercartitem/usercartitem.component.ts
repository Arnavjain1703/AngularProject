import { Component, OnInit ,Input} from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { MyCourseService } from 'src/app/mycourse.sercice';
import { UserCartService } from 'src/app/usercart.service';
import { ServerService } from 'src/app/server.service';
@Component({
  selector: 'app-usercartitem',
  templateUrl: './usercartitem.component.html',
  styleUrls: ['./usercartitem.component.css']
})
export class UsercartitemComponent implements OnInit {
  
  @Input () course:CourseUser;
  @Input()index:number;
  constructor( private csservice:UserCartService,
              private myCourse:MyCourseService,
              private serverService:ServerService) { }

  descrip=false;
  ngOnInit() {
  }

  
  onDelete()
  {
    this.csservice.deleteCraft(this.index);
    this.serverService.cartDelete(this.course.courseId)
  }
  onAddToMyCourse()
  {
    this.myCourse.addMyCourseUser(this.course)
    this.serverService. userCourse(this.course.courseId)
    this.serverService.cartDelete(this.course.courseId)


  }
  description()
  {
     this.descrip=true;
  }
  undescription()
  {
    this.descrip=false;
  }
}

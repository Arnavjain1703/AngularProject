import { Component, OnInit ,Input} from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { MyCourseService } from 'src/app/mycourse.sercice';
import { UserCartService } from 'src/app/usercart.service';
 
@Component({
  selector: 'app-usercartitem',
  templateUrl: './usercartitem.component.html',
  styleUrls: ['./usercartitem.component.css']
})
export class UsercartitemComponent implements OnInit {
  show=false;
  @Input () course:CourseUser;
  @Input()index:number;
  constructor( private csservice:UserCartService,
              private myCourse:MyCourseService) { }

  ngOnInit() {
  }

  shows()
  {
   this.show=!this.show;
  }
  onDelete()
  {
    this.csservice.deleteCraft(this.index);
  }
  onAddToMyCourse()
  {
    this.myCourse.addMyCourseUser(this.course)
  }
}

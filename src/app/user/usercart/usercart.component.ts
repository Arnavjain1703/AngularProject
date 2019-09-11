import { Component, OnInit, OnDestroy } from '@angular/core';

import {Subscription} from 'rxjs';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { UserCartService } from 'src/app/usercart.service';


@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {
 subscription=Subscription;
  courses:CourseUser[];
  constructor(private userCartService:UserCartService) { }

  ngOnInit() {
// this.subscription=this.courseService.courseChanged
// .subscribe((courses:Course[])=>{
// this.courses=courses
// }
// );
this.courses=this.userCartService. getUserCart();
}

// ngOnDestroy()
// {
//   this.subscription.unsubscribe()
// }

}

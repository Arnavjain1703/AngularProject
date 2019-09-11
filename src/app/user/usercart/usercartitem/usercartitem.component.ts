import { Component, OnInit ,Input} from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';

@Component({
  selector: 'app-usercartitem',
  templateUrl: './usercartitem.component.html',
  styleUrls: ['./usercartitem.component.css']
})
export class UsercartitemComponent implements OnInit {
  @Input () course:CourseUser;
  @Input()index:number;
  constructor() { }

  ngOnInit() {
  }

}

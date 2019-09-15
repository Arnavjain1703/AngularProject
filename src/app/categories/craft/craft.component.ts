import { Component, OnInit } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { MyCraftService } from 'src/app/services/carft.service';

@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.css']
})
export class CraftComponent implements OnInit {

  courses:CourseUser[];

  constructor(private designService:MyCraftService) { }
 

 ngOnInit() {
   this.courses=this.designService. getCraft();
 }

}

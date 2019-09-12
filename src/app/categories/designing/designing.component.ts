import { Component, OnInit } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { MyDesignService } from 'src/app/services/designing.service';

@Component({
  selector: 'app-designing',
  templateUrl: './designing.component.html',
  styleUrls: ['./designing.component.css']
})
export class DesigningComponent implements OnInit {
  courses:CourseUser[];

  constructor(private designService:MyDesignService) { }
 

 ngOnInit() {
   this.courses=this.designService. getDesign();
 }

}

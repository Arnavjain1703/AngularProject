import { Component, OnInit } from '@angular/core';
import { CourseUser } from 'src/app/shared/courseuser.module';
import { MyMusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  courses:CourseUser[];

  constructor(private musicService:MyMusicService) { }
 

 ngOnInit() {
   this.courses=this.musicService. getMusic();
 }

}

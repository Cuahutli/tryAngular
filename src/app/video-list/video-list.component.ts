import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoService } from "../videos/video.service";

import { VideoItem } from "../videos/video";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit {
  private req:any;
  title = 'Lista de Videos';
  date;
  videoList:[VideoItem];
  //videoList = ["Item 1", "Item 2", "Item 3"]; //JSON
  constructor(private _video:VideoService)  { }

  ngOnInit() {
    this.date = new Date()
    /* this.req = this._video.list().subscribe(data=>{
      this.videoList = data as [any];
    }); */
    this.req = this._video.list().subscribe(data=>{
      this.videoList = data as [VideoItem];
    })
  }
s
  ngOnDestroy(){
    this.req.unsubscribe();
  }

  

}

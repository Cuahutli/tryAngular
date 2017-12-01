import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  private req:any;
  title = 'Lista de Videos';
  date;
  videoList:[any];
  //videoList = ["Item 1", "Item 2", "Item 3"]; //JSON
  constructor(private _http:Http) { }

  ngOnInit() {
    this.date = new Date()
    this.req = this._http.get("assets/json/videos.json").subscribe(data=>{
      console.log(data.json());
      this.videoList = data.json() as [any];
    });
  }

  ngOnDestroy(){
    this.req.unsubscribe();
  }

  

}

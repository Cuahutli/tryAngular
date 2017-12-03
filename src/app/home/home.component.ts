import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { VideoItem } from "../videos/video";
import { VideoService } from "../videos/video.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoService]
})
export class HomeComponent implements OnInit {
  private req:any;
  homeImageList:[VideoItem] = [] as [VideoItem];
  videoListDefaultImage = "assets/images/videos/1.jpg";
  constructor(private router:Router, private _video:VideoService) { }

  ngOnInit() {
    this.req =  this._video.list().subscribe(data=>{
      data.filter(item=>{
        if (item.featured){
          this.homeImageList.push(item);
        }
      })
    })
  }

  ngOnDestroy(){
    this.req.unsubscribe();
  }

  preventNormal(event:any, image:any){
    if (!image.prevented){
      event.preventDefault();
      this.router.navigate(['./videos'])
    }
   
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  private routeSub:any;
  private req:any;
  slug:string;
  video:any;
  constructor(private route: ActivatedRoute, private _http:Http) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params =>{
      //console.log(params);
      this.slug = params.slug;
      this._http.get("assets/json/videos.json").subscribe(data=>{
        data.json().filter(item=>{
          if (item.slug == this.slug ){
            console.log(item);
            this.video = item
          }
        })
      })
    }) //observable
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe()
    this.req.unsubscribe()
  }

}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private req:any;
  homeImageList =[
    /* {
      image: "assets/images/nature/4.jpg",
      title: "Image 4",
      link: "/videos/video-1",
      description:"Nulla vitae elit libero, a pharetra augue mollis interdum."    
    },
    {
      image: "assets/images/nature/5.jpg",
      title: "Image 5",
      link: "/videos/video-2",
      description:"Nulla vitae elit libero, a pharetra augue mollis interdum."    
    },
    {
      image: "assets/images/nature/6.png",
      title: "Image 6",
      link: "/videos/video-3",
      description:"Nulla vitae elit libero, a pharetra augue mollis interdum."    
    }, */
  ];
  constructor(private router:Router, private _http:Http) { }

  ngOnInit() {
    this.req =  this._http.get('assets/json/videos.json').subscribe(data=>{
      console.log(data.json());
      data.json().filter(item=>{
        if (item.featured){
          this.homeImageList.push(item);
        }
      })
      //this.homeImageList = data.json();
    })
  }

  ngOnDestroy(){
    this.req.unsubscribe();
  }

  preventNormal(event:any, image:any){
    if (!image.prevented){
      event.preventDefault();
      //this.router.navigate(['./videos'])
      this.router.navigate(['./videos'])
    }
   
  }

}

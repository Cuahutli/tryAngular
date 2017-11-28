import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = 'Lista de Videos';
  //videoList = ["Item 1", "Item 2", "Item 3"]; //JSON
  videoList = [
    {
      name: "Item 1",
      slug: "item-1",
      youtube_id: `9wc8Gv8X49U`
    },
    {
      name: "Item 2",
      slug: "item-2",
      youtube_id: `8QOzAmWyouA`
    },
    {
      name: "Item 3",
      slug: "item-3",
      youtube_id: `fOuKO2dVU0U`
    }
  ]
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getEmbedUrl(video_id){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video_id);
  }

}

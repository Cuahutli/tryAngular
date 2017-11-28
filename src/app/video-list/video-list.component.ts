import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = 'Lista de Videos';
  date;
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
      youtube_id: null //`fOuKO2dVU0U`
    }
  ]
  constructor() { }

  ngOnInit() {
    this.date = new Date()
  }

  

}

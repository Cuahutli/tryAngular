import { Component, OnInit } from '@angular/core';

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
      slug: "item-1"
    },
    {
      name: "Item 1",
      slug: "item-1"
    },
    {
      name: "Item 1",
      slug: "item-1"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
  private routeSub:any;
  query:string;
  constructor(private route:ActivatedRoute) { }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params=>{
      console.log(params);
      this.query = params['q'];
    })
  }

}

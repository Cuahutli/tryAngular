import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Hola Srvup2';
  description = 'Una nueva aplicación';
  query:string;
  private routeSub:any;

  constructor(private route:ActivatedRoute){
    this.routeSub = route.params.subscribe(params=>{
      console.log(params);
      this.query = params['q'];
    })

  }


  ngOnInit() {
  }
  
  ngOnDestroy(){
    this.routeSub.unsubscribe();
  }


}

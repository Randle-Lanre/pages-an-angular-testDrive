import { Component, OnInit } from '@angular/core';
//import the activated route and inject it to the bclass below
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.route.paramMap.subscribe( )
  }

}

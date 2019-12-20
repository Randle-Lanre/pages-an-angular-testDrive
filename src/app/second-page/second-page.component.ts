import { Component, OnInit } from '@angular/core';
//import the activated route and inject it to the bclass below
import { ActivatedRoute } from '@angular/router';
//store service import
import { PdataserviceService } from '../pdataservice.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private data: PdataserviceService,
  ) { }

  addToStoredData(information){
    window.alert('Information stored')
    this.data.addToSToredData(information)

  }

  ngOnInit() {
    // this.route.paramMap.subscribe( )
  }

}

import { Component, OnInit } from '@angular/core';
import { dummyData } from '../playdata';
import { PdataserviceService } from '../pdataservice.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  dummyData= dummyData;
  details;

   constructor(
     private dataServices: PdataserviceService,
   ) { }

  like(){
    window.alert('This like button works')
  }

  addToStoredData(details){
    window.alert('This item has been added to your cart/stored data')
    this.dataServices.addToSToredData(details)

  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { dummyData } from '../playdata';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  dummyData= dummyData;

  // constructor() { }

  like(){
    window.alert('This like button works')
  }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdataserviceService {
  storedData=[]

  addToSToredData(information){
    this.storedData.push(information);

  }

  getStoredData(){
    return this.getStoredData;

  }

  clearData(){
    this.storedData=[]
    return this.storedData

  }

  constructor() { }
}

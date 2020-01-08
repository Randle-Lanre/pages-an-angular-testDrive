import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PdataserviceService {
  storedData=[]
  
  constructor(private http: HttpClient) { }

  addToSToredData(information){
    this.storedData.push(information);

  }

  getStoredData(){
    return this.storedData;

  }

  clearData(){
    this.storedData=[]
    return this.storedData

  }

  getJsonInfo(){
    return this.http.get('../assets/importantData.json')
  }

}

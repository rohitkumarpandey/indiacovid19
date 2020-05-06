import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  data ;
  stateData : {name:string,confirmed,deltaConfirmed:number, active:number, recover:number, deltaRecovered:number, deceased:number, deltaDeaths:number, lastUpdated:string};


  constructor(private http : HttpClient) { }

  setData(data){
    localStorage.setItem('data',JSON.stringify(data));
  }

  setAllData(allData){
    localStorage.setItem('allData', JSON.stringify(allData));
  }

  getAllData(){
    return JSON.parse(localStorage.getItem('allData'));
  }

  getData(){
    return JSON.parse(localStorage.getItem('data'));
  }

  setStateName(name, confirmed,deltaConfirmed,active,recover,deltaRecovered,deceased, deltaDeaths, lastUpdated){
   this.stateData = {name : name, confirmed : confirmed,deltaConfirmed : deltaConfirmed
    , active : active, recover : recover, deltaRecovered:deltaRecovered, deceased:deceased, deltaDeaths : deltaDeaths,
     lastUpdated :lastUpdated };
   //console.log(this.stateData);
    localStorage.setItem('stateDetail',JSON.stringify(this.stateData));
  }
  getStateName(){
    return JSON.parse(localStorage.getItem('stateDetail'));
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { StateService } from './state.service';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.css']
})
export class StateDetailsComponent implements OnInit {
  isDataLoaded : boolean = false;
  
  stateDetail;
  state:string;
  resourcesCategory = [];
  resources : Array<{category:string, city : string,descriptionandorserviceprovided :string, nameoftheorganisation : string, phonenumber : string}>=[];
  districtZone : Array<{district : string, zone : string }> = [];
  stateDistrictData : Array<{name :string, confirmed:number, active:number, recover:number, deceased:number}> = [];
  total : Array<{confirmed:number, active:number, recovered:number, deceased:number,
  deltaConfirmed:number, deltaDeaths: number, deltaRecovered : number, lastUpdated : string}> = [];
  districtDataTemp : Array<{name:string, confirmed:number, active:number, recovered:number, deceased:number,
  deltaConfirmed:number, deltaDeaths: number, deltaRecovered : number , zone : string}> = []; 

  
  
  constructor(private dataService : DataService, private service : StateService) {}

  ngOnInit() {
    this.stateDetail = this.dataService.getStateName();
    this.state = this.stateDetail.name;
    
    this.getZoneData();
  }

  showDataTemp(){
    
   
    this.total.push({confirmed:this.stateDetail.confirmed, active:this.stateDetail.active, recovered:this.stateDetail.recover
      , deceased:this.stateDetail.deceased, deltaConfirmed:this.stateDetail.deltaConfirmed,
       deltaDeaths: this.stateDetail.deltaDeaths, deltaRecovered : this.stateDetail.deltaRecovered, lastUpdated : this.stateDetail.lastUpdated});
      
       var stateDate = this.dataService.getData();
       var zone :string;
      
       for(var district in stateDate[this.state].districtData){
         this.districtZone.forEach(element => {
           if(element.district == district){
              zone = element.zone;
           }
           
         });
           this.districtDataTemp.push({name:district, confirmed:stateDate[this.state].districtData[district].confirmed,
             active:stateDate[this.state].districtData[district].active,
              recovered:stateDate[this.state].districtData[district].recovered,
               deceased:stateDate[this.state].districtData[district].deceased,
       deltaConfirmed:stateDate[this.state].districtData[district].delta.confirmed,
        deltaDeaths: stateDate[this.state].districtData[district].delta.deceased,
         deltaRecovered : stateDate[this.state].districtData[district].delta.recovered,
        zone : zone});
       }

       

      
     

  
}

//get zone data
getZoneData(){
  this.service.getZoneData()
  .then((res)=>{
    res['zones'].forEach(element => {
      if(element.state == this.state){
        this.districtZone.push({district : element.district, zone : element.zone.toLowerCase()});
        
      }
    });
  })
  .then(()=> this.showDataTemp())
  .then(()=>this.getResources())
  .then(()=>{this.isDataLoaded = true})
  .catch((error)=>{console.log(error)});

  
}

  
getResources(){
  this.service.getResources()
  .then((res)=>{
    res['resources'].forEach(element => {
      if(element.state == this.state){
        if(!(this.resourcesCategory.includes(element.category))){
           this.resourcesCategory.push( element.category);
        }
        this.resources.push({category:element.category, city : element.city,descriptionandorserviceprovided :element.descriptionandorserviceprovided,
           nameoftheorganisation : element.nameoftheorganisation, phonenumber : element.phonenumber})
      }
    });
    
  })
  .catch();
}



  

}

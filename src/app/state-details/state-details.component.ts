import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.css']
})
export class StateDetailsComponent implements OnInit {
  state:string;
  
  stateDistrictData : Array<{name :string, confirmed:number, active:number, recover:number, deceased:number}> = [];
  total : Array<{confirmed:number, active:number, recovered:number, deceased:number,
    deltaConfirmed:number, deltaDeaths: number, deltaRecovered : number, lastUpdated : string}> = [];

    districtDataTemp : Array<{name:string, confirmed:number, active:number, recovered:number, deceased:number,
      deltaConfirmed:number, deltaDeaths: number, deltaRecovered : number}> = []; 
  
  
      constructor(private dataService : DataService) {
    //this.showData();
    this.showDataTemp();
   }

  ngOnInit() {
  }

  showDataTemp(){
    var stateDetail = this.dataService.getStateName();
    this.state = stateDetail.name;
   // console.log("aaaaaaaaaa"+ stateName.name);
    this.total.push({confirmed:stateDetail.confirmed, active:stateDetail.active, recovered:stateDetail.recover
      , deceased:stateDetail.deceased, deltaConfirmed:stateDetail.deltaConfirmed,
       deltaDeaths: stateDetail.deltaDeaths, deltaRecovered : stateDetail.deltaRecovered, lastUpdated : stateDetail.lastUpdated});
      
       var stateDate = this.dataService.getData();
      //console.log(stateDate[this.state]);
       for(var district in stateDate[this.state].districtData){
         //console.log(stateDate[this.state].districtData[district].confirmed);
           this.districtDataTemp.push({name:district, confirmed:stateDate[this.state].districtData[district].confirmed,
             active:stateDate[this.state].districtData[district].active,
              recovered:stateDate[this.state].districtData[district].recovered,
               deceased:stateDate[this.state].districtData[district].deceased,
       deltaConfirmed:stateDate[this.state].districtData[district].delta.confirmed,
        deltaDeaths: stateDate[this.state].districtData[district].delta.deceased,
         deltaRecovered : stateDate[this.state].districtData[district].delta.recovered});
       }

      //  stateDate[this.state].forEach(district => {
      //    console.log(district);
         
      //  });
     

  
}

  showData(){
    // this.state = this.dataService.getStateName();
    // var stateData = this.dataService.getData()[this.dataService.getStateName()]
    // for(var district in stateData.districtData){
    //   this.confirmed += stateData.districtData[district].confirmed;
    //   this.active += stateData.districtData[district].active;
    //   this.recovered += stateData.districtData[district].recovered;
    //   this.deceased += stateData.districtData[district].deceased;
    //   this.stateDistrictData.push({name : district, confirmed: stateData.districtData[district].confirmed, active : stateData.districtData[district].active, recover: stateData.districtData[district].recovered, deceased : stateData.districtData[district].deceased})
    // }
    // var op = 0.1;
    // var box = document.getElementById('contentBox');
    // console.log(box);
    // var timer = setInterval(()=>{
    //     if(op>1){
    //       clearInterval(timer);
    //     }
    //       box.style.opacity = String(op);
    //       box.style.filter = 'alpha(opacity=' + op * 100 + ")";
    //       op += op * 0.1;
    // },20);
  }

  

}

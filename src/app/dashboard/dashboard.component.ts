import { Component, OnInit } from '@angular/core';
import { DasboardService } from './dasboard.service';
import { DataService } from '../data/data.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data;
  isDataLoaded : boolean = false;
  stateName : String;
 
  stateDistrictData : Array<{name :string, confirmed:number, active:number, recover:number, deceased:number}> = [];
  statewise : Array<{name :string, confirmed:number, active:number, recover:number, deceased:number}> = [];
  
   date : Date = new Date() ;
   stateTemp;
   statewiseTemp : Array<{name :string, confirmed:number, active:number, recover:number, deceased:number,
    deltaConfirmed:number, deltaDeaths: number, deltaRecovered : number, lastUpdated : string, statenotes: string}> = [];

    tempData;
    total : Array<{confirmed:number, active:number, recovered:number, deceased:number,
      deltaConfirmed:number, deltaDeaths: number, deltaRecovered : number, lastUpdated : string}> = [];
  totalConfirmed : number =0;

  constructor(private service : DasboardService, private dataService : DataService, private router : Router) { 
  }

  ngOnInit(): void {
    this.updateData();
    $(document).ready(function(){
      $('#searchInput').on('keyup', function(){
        var value = $(this).val().toString().toLowerCase();
        $("#stateTable tr").filter(function(){
           $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
           return true;
        });
      });
  });
  }

 


  getAllData(){
    this.service.getAllData().then(res=>{
      this.tempData  = res;
      this.dataService.setAllData(this.tempData);
      //console.log("confirmed cases "+ this.tempData['statewise'][0].active);
      this.total = [];
      this.total.push({confirmed:this.tempData['statewise'][0].confirmed,
       active:this.tempData['statewise'][0].active,
       recovered:this.tempData['statewise'][0].recovered,
         deceased:this.tempData['statewise'][0].deaths,
        deltaConfirmed:this.tempData['statewise'][0].deltaconfirmed,
         deltaDeaths: this.tempData['statewise'][0].deltadeaths,
          deltaRecovered : this.tempData['statewise'][0].deltarecovered,
           lastUpdated : this.tempData['statewise'][0].lastupdatedtime});


      this.statewiseTemp = [];
      this.tempData['statewise'].forEach(state => {
        if(!(state.state == "Total")){
          this.statewiseTemp.push({name :state.state, confirmed:state.confirmed, active:state.active,
             recover:state.recovered, deceased:state.deaths, deltaConfirmed:state.deltaconfirmed,
              deltaDeaths: state.deltadeaths, deltaRecovered : state.deltarecovered,
               lastUpdated : state.lastupdatedtime,
               statenotes : state.statenotes});
        }
        
      });
      //Display table
      this.isDataLoaded = true;
      
    }).then(()=>{
      this.service.getData()
      .then(res =>{
        this.data = [];
        this.data = res;
        this.dataService.setData(this.data);     
      });
    }).catch();
  }


 



  getStateDetails(name, confirmed,deltaConfirmed,active,recover,deltaRecovered,deceased, deltaDeaths, lastUpdated){
   // console.log(name, confirmed,deltaConfirmed,active,recover,deltaRecovered,deceased, deltaDeaths);
   if(confirmed!=0){
    this.dataService.setStateName(name, confirmed,deltaConfirmed,active,recover,deltaRecovered,deceased, deltaDeaths, lastUpdated);
    this.router.navigateByUrl('/state');
  }
  }

  updateData(){
    this.getAllData();
   setInterval(()=>{this.date = new Date()},1000);
   setInterval(()=>{this.getAllData();}, 30000);
}

ngAfterViewInit(){


}


  

  




}

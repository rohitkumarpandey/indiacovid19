import { Component, OnInit } from '@angular/core';
import { GraphService } from './graph.service';
import { DataService } from '../data/data.service';

declare var google :any;


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  isDataLoaded : boolean = false;
  totalMale:number = 0;
  totalFemale:number = 0;
  totalOthers:number = 0;
  data;
  confirmedData = [];
  recoveredData = [];
  deceasedData = [];
  infectionRatioByGender = [ ['Gender', 'Numbers']];
  confirmedInMonths = [];
  
  confirmedInMonthsOptions ={
    colors : ['red','grey'],
    columnNames : ['Confirmed', 'Deceased'],
    legend : {position : 'top'},
    is3D : true
  }

  columnNames : ['Confirmed', 'Deceased'];

  

  recoveredInMonths = [];
  deceasedInMonths = [];
  deceasedInMonthsOptions ={
    colors : ['grey'],
    legend : 'none'
  }


  
  arr =[];
  infectionRatioByGenderOptions = {
    colors: ['#85929E', '#e6693e', '#455AF3'], is3D: true,
    
 };
  confirmedOptions = {   
  //   hAxis: {
  //     title: 'Date'
  //  },
  //  vAxis:{
  //     title: 'Number of People Infected in India'
  //  } 
  backgroundColor:'#f5f5f5',
  legend : 'none',
  
  colors : ['red']
  
  };
  recoveredOptions = {   
    backgroundColor:'#f5f5f5',
    colors : ['green'],
    legend : 'none'
    
    };

    deceasedOptions = {   
      backgroundColor:'#f5f5f5',
      colors : ['gray'],
      legend : 'none'
      
      };
  

  constructor(private service : GraphService, private dataService : DataService) {
    
    }
    

  ngOnInit() {
    this.getRawData();
    
       }

  updateChart(){
    var totalInMonth:number = 0;
    var deceasedInMonth:number = 0;
    var startMonth  = 'March';
    
    for(var month in this.dataService.getAllData()['cases_time_series']){
      if(!((this.dataService.getAllData()['cases_time_series'][month].date).includes("January")
       || (this.dataService.getAllData()['cases_time_series'][month].date).includes("February"))){
            this.arr = [];
            
            this.arr.push(this.dataService.getAllData()['cases_time_series'][month].date);
            this.arr.push(Number(this.dataService.getAllData()['cases_time_series'][month].totalconfirmed));
            this.confirmedData.push(this.arr);
            
            this.arr = [];
            this.arr.push(this.dataService.getAllData()['cases_time_series'][month].date);
            this.arr.push(Number(this.dataService.getAllData()['cases_time_series'][month].totalrecovered));
            this.recoveredData.push(this.arr);
            
            this.arr = [];
            this.arr.push(this.dataService.getAllData()['cases_time_series'][month].date);
            this.arr.push(Number(this.dataService.getAllData()['cases_time_series'][month].totaldeceased));
            this.deceasedData.push(this.arr);

            this.arr = [];
            
            if((this.dataService.getAllData()['cases_time_series'][month].date).includes(startMonth)){
              totalInMonth += Number(this.dataService.getAllData()['cases_time_series'][month].dailyconfirmed);
              deceasedInMonth += Number(this.dataService.getAllData()['cases_time_series'][month].dailydeceased);
            }else{
              this.confirmedInMonths.push([startMonth, totalInMonth, deceasedInMonth]);
              startMonth = (this.dataService.getAllData()['cases_time_series'][month].date).trim().slice(2);
              totalInMonth = Number(this.dataService.getAllData()['cases_time_series'][month].dailyconfirmed);
              deceasedInMonth =  Number(this.dataService.getAllData()['cases_time_series'][month].dailydeceased);
            }
            
            

    }
  }

    this.confirmedInMonths.push([startMonth, totalInMonth, deceasedInMonth]);
    this.isDataLoaded = true;
    
    
  }

  getRawData(){
    this.service.getRawData()
    .then((res)=>{
      
      this.data = res;
    })
    .then(()=>{this.updatePieChart(this.data);})
    .then(()=>this.updateChart())
    .then(()=> {})
    .catch();

    

  }

  updatePieChart(data){   
    //console.log(data); 
    for(var d in data['raw_data']){
     
           if(data['raw_data'][d].gender == 'M'){
            this.totalMale += 1;
          }else if(data['raw_data'][d].gender == 'F'){
            this.totalFemale +=1;           
           
          }else if(data['raw_data'][d].gender == ''){
            this.totalOthers +=1;
        }
        
     
    }
        this.arr =[];
        this.infectionRatioByGender = [];
        this.arr.push("Male");
        this.arr.push(Number(this.totalMale));
        this.infectionRatioByGender.push(this.arr);
        this.arr = [];
        this.arr.push("Female");
        this.arr.push(Number(this.totalFemale));
        this.infectionRatioByGender.push(this.arr);
        this.arr = [];
        this.arr.push("Not Specified");
        this.arr.push(Number(this.totalOthers));
        this.infectionRatioByGender.push(this.arr);
       this.arr = [];
       
        
      
  }




  
}

import { Component, OnInit } from '@angular/core';
import { GraphService } from './graph.service';
import { DataService } from '../data/data.service';
import { reduce } from 'rxjs/operators';



@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  data = [
    ['Firefox', 45.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7] 
 ];


//  options = {
//   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
// };

  title = 'Cases confirmed in months';
  type = 'LineChart';
  confirmedData = [];
  recoveredData = [];
  deceasedData = [];
  //columnNames = ['Browser', 'Percentage'];
  totalMale:number = 0;
  totalFemale:number = 0;
  totalOthers:number = 0;
  infectionRatioByGender = [];
  arr =[];
  pieChartOptions = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
 };
  confirmedOptions = {   
  //   hAxis: {
  //     title: 'Date'
  //  },
  //  vAxis:{
  //     title: 'Number of People Infected in India'
  //  } 
  backgroundColor:'#f1f8e9',
  colors : ['red']
  
  };
  recoveredOptions = {   
    backgroundColor:'#f1f8e9',
    colors : ['green']
    
    };

    deceasedOptions = {   
      backgroundColor:'#f1f8e9',
      colors : ['gray']
      
      };
  width = 650;
  height = 400;

  constructor(private service : GraphService, private dataService : DataService) {
    this.updateChart();
    this.getRawData();
  }
    

  ngOnInit() {
  }

  updateChart(){
    

   for(var month in this.dataService.getAllData()['cases_time_series']){
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


}


    
  }

  getRawData(){
    this.service.getRawData()
    .then((res)=>{
      for( var data in res['raw_data']){
          if(res['raw_data'][data].gender == 'M'){
            this.totalMale += 1;  
          }else if(res['raw_data'][data].gender == 'F'){
            this.totalFemale +=1;
          }else{
            this.totalOthers +=1;
          }
            
      }
      this.arr = [];
      this.arr.push('Male');
      this.arr.push(this.totalMale);
      this.data.push(this.arr);
      this.arr = [];
      this.arr.push('Female');
      this.arr.push(this.totalFemale);
      this.data.push(this.arr);
      this.arr = [];

      this.arr.push('Others');
      this.arr.push(this.totalOthers);
      this.data.push(this.arr);

      
      
    })
    .catch();

    

  }



  
}

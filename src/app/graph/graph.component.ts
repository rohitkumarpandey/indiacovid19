import { Component, OnInit } from '@angular/core';
import { GraphService } from './graph.service';
import { DataService } from '../data/data.service';
import { reduce } from 'rxjs/operators';
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
  pieChartData = [];


//  options = {
//   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
// };

  title = 'Confirmed cases in months';
  type = 'LineChart';
  confirmedData = [];
  recoveredData = [];
  deceasedData = [];
  columnNames = ['Male', 'Female', 'Others'];
  
  infectionRatioByGender = [];
  arr =[];
  pieChartOptions = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e'], is3D: true,
    
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
    this.updateChart();
    // this.getRawData();
    // google.charts.load('current', {'packages':['corechart']});
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

    this.isDataLoaded = true;


}


    
  }

  getRawData(){
    this.service.getRawData()
    .then((res)=>{
      
      this.data = res;
    }).then((data)=>google.charts.setOnLoadCallback(this.updatePieChart(data)))
    .catch();

      

    

  }

  updatePieChart(data){   
    console.log(data); 
    for(var d in this.data['raw_data']){
     
           if(this.data['raw_data'][d].gender == 'M'){
            this.totalMale += 1;
          }else if(this.data['raw_data'][d].gender == 'F'){
            this.totalFemale +=1;           
           
          }else{
            this.totalOthers +=1;
        }
        
     
    }
        this.arr =[];
        this.pieChartData.push(['Gender','Number'])
        this.arr.push("Male");
        this.arr.push(Number(this.totalMale));
        this.pieChartData.push(this.arr);
        this.arr = [];
        this.arr.push("Female");
        this.arr.push(Number(this.totalFemale));
        this.pieChartData.push(this.arr);
        this.arr = [];
        this.arr.push("Others");
        this.arr.push(Number(this.totalOthers));
        this.pieChartData.push(this.arr);
       this.arr = [];

       var temp = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ]);
       var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
       chart.draw(temp, this.pieChartOptions);
  }




  
}

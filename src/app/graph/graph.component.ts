import { Component, OnInit } from '@angular/core';
import { GraphService } from './graph.service';



@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  title = 'Browser market shares at a specific website, 2014';
  type = 'LineChart';
  data = [
     ['Firefox', 45.0],
     ['IE', 26.8],
     ['Chrome', 12.8],
     ['Safari', 8.5],
     ['Opera', 6.2],
     ['Others', 0.7] 
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {   
    hAxis: {
      title: 'Person'
   },
   vAxis:{
      title: 'Fruits'
   } 
  };
  width = 650;
  height = 400;

  constructor(private service : GraphService) {
    this.updateChart();
  }
    

  ngOnInit() {
  }

  updateChart(){
    this.service.updateChart()
    .then()
    .catch();
    
  }

  
}

import { Component, OnInit } from '@angular/core';
import { GlobalService } from './global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  isDataLoaded : boolean = false;
  lastUpdated : string ;
  globalData : Array<{NewConfirmed : number, TotalConfirmed : number, NewDeaths : number,
    TotalDeaths : number, NewRecovered : number, TotalRecovered : number}> = [];
  countryData : Array<{country : string, NewConfirmed : number, TotalConfirmed : number, NewDeaths : number,
    TotalDeaths : number, NewRecovered : number, TotalRecovered : number, lastUpdated: string}> = [];

  constructor(private service : GlobalService, private router : Router) { }

  ngOnInit() {
    this.getGlobalData();
    $(document).ready(function(){
      $('#searchCountry').on('keyup', function(){
        var value = $(this).val().toString().toLowerCase();
        $("#countryTable tr").filter(function(){
           $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
           return true;
        });
      });
  });
  }

  getGlobalData(){
    this.service.getGlobalData()
    .then((data)=>{
      var global = data['Global'];
      if(global == null) this.getGlobalData(); //if too many request occurs then it will refresh the page;
      this.lastUpdated = new Date(data['Date']).toString();
      this.globalData = [];
      this.countryData = [];
      this.globalData.push({NewConfirmed : global.NewConfirmed, TotalConfirmed : global.TotalConfirmed,
         NewDeaths : global.NewDeaths, TotalDeaths : global.TotalDeaths,
          NewRecovered : global.NewRecovered, TotalRecovered : global.TotalRecovered});
      data['Countries'].forEach(country => {
          this.countryData.push({country : country.Country, NewConfirmed : country.NewConfirmed,
             TotalConfirmed : country.TotalConfirmed,
             NewDeaths : country.NewDeaths, TotalDeaths : country.TotalDeaths, NewRecovered : country.NewRecovered,
              TotalRecovered : country.TotalRecovered, lastUpdated : country.Date});
        
      });

      

    })
    .then(()=>this.isDataLoaded = true)
    .catch((err)=>{})
  }

}

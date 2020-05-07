import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';
import { Router } from '@angular/router';

declare function setTheme(mode):any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signature : string = 'Creator:- Rohit Pandey!'; 
   constructor(private router : Router){
     //navigator.onLine ? console.log('Online') : router.navigateByUrl('/error');
       }

   ngOnInit(){
     
    $('.navbar-collapse li a').click(function(){
      (<any>$(".navbar-collapse")).collapse('hide');
  });
    
   }

  //  themeChange(mode){
  //   setTheme(mode);
     
     
  //  }

   
  
   
}



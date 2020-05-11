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
  signature : string = 'Developed By: ROHIT PANDEY'; 
   constructor(private router : Router){
       }

   ngOnInit(){
    if(!navigator.onLine) this.router.navigateByUrl('/error'); 
    
    $('.navbar-collapse li a').click(function(){
      (<any>$(".navbar-collapse")).collapse('hide');
  });
    
   }

   
  
   
}



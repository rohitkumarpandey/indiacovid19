import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signature : string = 'Creator:- Rohit Pandey!'; 
   constructor(private router : Router){
     navigator.onLine ? console.log('Online') : router.navigateByUrl('/error');
       }

   ngOnInit(){}

   
  
   
}



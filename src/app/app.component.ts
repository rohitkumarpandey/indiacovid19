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
  signature : string = 'Developer : Rohit Pandey';
  note = '* This site is solely developed by the developer using the data available of the Pandemic Corona from different sources. If any fault or irrelevant data found then the developer will not liable for the mistakes. Kindly verify with the Official Government Site';

  constructor(private router : Router){
       }

   ngOnInit(){
    if(!navigator.onLine) this.router.navigateByUrl('/error'); 
    
    $('.navbar-collapse li a').click(function(){
      (<any>$(".navbar-collapse")).collapse('hide');
  });
    
   }

   
  
   
}



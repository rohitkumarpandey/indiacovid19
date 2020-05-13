import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ResourcesService } from './resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  @Input() category : string; 
  @Input() state : string; 
  
  resources : Array<{category:string, city : string,descriptionandorserviceprovided :string, nameoftheorganisation : string, phonenumber : string}>=[];


  

  constructor(private service : ResourcesService) { }

  ngOnInit() {
   
  }

  ngOnChanges(changes : SimpleChanges){
    this.getResources(changes.category.currentValue);

  }

  getResources(category){
    this.service.getResources()
    .then((res)=>{
      this.resources = [];
      res['resources'].forEach(element => {
        if(element.state == this.state && element.category == category){
         
          this.resources.push({category:element.category, city : element.city,descriptionandorserviceprovided :element.descriptionandorserviceprovided,
             nameoftheorganisation : element.nameoftheorganisation, phonenumber : element.phonenumber})
        }
      });
     
    })
    .catch();

    
  }

  
  

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  @Input() category : string; 

  resourceCategory : string;

  constructor() { }

  ngOnInit() {
    this.resourceCategory = this.category;
    console.log(this.category);
    
  }

}

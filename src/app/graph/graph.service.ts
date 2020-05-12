import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http : HttpClient) { }

  updateChart():Promise<any>{
    return this.http.get(environment.dataUrl)
    .toPromise()
    .then((res)=>{
      return res;
    })
    .catch()


  }

  getRawData():Promise<any>{
    return this.http.get(environment.rawDataUrl)
    .toPromise()
    .then((res)=>{
      return res;
    })
    .catch()
  }

  
}

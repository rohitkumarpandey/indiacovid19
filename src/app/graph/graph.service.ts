import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http : HttpClient) { }

  updateChart():Promise<any>{
    return this.http.get(environment.graphDataUrl)
    .toPromise()
    .then((res)=>{
      console.log(res);
    })
    .catch()


  }
}

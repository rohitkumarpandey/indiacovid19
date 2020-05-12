import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http : HttpClient) { }

  getZoneData():Promise<any>{
    return this.http.get(environment.zoneDataUrl)
    .toPromise()
    .then(res=>{return res;})
    .catch((error)=>{return error;})
  }

  getResources():Promise<any>{
    return this.http.get(environment.resourcesUrl)
    .toPromise()
    .then((resources)=>{return resources})
    .catch();
  }
}

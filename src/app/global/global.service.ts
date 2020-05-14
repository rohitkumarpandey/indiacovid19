import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }

  getGlobalData():Promise<any>{
    return this.http.get(environment.globalDataUrl)
    .toPromise()
    .then((data)=>{return data})
    .catch((err)=>{return err});

  }
}

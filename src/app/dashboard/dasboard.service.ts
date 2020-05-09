import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DasboardService {

  constructor(private http : HttpClient) { }

 

  getAllData():Promise<any>{
    return this.http.get(environment.dataUrl)
    .toPromise()
    .then((res)=>{
      return res;
    })
    .catch();    
  }
  
  getData():Promise<any>{
    return this.http.get(environment.stateDistrictDataurl)
    .toPromise()
    .then(res=>{
     
       return res;
       
      })
    .catch();

   
    
    
  }

  getLastConfirmData(){
    return Number(localStorage.getItem('confirm'));

  }
  setLastConfirmData(confirm){
    localStorage.setItem('confirm', confirm);
  }
}

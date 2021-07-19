import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InternService {
a;
  Data ={
    id_number:null,
    Full_name:null,
    passport:null,
    imgs:null,
    age:null,
    Choose:null,
    city:null,
    medical_institution:null,
    residency:null,
    department:null,
    years:null,
    ameil:null,
  };

  
  constructor(private httpClient:HttpClient) {
    var a= Math.floor(Math.random()*10);
    console.log("random test");
    
console.log(a);

   }

  
  get (): Observable <any>{
  
    return this.httpClient.get(`https://data.gov.il/api/3/action/datastore_search?resource_id=351d4347-8ee0-4906-8e5b-9533aef13595&limit=6000`)
  }
  getChoose (): Observable <any>{
  
    return this.httpClient.get(`https://data.gov.il/api/3/action/datastore_search?resource_id=c84082e9-7d45-4853-9a95-e7eaad7f66d5&limit=1000`)
        
  }
  getintern (): Observable <any>{

  
   return this.httpClient.get(`http://localhost:5000/api/users/gets`)
//  {first_name:}
 
    


}

createUser (): Observable <any>{
  console.log("CREATE FUNCTION!!!!");
  return this.httpClient.post('http://localhost:5000/api/users/create', this.Data)
}
}


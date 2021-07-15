import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
  supervisorData ={
    Full_name:"חיים לוי",
    passport:9876,
  }
  constructor(private httpClient:HttpClient) { 

  }
}

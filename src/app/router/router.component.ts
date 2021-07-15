import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {
user="";

  constructor(private http: HttpClient ) {

   }
   seck(){
     this.http.post("http//localhost:8080",{}).subscribe((data)=>{
        this.user=data.toString(); 
     })
   }

 ngOnInit(): void {
 }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternService } from '../servicers/intern.service';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaComponent implements OnInit {
  
  id;
  fullName:string;
  password;
  fon;
  ameil;
  
  onSubmit(){
    // const user1 = {
    //   id: this.id,
    //   fullName: this.fullName,
    //   password: this.password
    // }
    //console.log(this.id); 
    this.rrr();  
    this.router.navigate(['/ttt']);
  }
  
 
  constructor(private router: Router ,private internService:InternService ) { }

  ngOnInit(): void {
  }
  rrr(){
   this.internService.Data.Full_name=this.fullName;
   this.internService.Data.id_number=this.id;
   this.internService.Data.passport=this.password;
   this.internService.Data. ameil=this. ameil;
   console.log(this.internService.Data. ameil);
  }
 
  secka(){}
 
  butt(){
    console.log("enter");
this.router.navigate(['Formb']);
  }
}

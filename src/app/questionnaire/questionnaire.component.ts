import { Component, OnInit } from '@angular/core';
import { InternService } from '../servicers/intern.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})


export class QuestionnaireComponent implements OnInit {
  age;
  intern;
  Choose;
  city;
  academi;
  graduationyear;
  result;
  resulta;
  resultb;
  citys: any[]=[];
  id:any;
  constructor(private internService:InternService) {
     this.internService.get().subscribe((res)=>{ 
    this.result = res.result.records.map(field=>field['שם יישוב'])
    console.log(this.result)
    
    
  })
  this.internService.getChoose().subscribe((res)=>{ 
   this.resulta = res.result.records.map(field=>field['שם_ארץ'])
   console.log(this.resulta);
  })
  this.internService.getlocilst("yak").subscribe((res)=>{ 
    this.resultb = res
    console.log(this.resultb);
   })
}


 






  ngOnInit(): void {
    this.intern=this.internService.Data
  
    
    
  }
  Personal():void{
    this.internService.Data.age=this.age;
    this.internService.Data.Choose=this.Choose;
    this.internService.Data.city=this.city;
    console.log(this.internService.Data.age);
    console.log(this.internService.Data.Choose);
    console.log(this.internService.Data.city);
  }
  
  onUserClick ():void{
    console.log("ggggghhhhhpppp");
           
}}

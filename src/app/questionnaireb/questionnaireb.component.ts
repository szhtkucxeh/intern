import { Component, OnInit } from '@angular/core';
import { InternService } from '../servicers/intern.service';

@Component({
  selector: 'app-questionnaireb',
  templateUrl: './questionnaireb.component.html',
  styleUrls: ['./questionnaireb.component.css']
})
export class QuestionnairebComponent implements OnInit {
  intern
  department;
  medical_institution;
  residency;
  years;
 
  constructor(private internService:InternService) { }
 
    

  ngOnInit(): void {
    this.intern=this.internService.Data;
  }
  Personal(){
    this.internService.Data.department=this.department;
    this.internService.Data.residency=this.residency;
    this.internService.Data.medical_institution=this.medical_institution;
    this.internService.Data.years=this.years;
    console.log(this.internService.Data.residency);
    console.log(this.internService.Data.department);
    console.log(this.internService.Data.medical_institution);
    console.log(this.internService.Data.years);
  }
 
  
}

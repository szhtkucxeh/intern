import { Component, OnInit } from '@angular/core';
import { InternService } from '../servicers/intern.service';

@Component({
  selector: 'app-questionnaire-c',
  templateUrl: './questionnaire-c.component.html',
  styleUrls: ['./questionnaire-c.component.css']
})
export class QuestionnaireCComponent implements OnInit {
  intern
  constructor(private internService:InternService) { }

 
  ngOnInit(): void {
    this.intern=this.internService.Data;
  }
  Personal():void{

  }
}

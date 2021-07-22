import { Component, OnInit } from '@angular/core';
import { InternService } from '../servicers/intern.service';
import { SupervisorService } from '../supervisor.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  resultb=[];
  person={id_number:""};
  constructor(private internService:InternService, private supervisorService:SupervisorService) {

  this.internService.getintern().subscribe((res)=>{ 
    this.resultb = res
    console.log(this.resultb);
   })
}
  ngOnInit(): void {
      }

  onUserClick():void{
    console.log(this.person.id_number)
  }
  }

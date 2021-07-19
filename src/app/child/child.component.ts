import { Component, OnInit } from '@angular/core';
import { InternService } from '../servicers/intern.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  resultb=[];

  constructor(private internService:InternService) {

  this.internService.getintern().subscribe((res)=>{ 
    this.resultb = res
    console.log(this.resultb);
   })
}
  ngOnInit(): void {
  }
  onUserClick():void{

  }
}

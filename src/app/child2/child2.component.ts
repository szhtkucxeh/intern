import { Component, OnInit } from '@angular/core';
import { InternService } from '../servicers/intern.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  resultb=[];


  constructor(private internService:InternService) {
     
    this.internService.getintern().subscribe((res)=>{ 
        this.resultb = res
        console.log(this.resultb[4].passport);
       })
  }

  ngOnInit(): void {
  }
  
}

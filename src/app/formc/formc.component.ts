import { Component, OnInit } from '@angular/core';
import { InternService } from '../servicers/intern.service';

@Component({
  selector: 'app-formc',
  templateUrl: './formc.component.html',
  styleUrls: ['./formc.component.css']
})
export class FormcComponent implements OnInit {
  intern;
  imgs;
  
  
  constructor(private internService:InternService) { }
 
  ngOnInit(): void {
    this.intern=this.internService.Data;
  }
  
  img(){
    this.internService.Data.imgs=this.imgs;
    console.log(this.internService.Data.imgs);
    console.log("gggg");
    console.log(this.internService.Data.Full_name);
}
  }
  

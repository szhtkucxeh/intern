import { Component, OnInit } from '@angular/core';
import { InternService } from '../servicers/intern.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {
  intern: any;
  test;
  Personal;

  constructor(private internService:InternService) { }

 
  ngOnInit(): void {
  
    this.intern=this.internService.Data;
  }
  
}

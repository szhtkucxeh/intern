import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator-b',
  templateUrl: './simulator-b.component.html',
  styleUrls: ['./simulator-b.component.css']
})

export class SimulatorBComponent implements OnInit {
  practice = 1;
  retry= 3;
  date ;
  constructor() {
    this.date= Date.now();
    
   }

   

  ngOnInit(): void {
  }

}

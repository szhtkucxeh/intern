import { Component, OnInit } from '@angular/core';
import { InternService } from '../servicers/intern.service';
import { SupervisorService } from '../supervisor.service';

@Component({
  selector: 'app-supervisorb',
  templateUrl: './supervisorb.component.html',
  styleUrls: ['./supervisorb.component.css']
})
export class SupervisorbComponent implements OnInit {
  supervisor;
  actives = 0;
  constructor(private supervisorService:SupervisorService) {


   }

  ngOnInit(): void {
    this.supervisor=this.supervisorService.supervisorData.Full_name;

  }
  
}

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
  show=true;
  constructor(private supervisorService:SupervisorService) {

    // if ( this.show){
    //       this.show= true;}
    //     else{this.show= false;}
    
   }

  ngOnInit(): void {
    this.supervisor=this.supervisorService.supervisorData.Full_name;

  }
  switch(){
    this.show = !this.show;
  }
}

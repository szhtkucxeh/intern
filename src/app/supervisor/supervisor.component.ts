import { Component, OnInit } from '@angular/core';
import { SupervisorService } from '../supervisor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {
fullName;
password=null;
show= false;

  constructor(private router:Router ,private supervisorService:SupervisorService) { }

  ngOnInit(): void {
}

onUserClick():void{
  console.log(this.fullName+' '+this.password);
  
  if(this.fullName == this.supervisorService.supervisorData.Full_name 
    && this.password == this.supervisorService.supervisorData.passport){
    this.router.navigateByUrl('/supervisorb')
  //  this.show= true
  }else{
    alert('the sms is net fit')
  }
}

}

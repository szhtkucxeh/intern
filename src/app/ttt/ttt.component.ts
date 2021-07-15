import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InternService } from '../servicers/intern.service';

@Component({
  selector: 'app-ttt',
  templateUrl: './ttt.component.html',
  styleUrls: ['./ttt.component.css']
})
export class TttComponent implements OnInit {
  code = [];
  myinput=[];
  intern;
show= false;
// disabled=true;
sms = 'abcd'
  constructor(private router:Router ,private internService:InternService) { }

  ngOnInit(): void {
    this.intern=this.internService.Data;
    
    this.code[0];
    this.code[1];
    this.code[2];
    this.code[3];
    setInterval(()=>{
      if(this.code[0] && this.code[1] &&this.code[2] &&this.code[3]){
        // this. disabled=false;
      }
    },100)
  }
  onUserClick ():void{
    
    
    if(this.code.join('')===this.sms)
    {
      this.router.navigateByUrl('/Formc')
    }else{
      alert('the sms is net fit')
    }
  }
  w(x){
    if(x.code != 'Backspace'){
      x.srcElement.nextElementSibling.focus();
    }
  }
    
  
  
}

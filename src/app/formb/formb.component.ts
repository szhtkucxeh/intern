import { Component, OnInit, ViewRef, ElementRef, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-formb',
  templateUrl: './formb.component.html',
  styleUrls: ['./formb.component.css']
})
export class FormbComponent implements OnInit, AfterViewInit {
@ViewChild('input') inputf;
  @ViewChildren('numbers')  numbers;
  
code = [];
show= false;
disabled=true;
  constructor() { }

  ngOnInit(): void {
     this.code[0];
     this.code[1];
     this.code[2];
     this.code[3];

     this.show= !this.show;
  console.log(this.code);
 
  
  
  }
  ngAfterViewInit(): void {
    
   // this.inputf=this.inputf.nativeElement.children;console.log(this.inputf,'this.inputf');
    
    this.numbers=this.numbers.toArray();
    console.log(this.numbers);
    let codePhone: String[] = [];
    this.numbers[0].nativeElement.focus();
    this.numbers.forEach((input , idx) => {
      input.nativeElement.addEventListener('keyup',(e)=>{
        if (e.key >= 0 && e.key <= 9) {
          codePhone[idx] = e.key;
          this.numbers[idx].nativeElement.value = codePhone[idx]
          // this.numbers[idx].nativeElement.value = ''
          if (idx + 1 < this.numbers.length) {
            setTimeout(() => this.numbers[idx + 1].nativeElement.focus(), 10)
          }
        } else if (e.key === 'Backspace') {
          // codePhone.pop();
          codePhone[idx] = '';
          // if (idx > 0) {
            if (idx > 0 && this.numbers[idx].nativeElement.value==''){
            setTimeout(() =>
              this.numbers[idx - 1].nativeElement.focus()
              , 2);
          }
        }
        console.log(codePhone);
        
        let codeStr = codePhone.join('')
        console.log(codeStr);
        
        if (codeStr.length == this.numbers.length) {
         // this.submit(codeStr)
          // codePhone='';
          this.disabled=false;
        } else {
          this.disabled=true;
        }
      })
    })
  }
    onUserClick ():void{
    
    //   //        this.letmeService.get(this.card.id).subscribe((coinsdata: any)=>{ 
    //     // this.coinsa=coinsdata;

    //     // console.log(coinsdata);

    //   // })

    // // if (! this.show){
    // //     this.show= true;}
    // //   else{this.show= false;}
  
    // if(this.code[0] && this.code[1] &&this.code[2] &&this.code[3]){
    //   this. disabled=false;}

  }

 
}

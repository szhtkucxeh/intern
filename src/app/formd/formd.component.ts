import { Component, OnInit } from '@angular/core';
import { InternService } from '../servicers/intern.service';

@Component({
  selector: 'app-formd',
  templateUrl: './formd.component.html',
  styleUrls: ['./formd.component.css']
})
export class FormdComponent implements OnInit {
  intern;
  constructor(private internService:InternService) { }

  ngOnInit(): void {
    this.intern=this.internService.Data;
  }

}

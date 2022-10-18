import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-mid',
  templateUrl: './main-mid.component.html',
  styleUrls: ['./main-mid.component.css']
})
export class MainMidComponent implements OnInit {
  textShow = false
  showText(){
    this.textShow = true;
   }

   closeText(){
    this.textShow = false;
   }

   
  constructor() { }

  ngOnInit(): void {
    
  }

}

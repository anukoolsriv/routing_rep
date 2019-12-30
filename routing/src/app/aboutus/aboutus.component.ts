import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  flag: boolean = true;
  names:string[] = new Array();

  constructor() { }

  ngOnInit() {
    this.names[0] = "Akash";
    this.names[1] = "Akshay";
    this.names[2] = "Anukool";
    this.names[3] = "Sachin";
  }
  toggle():void{
    this.flag = !this.flag;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  visibility:boolean = true;

  constructor() { }

  ngOnInit() {
  }
  myEvent(){
    this.visibility = !this.visibility;
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  visibility:boolean = true;

  constructor() { }

  ngOnInit() {
  }
  myEvent(){
    this.visibility = !this.visibility;
  }
  onChange(){

  }
}

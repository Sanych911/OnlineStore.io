import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Input} from '@angular/core';


@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],

providers:[]
})
export class BodyComponent  {
  
  @Input() itemsBody: any;
  
  

  constructor() { }

  
 
  
   
}

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
  id:number;
  @Input() itemsBody: any;
  
  visibil:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  test(val:number,itemsBody){
   // let isFound = itemsBody.some(_ => _.itemsBody_id == val);
   
  let res=itemsBody.some(
   function(itemsBody)
       { return itemsBody.id == val});
  return res;
  }
  
  
   
}

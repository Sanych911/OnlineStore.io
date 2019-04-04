import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Input} from '@angular/core';

import { BootJsonService } from '../../service/boot-json.service';


@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],

  providers:[BootJsonService]
})
export class BodyComponent  {
  
  @Input() itemsBody: any;
  itemss:any; 
  counter:number = 0;

  constructor(private BootJsonService: BootJsonService) { } 
  ngOnInit(){
    this.BootJsonService.getData().subscribe( data => this.itemss=data["itemList"]);
}
inCard(inCard){
  this.counter++;

}
}




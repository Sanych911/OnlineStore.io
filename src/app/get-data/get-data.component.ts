import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  fileData: any;
  result: any[];
  constructor(private myHttp: HttpClient) {
 
  }

  ngOnInit() {
    this.myHttp.get('/assets/data.json').subscribe(	(response) => {	
      
     // console.log(this.fileData = response)
      																});
 }

  }



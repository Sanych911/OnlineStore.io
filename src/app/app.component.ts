import { Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { BootJsonService } from './shared/service/boot-json.service';
import { Item } from './shared/service/boot-json.service';
import { OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`<body [itemsBody]="items"></body>`,
 /*`<ul>
  <li *ngFor="let item of items">
  <p>Название товара: {{item?.name}}</p>
  <p>Цена: {{item?.price}}</p>
  <p>id: {{item?.id}}</p>
  </li>
</ul>`,*/
providers:[BootJsonService]
})
export class AppComponent implements OnInit {
 public items: Item[]=[];
public name:string="Tom";
  constructor(private BootJsonService: BootJsonService){}
    
  ngOnInit(){
        
      
      this.BootJsonService.getData().subscribe( data => this.items=data["itemList"]);
  }
}


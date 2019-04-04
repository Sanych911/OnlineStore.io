import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BootJsonService {
  constructor(private http: HttpClient) {
  }
  getData(){
    return this.http.get('/assets/data.json')
  }
}
export class Item{
  name: string;
  price: number;
  id: number;
  img: string;
}


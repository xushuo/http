import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import 'rxjs/Rx'
import {Http,Headers} from "@angular/http";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  /*
   dataSource: Observable<any>;
   products: Array<any>=[];

   constructor(private http: Http) {
   this.dataSource  = this.http.get('/api/products').map((res) => res.json() );
   }

   ngOnInit() {
   this.dataSource.subscribe((data) => this.products=data);
   }*/

  products: Observable<any>;

  constructor(private http: Http) {

    let myheader: Headers = new Headers();
    myheader.append("Authorization", "Basic 2017");
    this.products = this.http.get('/api/products', {headers: myheader}).map((res) => res.json());
  }

  ngOnInit() {
  }
}

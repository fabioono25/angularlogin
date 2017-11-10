import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Product } from './product.model';
import { Http, Response } from '@angular/http';
import {Headers} from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class ProductService {
  productsChanged = new Subject<Product[]>();

  private url: string = "http://localhost:60757/api/Products";

  private products: Product[];

  constructor(private router: Router, private http: Http) {}

  setProducts(products: Product[]) {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }

  getProducts() {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');    
    headers.append('Authorization', "Bearer " + localStorage["token"]);
    
    return this.http.get(this.url, {headers: headers} )
      .map(
        (response: Response) => {
          const products: Product[] = response.json();
          for (let product of products) {
            console.log(product);
          }
          this.products = products;
          return products;
        }
      )
      
  }

  logError(err: any) {
      console.log('erro: ' + err);
  }

  getProduct(index: number) {
    return this.products[index];
  }
}

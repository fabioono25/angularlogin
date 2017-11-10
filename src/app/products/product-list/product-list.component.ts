import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Product } from '../product.model';
import { ProductService } from '../product.service';

import { AlertService } from '../../services/index';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  subscription: Subscription;

  constructor(private productService: ProductService,
              private alertService: AlertService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {  
  }

  onSearchProduct() {

      this.products = [];

      this.productService.getProducts().subscribe(
            data => this.loadProducts(data),
            err => this.logError(err),
            () => console.log('done')
      );
  }

  loadProducts(products: Product[]){
    this.products = products;
  }

  logError(err: any) {
      console.log('erro: ' + err);
      
      localStorage.setItem('token', '');

      if (err.status == 401)
        this.alertService.error('Your user don\'t have permission to access this system. You will be redirected to the login page.');

      setTimeout((router: Router) => {
          this.router.navigate(['signin']);
      }, 4000);  //5s
  }

  ngOnDestroy() {
    
  }
}

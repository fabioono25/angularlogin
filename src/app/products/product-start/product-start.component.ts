import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-product-start',
  templateUrl: './product-start.component.html',
  styleUrls: ['./product-start.component.css']
})
export class ProductStartComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}

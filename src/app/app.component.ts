import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'product';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDGDTtGNC4FkKpSe85qb2wLHzNi2xkxFy8",
      authDomain: "ng-product-book.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
